import { useState } from "react";
import Modal from "./Modal";
import "./modal.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>React Modal Component</h1>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Welcome!">
        <p>This is a cool modal component!</p>
      </Modal>
    </div>
  );
}

export default App;
