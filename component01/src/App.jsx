import { useState } from 'react';
import './App.css';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
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
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <h1>Modal Demo</h1>
      <button onClick={openModal}>Press MEEEEE!!!!</button>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title="Sample Modal"
      >
        <p>Hello My name is Kinshuk & I just wanted to say that never look back once you move forward</p>
        <p>BYE BYE Press "X" to close the tab </p>
      </Modal>
    </div>
  );
}

export default App;