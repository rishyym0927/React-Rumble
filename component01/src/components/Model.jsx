import React, { useState } from 'react';
import './Modal.css'; // Ensure you have this file with the styles below

// Modal Component: renders an overlay modal with header, body, and a close button
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Only render if isOpen is true

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
        </header>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

// Demo Component: demonstrates open/close functionality of the modal
const ModalComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="My Modal Title"
      >
        <p>This is the modal body content.</p>
      </Modal>
    </div>
  );
};

export default ModalComponent;
