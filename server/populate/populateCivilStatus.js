const { CivilStatus } = require("../models");

const populateCivilStatus = async () => {
  const statuses = [
    { civil_status_desc: "Married" },
    { civil_status_desc: "Single" },
    { civil_status_desc: "Divorced" },
    { civil_status_desc: "Widowed" },
    { civil_status_desc: "Separated" },
    { civil_status_desc: "In a civil partnership" },
  ];

  for (const status of statuses) {
    await CivilStatus.findOrCreate({
      where: { civil_status_desc: status.civil_status_desc },
      defaults: status,
    });
  }

  console.log("Database populated with civil statuses.");
};

module.exports = populateCivilStatus;
