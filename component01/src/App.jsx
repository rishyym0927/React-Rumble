import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <button onClick={() => setIsModalOpen(true)} className="open-modal-btn">
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
        <p>This is a functional modal component written by Ishaan.</p>
      </Modal>
    </div>
  );
}
