const { SSSContribution, PhilHealthContribution, Tax } = require("../models");
const { Op } = require("sequelize");

const calculateSSS = async (salary) => {
  const sssRecord = await SSSContribution.findOne({
    where: {
      sss_min: { [Op.lte]: salary },
      [Op.or]: [{ sss_max: { [Op.gte]: salary } }, { sss_max: null }],
    },
  });
  if (!sssRecord) {
    throw new Error(
      "No matching SSS contribution bracket found for the given salary"
    );
  } else {
    return sssRecord.sss_ee_share;
  }
};

const calculatePhilHealth = async (salary) => {
  const philHealthRecord = await PhilHealthContribution.findOne({
    where: {
      philhealth_min: { [Op.lte]: salary },
      [Op.or]: [
        { philhealth_max: { [Op.gte]: salary } },
        { philhealth_max: null },
      ],
    },
  });

  if (!philHealthRecord) {
    throw new Error(
      "No matching PhilHealth contribution bracket found for the given salary"
    );
  } else {
    const philHealthContribution = (
      (salary * (philHealthRecord.philhealth_rate / 100)) /
      2
    ).toFixed(2);
    return philHealthContribution;
  }
};

const calculatePagIbig = (salary) => {
  let pagIbigContribution;

  if (salary > 1500 && salary <= 5000) {
    pagIbigContribution = salary * 0.02;
  } else {
    pagIbigContribution = 100.0;
  }

  return pagIbigContribution?.toFixed(2);
};

const calculateTax = async (salary) => {
  const taxRecord = await Tax.findOne({
    where: {
      tax_min: { [Op.lte]: salary },
      [Op.or]: [{ tax_max: { [Op.gte]: salary } }, { tax_max: null }],
    },
  });
  if (!taxRecord) {
    throw new Error("No matching Tax bracket found for the given salary");
  } else {
    const taxableSalary = salary - (taxRecord.tax_min - 1);
    const tax = taxableSalary * (taxRecord.tax_rate / 100);
    const totalTax = tax + parseFloat(taxRecord.tax_fix_value);
    return parseFloat(totalTax.toFixed(2));
  }
};

const calculateContribution = async (req, res) => {
  let salary = parseFloat(req.params.salary);

  if (isNaN(salary) || salary <= 0) {
    return res.status(400).json({ message: "Invalid salary" });
  } else {
    try {
      const [sss, philHealth, pagIbig, tax] = await Promise.all([
        calculateSSS(salary),
        calculatePhilHealth(salary),
        calculatePagIbig(salary),
        calculateTax(salary),
      ]);

      salary = parseFloat(salary.toFixed(2));
      res.json({
        status: "success",
        payload: {
          salary,
          sss,
          philHealth,
          pagIbig,
          tax,
        },
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error calculating contributions", error });
    }
  }
};

module.exports = { calculateContribution };
