
const calculatePreAssessment = (balanceSheet, loanAmount) => {
  const last12MonthsProfit = balanceSheet
    .slice(0, 12)
    .reduce((sum, entry) => sum + entry.profitOrLoss, 0);

  const averageAssets = balanceSheet
    .slice(0, 12)
    .reduce((sum, entry) => sum + entry.assetsValue, 0) / 12;

  if (last12MonthsProfit > 0) {
    return Math.min(60, (loanAmount / 100) * 60);
  } else if (averageAssets > loanAmount) {
    return 100; 
  } else {
    return 20; // Default pre-assessment value is 20
  }
};

module.exports = { calculatePreAssessment };
