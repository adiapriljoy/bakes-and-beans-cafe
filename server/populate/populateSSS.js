const { SSSContribution } = require("../models");

const populateSSS = async () => {
  const sss_contributions = [
    {
      sss_min: 0,
      sss_max: 4249.99,
      sss_ee_share: 180.0,
    },
    {
      sss_min: 4250.0,
      sss_max: 4749.99,
      sss_ee_share: 202.5,
    },
    {
      sss_min: 4750.0,
      sss_max: 5249.99,
      sss_ee_share: 225.0,
    },
    {
      sss_min: 5250.0,
      sss_max: 5749.99,
      sss_ee_share: 247.5,
    },
    {
      sss_min: 5750.0,
      sss_max: 6249.99,
      sss_ee_share: 270.0,
    },
    {
      sss_min: 6250.0,
      sss_max: 6749.99,
      sss_ee_share: 292.5,
    },
    {
      sss_min: 6750.0,
      sss_max: 7249.99,
      sss_ee_share: 315.0,
    },
    {
      sss_min: 7250.0,
      sss_max: 7749.99,
      sss_ee_share: 337.5,
    },
    {
      sss_min: 7750.0,
      sss_max: 8249.99,
      sss_ee_share: 360.0,
    },
    {
      sss_min: 8250.0,
      sss_max: 8749.99,
      sss_ee_share: 382.5,
    },
    {
      sss_min: 8750.0,
      sss_max: 9249.99,
      sss_ee_share: 405.0,
    },
    {
      sss_min: 9250.0,
      sss_max: 9749.99,
      sss_ee_share: 427.5,
    },
    {
      sss_min: 9750.0,
      sss_max: 10249.99,
      sss_ee_share: 450.0,
    },
    {
      sss_min: 10250.0,
      sss_max: 10749.99,
      sss_ee_share: 472.5,
    },
    {
      sss_min: 10750.0,
      sss_max: 11249.99,
      sss_ee_share: 495.0,
    },
    {
      sss_min: 11250.0,
      sss_max: 11749.99,
      sss_ee_share: 517.5,
    },
    {
      sss_min: 11750.0,
      sss_max: 12249.99,
      sss_ee_share: 540.0,
    },
    {
      sss_min: 12250.0,
      sss_max: 12749.99,
      sss_ee_share: 562.5,
    },
    {
      sss_min: 12750.0,
      sss_max: 13249.99,
      sss_ee_share: 585.0,
    },
    {
      sss_min: 13250.0,
      sss_max: 13749.99,
      sss_ee_share: 607.5,
    },
    {
      sss_min: 13750.0,
      sss_max: 14249.99,
      sss_ee_share: 630.0,
    },
    {
      sss_min: 14250.0,
      sss_max: 14749.99,
      sss_ee_share: 652.5,
    },
    {
      sss_min: 14750.0,
      sss_max: 15249.99,
      sss_ee_share: 675.0,
    },
    {
      sss_min: 15250.0,
      sss_max: 15749.99,
      sss_ee_share: 697.5,
    },
    {
      sss_min: 15750.0,
      sss_max: 16249.99,
      sss_ee_share: 720.0,
    },
    {
      sss_min: 16250.0,
      sss_max: 16749.99,
      sss_ee_share: 742.5,
    },
    {
      sss_min: 16750.0,
      sss_max: 17249.99,
      sss_ee_share: 765.0,
    },
    {
      sss_min: 17250.0,
      sss_max: 17749.99,
      sss_ee_share: 787.5,
    },
    {
      sss_min: 17750.0,
      sss_max: 18249.99,
      sss_ee_share: 810.0,
    },
    {
      sss_min: 18250.0,
      sss_max: 18749.99,
      sss_ee_share: 832.5,
    },
    {
      sss_min: 18750.0,
      sss_max: 19249.99,
      sss_ee_share: 855.0,
    },
    {
      sss_min: 19250.0,
      sss_max: 19749.99,
      sss_ee_share: 877.5,
    },
    {
      sss_min: 19750.0,
      sss_max: null,
      sss_ee_share: 900.0,
    },
  ];

  for (const sss_contribution of sss_contributions) {
    await SSSContribution.findOrCreate({
      where: {
        sss_min: sss_contribution.sss_min,
        sss_max: sss_contribution.sss_max,
        sss_ee_share: sss_contribution.sss_ee_share,
      },
      defaults: sss_contribution,
    });
  }

  console.log("Database populated with SSS contributions.");
};

module.exports = populateSSS;
