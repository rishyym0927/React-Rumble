import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📦 Interactive Modal Component</h1>
      <button onClick={() => setModalOpen(true)} className="open-modal-button">
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Welcome!">
        <p>This is a beautifully styled modal with interactive features.</p>
      </Modal>
    </div>
  );
}

export default App;
