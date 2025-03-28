import React, { useState } from "react";
import Modal from "./Modal.jsx";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
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
