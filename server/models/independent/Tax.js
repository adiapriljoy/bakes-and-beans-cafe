module.exports = (sequelize, DataTypes) => {
    const Tax = sequelize.define(
      "Tax",
      {
        tax_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        tax_min: {
          type: DataTypes.DECIMAL(10, 2),
        },
        tax_max: {
          type: DataTypes.DECIMAL(10, 2),
        },
        tax_fix_value: {
          type: DataTypes.DECIMAL(10, 2),
        },
        tax_rate: {
          type: DataTypes.DECIMAL(5, 2),
        },
      },
      {
        tableName: "bb_tax",
        timestamps: false,
      }
    );
  
    return Tax;
  };
  