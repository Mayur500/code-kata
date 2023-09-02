// Overlay.js
import React from "react";
import './Overlay.css';
const Overlay = ({ children }) => {
  return <div className="modal-overlay">{children}</div>;
};

export default Overlay;
