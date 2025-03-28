import React, { useState } from 'react';
import './Modal.css'; // Create this CSS file

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Modal Title</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children || <p>Default modal content</p>}
        </div>
      </div>
    </div>
  );
};

// Usage example
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <p>Custom modal content goes here</p>
        </Modal>
      )}
    </div>
  );
};

export default Modal;