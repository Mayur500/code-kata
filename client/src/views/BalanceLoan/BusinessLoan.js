// BusinessLoanForm.js
import React, { useState } from "react";
import BalanceSheetModal from "./BalanceSheetModal/BalanceSheetModal";
import "./BusinessLoan.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AccountingProvider = [
  {
    name: "Xero",
  },
  {
    name: "MYOB",
  },
];

const BusinessLoan= () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessAddress: "",
    accountingProvider: "",
    loanAmount: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const notify = (message) => toast.error(message + " !");

  const checkFieldMissing = ()=>{
  
const { businessAddress, businessName, loanAmount, accountingProvider } = formData;

    if(!businessAddress || !businessName || !loanAmount || !accountingProvider){
      return "Some Fields are Missing";
    }
    let loanAmountTest = loanAmount.trim();
    if (!/^\d+$/.test(loanAmountTest)) {
      return "Invalid Loan Amount";
    }
    return "";
  }

  const handleBalanceSheetRequest = () => {
    console.log(formData);
    let message = checkFieldMissing();
    if (message) {
      notify(message);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="container mt-2">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="businessName" className="form-label">
                Business Name
              </label>
              <input
                type="text"
                className="form-control"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="businessAddress" className="form-label">
                Business Address
              </label>
              <input
                type="text"
                className="form-control"
                id="businessAddress"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="accountingProvider" className="form-label">
                Select Accounting Provider
              </label>
              {
                <select
                  className="form-select"
                  id="accountingProvider"
                  name="accountingProvider"
                  value={formData.accountingProvider}
                  onChange={handleInputChange}
                >
                  <option value="">Select an Accounting Provider</option>
                  <option value="Xero">Xero</option>
                  <option value="MYOB">MYOB</option>
                </select>
              }
            </div>
            <div className="mb-3">
              <label htmlFor="loanAmount" className="form-label">
                Loan Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={handleBalanceSheetRequest}
            >
              Request Balance Sheet
            </button>
          </form>
        </div>
      </div>
      {showModal && (
        <BalanceSheetModal
          formData={formData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default BusinessLoan;
