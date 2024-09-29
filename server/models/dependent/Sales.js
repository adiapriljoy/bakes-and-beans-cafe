module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "Sales",
    {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      order: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      order_amt: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      order_discount: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_payment",
          key: "payment_id",
        },
      },
      emp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_employee",
          key: "emp_id",
        },
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "bb_sales",
      timestamps: false,
    }
  );

  Sales.associate = function (models) {
    Sales.belongsTo(models.Payment, {
      foreignKey: "payment_id",
      as: "payment",
    });
    Sales.belongsTo(models.Employee, {
      foreignKey: "emp_id",
      as: "employee",
    });
  };

  return Sales;
};
