const { PhilHealthContribution } = require("../models");

const populatePhilHealth = async () => {
  const philhealth_contributions = [
    {
      philhealth_min: 0,
      philhealth_max: 10000.99,
      philhealth_rate: 3.50,
    },
    {
      philhealth_min: 10001.00,
      philhealth_max: 20000.99,
      philhealth_rate: 4.00,
    },
    {
      philhealth_min: 20001.00,
      philhealth_max: 30000.99,
      philhealth_rate: 4.50,
    },
    {
      philhealth_min: 30001.00,
      philhealth_max: null,
      philhealth_rate: 5.00,
    },
  ];

  for (const philhealth_contribution of philhealth_contributions) {
    await PhilHealthContribution.findOrCreate({
      where: {
        philhealth_min: philhealth_contribution.philhealth_min,
        philhealth_max: philhealth_contribution.philhealth_max,
        philhealth_rate: philhealth_contribution.philhealth_rate,
      },
      defaults: philhealth_contribution,
    });
  }

  console.log("Database populated with PhilHealth contributions.");
};

module.exports = populatePhilHealth;
