module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      dept_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      department_desc: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: "bb_department",
      timestamps: false,
    }
  );

  Department.associate = function (models) {
    Department.hasMany(models.Employee, {
      foreignKey: "dept_id",
      as: "employee",
    });
  };

  return Department;
};
