import React, { useState } from 'react';
import Modal from './Modal.jsx';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Component 01: Modal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
        <p>This is a simple modal with basic functionalities.</p>
      </Modal>
    </div>
  );
}

export default App;
