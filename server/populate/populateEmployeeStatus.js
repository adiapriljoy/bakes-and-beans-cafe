const { EmployeeStatus } = require("../models");

const populateEmployeeStatus = async () => {
  const employee_statuses = [
    { emp_status_desc: "Regular - Full time" },
    { emp_status_desc: "Regular - Part time" },
    { emp_status_desc: "Contractual" },
    { emp_status_desc: "Trainee" },
  ];

  for (const employee_status of employee_statuses) {
    await EmployeeStatus.findOrCreate({
      where: { emp_status_desc: employee_status.emp_status_desc },
      defaults: employee_status,
    });
  }

  console.log("Database populated with employee statuses.");
};

module.exports = populateEmployeeStatus;
