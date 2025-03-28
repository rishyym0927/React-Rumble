import { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="modal-trigger">
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className="modal-content" 
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>GPT GOATED</h2>
              <button 
                className="modal-close-btn" 
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>vadapav</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;