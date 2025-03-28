import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal}>Click me!!</button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Component 01"
      >
        <p>Component 01 of React Rumble is completed :) </p>
      </Modal>
    </div>
  );
}

export default App;