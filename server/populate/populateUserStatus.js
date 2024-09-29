const { UserStatus } = require("../models");

const populateUserStatus = async () => {
  const statuses = [
    { user_status_desc: "Active" },
    { user_status_desc: "Inactive" },
    { user_status_desc: "Pending" },
  ];

  for (const status of statuses) {
    await UserStatus.findOrCreate({
      where: { user_status_desc: status.user_status_desc },
      defaults: status,
    });
  }

  console.log("Database populated with user statuses.");
};

module.exports = populateUserStatus;
