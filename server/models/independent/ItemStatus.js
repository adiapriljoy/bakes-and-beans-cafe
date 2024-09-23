module.exports = (sequelize, DataTypes) => {
  const ItemStatus = sequelize.define(
    "ItemStatus",
    {
      item_status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      item_status_desc: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "bb_item_status",
      timestamps: false,
    }
  );

  ItemStatus.associate = function (models) {
    ItemStatus.hasMany(models.Product, {
      foreignKey: "item_status_id",
      as: "Product",
    });
  };

  return ItemStatus;
};
