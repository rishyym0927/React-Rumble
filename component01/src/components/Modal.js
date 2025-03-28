import React from "react";
import "../styles/Modal.css"; // Import modal styles

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
