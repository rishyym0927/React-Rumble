import { useState } from "react";
import "./Modal.css"; // Ensure Modal.css exists

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Modal Title</h2>
            <p>This is a modal body.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
