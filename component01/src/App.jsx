import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Inline styles for modal
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  };

  const bodyStyle = {
    padding: '10px 0',
  };

  const openButtonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button style={openButtonStyle} onClick={openModal}>Open Modal</button>

      {/* Modal overlay and content */}
      {isOpen && (
        <div style={overlayStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <div style={headerStyle}>
              <h2>Modal Header</h2>
              <button style={closeButtonStyle} onClick={closeModal}>X</button>
            </div>
            <div style={bodyStyle}>
              <p>This is the modal body content!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
