const { ItemStatus } = require("../models");

const populateItemStatus = async () => {
  const item_statuses = [
    { item_status_desc: "Published" },
    { item_status_desc: "Hidden" },
    { item_status_desc: "Draft" },
    { item_status_desc: "Out of stock" },
  ];

  for (const item_status of item_statuses) {
    await ItemStatus.findOrCreate({
      where: { item_status_desc: item_status.item_status_desc },
      defaults: item_status,
    });
  }

  console.log("Database populated with item statuses.");
};

module.exports = populateItemStatus;
