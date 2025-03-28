import React, { useState } from "react";
import Modal from "./ModalComponent";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Open Modal
      </button>
      
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="My Modal">
        <p>This is a simple modal component!</p>
      </Modal>
    </div>
  );
};

export default App;
