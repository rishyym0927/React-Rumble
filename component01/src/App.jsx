import { useState } from "react";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>Modal Component Demo</h1>
      <button 
        className="open-modal-btn" 
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-header">
          <h2>Modal Title</h2>
        </div>
        <div className="modal-body">
          <p>This is the modal content. You can put anything here!</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;