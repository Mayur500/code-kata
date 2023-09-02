const express = require("express");
const loanRoutes = require("./routes/LoanRoutes");
const accountingProviderRoutes = require("./routes/AccountingProvider");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "../" , "client/build")));

app.use(express.json());

// Add routes
app.use("/loan", loanRoutes);
app.use("/accounting-provider", accountingProviderRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = app;
