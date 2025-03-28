import React, { useState } from "react";
// import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Hello Modal">
        <p>This is a sample modal.</p>
      </Modal>
    </div>
  );
}

export default App;
