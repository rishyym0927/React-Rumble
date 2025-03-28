import "./modal.css";
import { useState } from "react";


const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2 style={{ color: "black" }}>{title}</h2>  {/* Ensure text is visible */}
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body" style={{ color: "black" }}>
            {children}
          </div>
        </div>
      </div>
    );
  };
  

export default Modal;
