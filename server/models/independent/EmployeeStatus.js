module.exports = (sequelize, DataTypes) => {
  const EmployeeStatus = sequelize.define(
    "EmployeeStatus",
    {
      emp_status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      emp_status_desc: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: "bb_emp_status",
      timestamps: false,
    }
  );

  EmployeeStatus.associate = function (models) {
    EmployeeStatus.hasMany(models.Employee, {
      foreignKey: "emp_status_id",
      as: "employee",
    });
  };

  return EmployeeStatus;
};
