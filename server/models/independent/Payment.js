module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "Payment",
    {
      payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      payment_desc: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: "bb_payment",
      timestamps: false,
    }
  );

  Payment.associate = function (models) {
    Payment.hasMany(models.Sales, {
      foreignKey: "payment_id",
      as: "sales",
    });
  };

  return Payment;
};
