import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
