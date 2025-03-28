import React, { useState } from "react";
import "./Modal.css"; // Add styles later

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>This is a simple modal popup.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
