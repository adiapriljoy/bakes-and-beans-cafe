const { Employee } = require("../models");
const ExcelJS = require("exceljs");
const includeModels = require("../helpers/employeeIncludeModels");
const moment = require("moment");

const transformEmployee = (employee) => {
  const emp = employee.toJSON();
  return {
    ...emp,
    nationality: emp.nationality?.nationality_desc,
    civilStatus: emp.civilStatus?.civil_status_desc,
    department: emp.department?.department_desc,
    position: emp.position?.position_desc,
    employmentStatus: emp.employmentStatus?.emp_status_desc,
  };
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: includeModels,
      attributes: [
        ["emp_id", "id"],
        ["emp_fname", "firstName"],
        ["emp_lname", "lastName"],
        ["emp_mname", "middleName"],
        ["emp_suffix", "suffix"],
        ["emp_dob", "dateOfBirth"],
        ["emp_gender", "gender"],
        ["emp_email", "emailAddress"],
        ["emp_contact", "mobileNumber"],
        ["date_hire", "dateHired"],
      ],
    });

    res.status(200).json({
      status: "success",
      payload: employees?.map(transformEmployee),
    });
  } catch (error) {
    console.error("Error getting employees:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getEmployeeById = async (req, res) => {
  const employeeId = parseFloat(req.params.employeeId);
  try {
    const emp = await Employee.findOne({
      where: { emp_id: employeeId },
      include: includeModels,
    });

    const responseData = {
      employeeId: employeeId,
      fullName: `${emp.emp_fname} ${emp.emp_lname}`,
      firstName: emp.emp_fname,
      lastName: emp.emp_lname,
      employmentStatus: emp.employmentStatus.emp_status_desc,
      position: emp.position.position_desc,
      civilStatus: emp.civilStatus.civil_status_desc,
    };

    return res.status(200).json({
      status: "success",
      payload: responseData,
    });
  } catch (error) {
    console.error("Error getting employee with that ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const exportEmployeesToExcel = async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: includeModels,
      attributes: [
        ["emp_id", "id"],
        ["emp_fname", "firstName"],
        ["emp_lname", "lastName"],
        ["emp_mname", "middleName"],
        ["emp_suffix", "suffix"],
        ["emp_dob", "dateOfBirth"],
        ["emp_gender", "gender"],
        ["emp_email", "emailAddress"],
        ["emp_contact", "mobileNumber"],
        ["date_hire", "dateHired"],
      ],
    });

    const transformedData = employees.map(transformEmployee);

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Employees", {
      properties: { tabColor: { argb: "4C3D3D" } },
    });

    worksheet.columns = [
      { header: "Employee ID", key: "id", width: 15 },
      { header: "Full Name", key: "fullName", width: 25 },
      { header: "Date of Birth", key: "dateOfBirth", width: 15 },
      { header: "Gender", key: "gender", width: 10 },
      { header: "Email", key: "emailAddress", width: 30 },
      { header: "Mobile Number", key: "mobileNumber", width: 20 },
      { header: "Date Hired", key: "dateHired", width: 15 },
      { header: "Nationality", key: "nationality", width: 15 },
      { header: "Civil Status", key: "civilStatus", width: 15 },
      { header: "Department", key: "department", width: 20 },
      { header: "Position", key: "position", width: 20 },
      { header: "Employment Status", key: "employmentStatus", width: 25 },
    ];

    worksheet.getRow(1).eachCell((cell) => {
      cell.style = {
        font: { bold: true },
      };
      cell.value = cell.value.toString().toUpperCase();
    });

    const rowsWithFullName = transformedData.map((emp) => ({
      ...emp,
      fullName: `${emp.firstName} ${emp.lastName}`.trim() || "N/A",
    }));

    worksheet.addRows(rowsWithFullName);

    const timestamp = moment().format("YYYYMMDD_HHmmss_SSS");
    const fileName = `employees_${timestamp}.xlsx`;

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    res.setHeader("X-Export-Status", "success");

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Error exporting employees to Excel:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getEmployeeById, getEmployees, exportEmployeesToExcel };
