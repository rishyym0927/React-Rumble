import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <h2>Modal Header</h2>
            <p>Modal Body Content</p>
          </div>
        </div>
      )}
    </>
  );
}
