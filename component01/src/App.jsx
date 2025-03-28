import React, { useState } from "react";
import "./styles.css"; // We'll add custom CSS animations here

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          ✖
        </button>
        <h2 className="modal-title">Enchanted Gateway</h2>
        <p className="modal-text">Step through the portal into a realm of magic and wonder.</p>
        <div className="sparkle-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="sparkle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}></div>
          ))}
        </div>
        <button onClick={onClose} className="portal-button">
          Close Portal
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="content">
        <h1 className="main-title">Magical Portal App</h1>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="main-button"
        >
          <span className="button-text">Open Portal</span>
          <span className="button-glow"></span>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
