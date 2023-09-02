const express = require('express');
const loanController = require('../controllers/LoanController');

const router = express.Router();

router.post('/submit', loanController.submitApplication);

module.exports = router;
