const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");

router.get("/", async (req, res) => {
  const listOfUsers = await User.findAll();
  res.json(listOfUsers);
});

router.post("/", async (req, res) => {
  const user = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("pass12345", salt);
  await User.create(
    {
      username: user.username,
      password: hashedPassword,
      user_status_id: user.statusId,
      user_role_id: user.roleId,
      emp_id: user.employeeId,
      last_modified: new Date()
    }
  );
  res.json(user);
});

module.exports = router;
