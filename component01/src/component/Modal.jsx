import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="btn-close-modal" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
