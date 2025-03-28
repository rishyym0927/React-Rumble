import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
        <p>This is the modal content. Click the close button to dismiss.</p>
      </Modal>
    </div>
  );
};

export default App;
