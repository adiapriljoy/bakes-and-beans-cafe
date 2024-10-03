const bcrypt = require("bcryptjs");
const { User } = require("../models");

const populateUser = async () => {
  const users = [
    {
      username: "adijoyworks",
      password: "pass12345",
      user_status_id: 1,
      user_role_id: 1,
      emp_id: 1000,
      last_modified: new Date(),
    },
    {
      username: "manager_trisha",
      password: "pass12345",
      user_status_id: 1,
      user_role_id: 2,
      emp_id: 1002,
      last_modified: new Date(),
    },
    {
      username: "finance_shane",
      password: "pass12345",
      user_status_id: 1,
      user_role_id: 4,
      emp_id: 1003,
      last_modified: new Date(),
    },
    {
      username: "cashier_jona",
      password: "pass12345",
      user_status_id: 1,
      user_role_id: 3,
      emp_id: 1004,
      last_modified: new Date(),
    },
  ];

  for (const user of users) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    await User.findOrCreate({
      where: {
        username: user.username,
        user_status_id: user.user_status_id,
        user_role_id: user.user_role_id,
        emp_id: user.emp_id,
      },
      defaults: {
        ...user,
        password: hashedPassword,
      },
    });
  }

  console.log("Database populated with users.");
};

module.exports = populateUser;
