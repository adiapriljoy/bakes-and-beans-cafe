module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      category_desc: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: "bb_category",
      timestamps: false,
    }
  );

  Category.associate = function (models) {
    Category.hasMany(models.Product, {
      foreignKey: "category_id",
      as: "product",
    });
  };

  return Category;
};
