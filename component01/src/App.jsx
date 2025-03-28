import { useState } from "react";
import "./App.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">{children}</div>
        <div className="modal-buttons">
          <button className="ok-button" onClick={onClose}>OK, Got It</button>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="app-container">
      {!isModalOpen && (
        <button className="open-modal-button" onClick={() => setModalOpen(true)}>
          Open Modal
        </button>
      )}
      
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Important Notice">
        <p>This modal has a semi-transparent background with a smooth cyan-to-pink animated gradient.</p>
      </Modal>
    </div>
  );
};

export default App;
