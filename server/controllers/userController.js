const bcrypt = require("bcryptjs");
const { User } = require("../models");

const getUsers = async (req, res) => {
  const listOfUsers = await User.findAll();
  return res.json(listOfUsers);
};

const addUsers = async (req, res) => {
  const user = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("pass12345", salt);
  await User.create({
    username: user.username,
    password: hashedPassword,
    user_status_id: user.statusId,
    user_role_id: user.roleId,
    emp_id: user.employeeId,
    last_modified: new Date(),
  });
  return res.json(user);
};

module.exports = { getUsers, addUsers };
