import React from "react";
import "./Modal.css"; // Import modal-specific CSS

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-header">Modal Title</h2>
        <p className="modal-body">This is a simple modal using React and CSS.</p>
      </div>
    </div>
  );
};

export default Modal;
