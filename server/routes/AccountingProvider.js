
const express = require("express");
const accountingProviderController = require("../controllers/AccountingProviderController");

const router = express.Router();

// Route to get a balance sheet (for demonstration purposes)
router.post("/balance-sheet", accountingProviderController.getBalanceSheet);

module.exports = router;
