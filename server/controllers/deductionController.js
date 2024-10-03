const { SSSContribution, PhilHealthContribution } = require("../models");
const { Op } = require("sequelize");

const calculateSSS = async (salary) => {
  try {
    const sssRecord = await SSSContribution.findOne({
      where: {
        sss_min: { [Op.lte]: salary },
        [Op.or]: [{ sss_max: { [Op.gte]: salary } }, { sss_max: null }],
      },
    });
    if (!sssRecord) {
      return res.status(404).json({
        message:
          "No matching SSS contribution bracket found for the given salary",
      });
    } else {
      return sssRecord.sss_ee_share;
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error calculating SSS contribution", error });
  }
};

const calculatePhilHealth = async (salary) => {
  try {
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
      return res.status(404).json({
        message:
          "No matching PhilHealth contribution bracket found for the given salary",
      });
    } else {
      const philHealthContribution = (
        (salary * (philHealthRecord.philhealth_rate / 100)) /
        2
      ).toFixed(2);
      return philHealthContribution;
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error calculating PhilHealth contribution", error });
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

const calculateContribution = async (req, res) => {
  const salary = parseFloat(req.params.salary);

  if (isNaN(salary) || salary <= 0) {
    return res.status(400).json({ message: "Invalid salary" });
  } else {
    const sss = await calculateSSS(salary);
    const philHealth = await calculatePhilHealth(salary);
    const pagIbig = calculatePagIbig(salary);

    return res.json({
      salary: salary.toFixed(2),
      sss,
      philHealth,
      pagIbig,
    });
  }
};

module.exports = { calculateContribution };
