import { useState } from 'react';
import './App.css';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          {/* <button className="close-button" onClick={onClose}>
            &times;
          </button> */}
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <h1>React Modal Example</h1>
      <button className="open-button" onClick={openModal}>
        Open Modal
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Example Modal"
      >
        <p>This is a functional modal overlay with a semi-transparent background.</p>
        <p>It contains a header with a title, this body content, and a close button.</p>
        <button className="action-button" onClick={closeModal}>
          Got it!
        </button>
      </Modal>
    </div>
  );
}
