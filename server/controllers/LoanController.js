const { calculatePreAssessment } = require("./DecisionEngineController");
const { SAMPLE_DATA }  = require("../Constants/BalanceSheet");

exports.submitApplication = async (req, res) => {
  try {
    const { businessName, businessAddress , accountingProvider , loanAmount}  = req.body;

    const balanceSheet = SAMPLE_DATA;

    const preAssessment = calculatePreAssessment(balanceSheet,loanAmount);

    const loanApplication = { 
      businessName,
      businessAddress,
      accountingProvider,
      loanAmount
    };

    res.status(200).json({
      message: "Loan application submitted successfully",
      loanApplication,
      preAssessment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};
