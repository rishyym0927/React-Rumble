import React, { useState } from "react";
import Modal from "./Modal"; // Import Modal component
import './style.css'; // Import styles

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal"
      >
        <p>This is the modal body content.</p>
      </Modal>
    </div>
  );
};

export default App;
