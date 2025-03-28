import { useState } from "react";
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
            <h2 className="modal-title">Welcome to the Modal!</h2>
            <p className="modal-body">
              This is a stylish and user-friendly modal with a modern overlay.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
