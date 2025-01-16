const express = require("express");
const {
  getEmployeeById,
  getEmployees,
  exportEmployeesToExcel,
} = require("../controllers/employeeController");
const router = express.Router();

router.get("/", getEmployees);
router.get("/export", exportEmployeesToExcel);
router.get("/:employeeId", getEmployeeById);

module.exports = router;
