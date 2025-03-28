import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">✖</button>
        </div>
        <div className="modal-body">{children}</div>
        <button onClick={onClose} className="modal-close">Close</button>
      </div>
    </div>
  );
};

export default Modal;