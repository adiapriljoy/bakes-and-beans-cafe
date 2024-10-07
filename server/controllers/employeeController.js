const {
  Employee,
  EmployeeStatus,
  Position,
  CivilStatus,
} = require("../models");

const getEmployeeById = async (req, res) => {
  const employeeId = parseFloat(req.params.employeeId);
  try {
    const employee = await Employee.findOne({
      where: {
        emp_id: employeeId,
      },
      include: [
        {
          model: EmployeeStatus,
          as: "empStatus",
          attributes: ["emp_status_desc"],
        },
        {
          model: Position,
          as: "position",
          attributes: ["position_desc"],
        },
        {
          model: CivilStatus,
          as: "civilStatus",
          attributes: ["civil_status_desc"],
        },
      ],
    });

    const responseData = {
      employeeId: employeeId,
      fullName: `${employee.emp_fname} ${employee.emp_lname}`,
      firstName: employee.emp_fname,
      lastName: employee.emp_lname,
      employmentStatus: employee.empStatus.emp_status_desc,
      position: employee.position.position_desc,
      civilStatus: employee.civilStatus.civil_status_desc,
    };

    return res.json({
      status: "success",
      payload: responseData,
    });
    
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getEmployeeById };
