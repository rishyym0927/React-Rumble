import React, { useState } from "react";
import Modal from "./component/Modal";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      <h1>Welcome to the Future 🚀</h1>
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)} title="Futuristic Modal">
        <p>Experience a next-level UI with smooth animations and a glassy effect!</p>
      </Modal>
    </div>
  );
};

export default App;
