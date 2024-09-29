module.exports = (sequelize, DataTypes) => {
  const Payroll = sequelize.define(
    "Payroll",
    {
      payroll_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      payroll_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      emp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_employee",
          key: "emp_id",
        },
      },
      basic_pay_rate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      basic_pay_hrs: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      basic_pay_total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      honorarium_rate: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      honorarium_hrs: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      honorarium_total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      sss_contribution: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      philhealth_contribution: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      pagibig_contribution: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      tax: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      sss_loan: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      pagibig_loan: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      salary_loan: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      other_loan: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      gross_income: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      net_salary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      total_deduction: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      tableName: "bb_payroll",
      timestamps: false,
    }
  );

  Payroll.associate = function (models) {
    Payroll.belongsTo(models.Employee, {
      foreignKey: "emp_id",
      as: "employee",
    });
  };

  return Payroll;
};
