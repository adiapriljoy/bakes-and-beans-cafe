module.exports = (sequelize, DataTypes) => {
  const SSSContribution = sequelize.define(
    "SSSContribution",
    {
      sss_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      sss_min: {
        type: DataTypes.DECIMAL(10, 2),
      },
      sss_max: {
        type: DataTypes.DECIMAL(10, 2),
      },
      sss_ee_share: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: "bb_sss",
      timestamps: false,
    }
  );

  return SSSContribution;
};
