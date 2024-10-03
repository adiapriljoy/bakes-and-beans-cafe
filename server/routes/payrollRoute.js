const express = require('express');
const { calculateContribution } = require('../controllers/deductionController');
const router = express.Router();

router.get('/contribution/:salary', calculateContribution);

module.exports = router;
