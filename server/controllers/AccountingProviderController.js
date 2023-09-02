// This controller can simulate data retrieval from accounting providers.
// In a real system, you would make API calls to the accounting providers.

// For demonstration purposes, we'll return a sample balance sheet.
const { SAMPLE_DATA }  = require("../Constants/BalanceSheet");

exports.getBalanceSheet = (req, res) => {

    const formData = req.body;
  const sampleBalanceSheet = SAMPLE_DATA;

  res.json(sampleBalanceSheet);
};
