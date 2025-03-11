const express = require("express");
const {
  getEmployeeById,
  getEmployees,
  exportEmployeesToExcel,
  getEmpSelectOptions,
} = require("../controllers/employeeController");
const router = express.Router();

router.get("/", getEmployees);
router.get("/export", exportEmployeesToExcel);
router.get("/selectOptions", getEmpSelectOptions);
router.get("/:employeeId", getEmployeeById);

module.exports = router;
