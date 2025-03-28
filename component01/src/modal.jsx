import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null; // Don't render if closed

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>✖</button>
        </div>

        {/* Modal Body with Image & Text */}
        <div className="modal-body">
          <img 
            src="https://source.unsplash.com/400x250/?nature,water" 
            alt="Nature" 
            className="modal-image"
          />
          <p>
            Welcome to the beautiful world of modals! This is a fully customized and 
            aesthetically pleasing modal design. Feel free to add any content here!
          </p>
          <button className="modal-action-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
