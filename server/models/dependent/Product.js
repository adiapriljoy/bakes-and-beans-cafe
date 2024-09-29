module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      item_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_category",
          key: "category_id",
        },
      },
      item_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      item_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      item_img: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      item_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      item_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "bb_item_status",
          key: "item_status_id",
        },
      },
    },
    {
      tableName: "bb_product_item",
      timestamps: false,
    }
  );

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "category",
    });
    Product.belongsTo(models.ItemStatus, {
      foreignKey: "item_status_id",
      as: "itemStatus",
    });
  };

  return Product;
};
