import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="app-container">
      <button className="open-modal-btn" onClick={() => setModalOpen(true)}>
        🚀 Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Welcome!">
        <p>✨ This is an enhanced, beautiful modal! ✨</p>
      </Modal>
    </div>
  );
};

export default App;
