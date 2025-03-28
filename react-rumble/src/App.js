import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css"; // Import CSS

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1 className="flicker-heading">Welcome to React Rumble!</h1>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={() => setModalOpen(true)} className="close-btn">
          Open Modal
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Hello!">
        <p>This is a simple modal component.</p>
      </Modal>
    </div>
  );
}

export default App;
