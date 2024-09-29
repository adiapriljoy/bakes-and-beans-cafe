module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      emp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      emp_fname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      emp_lname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      emp_mname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      emp_suffix: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      emp_dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      emp_gender: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      emp_email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      emp_contact: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      nationality_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_nationality",
          key: "nationality_id",
        },
      },
      civil_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_civil_status",
          key: "civil_status_id",
        },
      },
      dept_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_department",
          key: "dept_id",
        },
      },
      position_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_position",
          key: "position_id",
        },
      },
      emp_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_emp_status",
          key: "emp_status_id",
        },
      },
      date_hire: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      tableName: "bb_employee",
      timestamps: false,
      initialAutoIncrement: 1000,
    }
  );

  Employee.associate = (models) => {
    Employee.belongsTo(models.Nationality, {
      foreignKey: "nationality_id",
      as: "nationality",
    });
    Employee.belongsTo(models.CivilStatus, {
      foreignKey: "civil_status_id",
      as: "civilStatus",
    });
    Employee.belongsTo(models.EmployeeStatus, {
      foreignKey: "emp_status_id",
      as: "empStatus",
    });
    Employee.belongsTo(models.Department, {
      foreignKey: "dept_id",
      as: "department",
    });
    Employee.belongsTo(models.Position, {
      foreignKey: "position_id",
      as: "position",
    });
    Employee.hasOne(models.User, {
      foreignKey: "emp_id",
      as: "user",
    });
    Employee.hasMany(models.Payroll, {
      foreignKey: "emp_id",
      as: "payroll",
    });
    Employee.hasMany(models.Sales, {
      foreignKey: "emp_id",
      as: "sales",
    });
  };

  return Employee;
};
