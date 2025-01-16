const {
  Employee,
  EmployeeStatus,
  Position,
  CivilStatus,
  Nationality,
  Department,
} = require("../models");

const includeModels = [
  {
    model: Nationality,
    as: "nationality",
    attributes: ["nationality_desc"],
  },
  {
    model: CivilStatus,
    as: "civilStatus",
    attributes: ["civil_status_desc"],
  },
  {
    model: Department,
    as: "department",
    attributes: ["department_desc"],
  },
  {
    model: Position,
    as: "position",
    attributes: ["position_desc"],
  },
  {
    model: EmployeeStatus,
    as: "employmentStatus",
    attributes: ["emp_status_desc"],
  },
];

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
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getEmployeeById, getEmployees };
