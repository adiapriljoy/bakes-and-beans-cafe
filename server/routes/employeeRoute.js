const express = require("express");
const upload = require("../middleware/multer");
const {
  getEmployeeById,
  getEmployees,
  exportEmployeesToExcel,
  getEmpSelectOptions,
  addEmployee,
} = require("../controllers/employeeController");
const router = express.Router();

router.get("/", getEmployees);
router.post("/add", upload.single("image"), addEmployee);
router.get("/export", exportEmployeesToExcel);
router.get("/selectOptions", getEmpSelectOptions);
router.get("/:employeeId", getEmployeeById);

module.exports = router;
