const express = require('express');
const { getEmployeeById } = require('../controllers/employeeController');
const router = express.Router();

router.get('/:employeeId', getEmployeeById);

module.exports = router;
