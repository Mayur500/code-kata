// LoadingOverlay.js
import React from "react";

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
