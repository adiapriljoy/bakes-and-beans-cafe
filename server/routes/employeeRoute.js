const express = require("express");
const {
  getEmployeeById,
  getEmployees,
} = require("../controllers/employeeController");
const router = express.Router();

router.get("/", getEmployees);
router.get("/:employeeId", getEmployeeById);

module.exports = router;
