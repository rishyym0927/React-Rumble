import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div className={`modal-container ${isOpen ? "show" : ""}`}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">✖</button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={onClose} className="modal-close">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
