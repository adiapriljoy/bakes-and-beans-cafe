const { UserRole } = require("../models");

const populateUserRole = async () => {
  const roles = [
    { user_role_desc: "Admin" },
    { user_role_desc: "Manager" },
    { user_role_desc: "Cashier" },
    { user_role_desc: "Finance" },
  ];

  for (const role of roles) {
    await UserRole.findOrCreate({
      where: { user_role_desc: role.user_role_desc },
      defaults: role,
    });
  }

  console.log("Database populated with user roles.");
};

module.exports = populateUserRole;
