const { Tax } = require("../models");

const populateTax = async () => {
  const taxes = [
    {
      tax_min: 0,
      tax_max: 20833.99,
      tax_fix_value: 0,
      tax_rate: 0,
    },
    {
      tax_min: 20834.00,
      tax_max: 33333.99,
      tax_fix_value: 0,
      tax_rate: 20.00,
    },
    {
      tax_min: 33334.00,
      tax_max: 66667.99,
      tax_fix_value: 2500.00,
      tax_rate: 25.00,
    },
    {
      tax_min: 66668.00,
      tax_max: 166667.99,
      tax_fix_value: 10833.00,
      tax_rate: 30.00,
    },
    {
      tax_min: 166668.00,
      tax_max: 6666667.99,
      tax_fix_value: 40833.00,
      tax_rate: 32.00,
    },
    {
      tax_min: 6666668.00,
      tax_max: null,
      tax_fix_value: 200833.00,
      tax_rate: 35.00,
    },
  ];

  for (const tax of taxes) {
    await Tax.findOrCreate({
      where: {
        tax_min: tax.tax_min,
        tax_max: tax.tax_max,
        tax_rate: tax.tax_rate,
      },
      defaults: tax,
    });
  }

  console.log("Database populated with Tax.");
};

module.exports = populateTax;
