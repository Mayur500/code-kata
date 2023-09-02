import React, { useState, useEffect } from "react";
import LoadingOverlay from "../../../common/LoadingOverlay/LoadingOverlay";
import Overlay from "../../../common/Overlay/Overlay";
import "./BalanceSheetModal.css"; // Import the BalanceSheetModal component CSS
import axios from 'axios';

const BalanceSheetModal = ({ formData , onClose }) => {
   const [loading, setLoading] = useState(true);
   const [balanceSheet, setBalanceSheet] = useState([]);
   const [approval, setApproval] = useState("");
    const [approvalAmount ,setApprovalAmount] = useState(0);
   useEffect(() => {
    console.log(formData)
      axios
        .post(
          "/accounting-provider/balance-sheet",
          formData,
          {
            headers: {
              accepts: "application/json",
            },
          }
        )
        .then((res) => {
          const balanceSheet = res.data;
          console.log(balanceSheet);
          setBalanceSheet(balanceSheet);
          setLoading(false);
        });
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
    try {
      const response = await axios.post("/loan/submit", formData);
      console.log("Loan application submitted successfully:", response.data);
      setLoading(false);
      setApproval("approved");
      setApprovalAmount(response.data.preAssessment * (formData.loanAmount)/100);
    } catch (error) {
      console.error("Error submitting loan application:", error);
      setApproval("rejected");
      setApprovalAmount(0);
    }
   };

  return (
    <Overlay>
      <div className="modal-overlay">
        {loading ? (
          <div className="loading-overlay">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="modals">
            <button className="close-btn" onClick={onClose}>
              &times;
            </button>
            <h2 className="balance">Balance Sheet</h2>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Profit or Loss</th>
                    <th>Assets Value</th>
                  </tr>
                </thead>
                <tbody>
                  {balanceSheet.map((item, index) => (
                    <tr key={index}>
                      <td>{item.year}</td>
                      <td>{item.month}</td>
                      <td>{item.profitOrLoss}</td>
                      <td>{item.assetsValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {approval && (
                <p className={`approval-${approval}`}>
                  {approval === "approved" ? (
                    <span className="approval-icon">&#10004;</span>
                  ) : (
                    <span className="approval-icon">&#10008;</span>
                  )}
                  {`Loan ${approval} of Amount ${approvalAmount}`}
                </p>
              )}
              {!approval && (
                <div className="submit-section">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit Application
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

    </Overlay>
  );
};

export default BalanceSheetModal;
