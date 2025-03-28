import React from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {}
        <header className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close-btn" onClick={onClose}>
            &times;
          </button>
        </header>

        {}
        <main className="modal-body">{children}</main>
      </div>
    </div>
  );
}

export default Modal;
