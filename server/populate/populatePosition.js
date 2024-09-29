const { Position } = require("../models");

const populatePosition = async () => {
  const positions = [
    { position_desc: "Admin" },
    { position_desc: "Manager" },
    { position_desc: "Cashier" },
    { position_desc: "Finance" },
    { position_desc: "Project Manager" },
    { position_desc: "Junior Developer" },
    { position_desc: "Senior Developer" },
    { position_desc: "Mid Developer" },
    { position_desc: "HR Head" },
    { position_desc: "Quality Assurance Officer" },
    { position_desc: "Business Analyst" },
    { position_desc: "System Analyst" },
    { position_desc: "Operations Manager" },
    { position_desc: "Payroll Accountant" },
  ];

  for (const position of positions) {
    await Position.findOrCreate({
      where: { position_desc: position.position_desc },
      defaults: position,
    });
  }

  console.log("Database populated with positions.");
};

module.exports = populatePosition;
