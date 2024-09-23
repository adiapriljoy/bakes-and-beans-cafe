module.exports = (sequelize, DataTypes) => {
  const CivilStatus = sequelize.define(
    "CivilStatus",
    {
      civil_status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      civil_status_desc: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "bb_civil_status",
      timestamps: false,
    }
  );

  CivilStatus.associate = function (models) {
    CivilStatus.hasMany(models.Employee, {
      foreignKey: "civil_status_id",
      as: "employee",
    });
  };

  return CivilStatus;
};
