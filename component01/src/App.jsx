import React, { useState } from "react";
import Modal from "./components/Modal"; // Import Modal Component
import "./components/Modal.css"; // Import Modal Styles

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="My Modal"
      >
        <p>This is the modal content!</p>
      </Modal>
    </div>
  );
}

export default App;
