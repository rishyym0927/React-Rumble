import React, { useState } from 'react';
import './App.css';

// Modal Component: renders an overlay modal with a header, body, and close button.
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Only render when open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
        </header>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Modal Demo</h1>
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
}

export default App;
