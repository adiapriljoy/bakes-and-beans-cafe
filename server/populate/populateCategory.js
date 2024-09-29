const { Category } = require("../models");

const populateCategory = async () => {
  const categories = [
    { category_desc: "Coffee" },
    { category_desc: "Pastry" },
    { category_desc: "Combo" },
  ];

  for (const category of categories) {
    await Category.findOrCreate({
      where: { category_desc: category.category_desc },
      defaults: category,
    });
  }

  console.log("Database populated with categories.");
};

module.exports = populateCategory;
