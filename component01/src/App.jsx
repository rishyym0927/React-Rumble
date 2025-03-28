// src/App.jsx
import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Nature Photography"
        image="https://picsum.photos/600/400"
        imageCaption="Serene Scenary"
        imageDescription="A picturesque view of beauiful sight!"
      >
        <p>Explore the beauty of nature through this stunning photograph.</p>
      </Modal>
    </div>
  );
}

export default App;