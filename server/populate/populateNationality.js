const { Nationality } = require("../models");

const populateNationality = async () => {
  const nationalities = [
    { nationality_desc: "Filipino" },
    { nationality_desc: "American" },
    { nationality_desc: "Canadian" },
  ];

  for (const nationality of nationalities) {
    await Nationality.findOrCreate({
      where: { nationality_desc: nationality.nationality_desc },
      defaults: nationality,
    });
  }

  console.log("Database populated with nationalities.");
};

module.exports = populateNationality;
