import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <button 
        className="open-modal-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Open Stunning Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Paradise!"
      >
        <div className="modal-content">
          <p>This modal now has:</p>
          <ul className="features-list">
            <li>🌈 Gradient header</li>
            <li>✨ Smooth animations</li>
            <li>🎯 Perfect centering</li>
            <li>🔥 Modern close button</li>
          </ul>
          <div className="color-spotlight">
            <div className="color-dot" style={{ background: '#6a11cb' }}></div>
            <div className="color-dot" style={{ background: '#2575fc' }}></div>
            <div className="color-dot" style={{ background: '#4CAF50' }}></div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;