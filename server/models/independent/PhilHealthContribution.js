module.exports = (sequelize, DataTypes) => {
  const PhilHealthContribution = sequelize.define(
    "PhilHealthContribution",
    {
      philhealth_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      philhealth_min: {
        type: DataTypes.DECIMAL(10, 2),
      },
      philhealth_max: {
        type: DataTypes.DECIMAL(10, 2),
      },
      philhealth_rate: {
        type: DataTypes.DECIMAL(5, 2),
      },
    },
    {
      tableName: "bb_philhealth",
      timestamps: false,
    }
  );

  return PhilHealthContribution;
};
