import React, { useState } from 'react';
import './Modal.css'; // Ensure this CSS file is in the same directory

const Modal = ({ isOpen, onClose, header, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          {header}
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        header="Modal Header"
      >
        <p>This is the modal body content.</p>
      </Modal>
    </div>
  );
};

export default App;
