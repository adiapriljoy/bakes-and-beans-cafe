const { Department } = require("../models");

const populateDepartment = async () => {
  const departments = [
    { department_desc: "IT" },
    { department_desc: "Finance" },
    { department_desc: "Management" },
    { department_desc: "Cashier" },
  ];

  for (const department of departments) {
    await Department.findOrCreate({
      where: { department_desc: department.department_desc },
      defaults: department,
    });
  }

  console.log("Database populated with departments.");
};

module.exports = populateDepartment;
