import React from "react";
import "./Modal.css";

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Modal Title</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>This is a functional modal component with an overlay.</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
