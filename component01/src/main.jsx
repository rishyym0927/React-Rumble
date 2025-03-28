import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Welcome!">
        <p>This is a reusable modal component.</p>
      </Modal>
    </div>
  );
};

export default App;
