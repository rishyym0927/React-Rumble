import React, { useState } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-subtitle">This is a modal header</p>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
      <style>{`
        :root {
          --bg-color: #ffffff;
          --primary: #d76c82;
          --secondary: #b03052;
          --dark: #3d0301;
          --shadow: rgba(0, 0, 0, 0.3);
          --border-color: #cccccc;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out, visibility 0.3s;
        }

        .modal-overlay.show {
          opacity: 1;
          visibility: visible;
        }

        .modal-content {
          background: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0px 6px 20px var(--shadow);
          width: 350px;
          transform: translateY(-20px);
          transition: transform 0.3s ease-in-out;
          border: 2px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-overlay.show .modal-content {
          transform: translateY(0);
        }

        .modal-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 10px;
        }

        .modal-title {
          font-size: 32px;
          color: var(--dark);
          margin: 0;
        }

        .modal-subtitle {
          font-size: 14px;
          color: var(--dark);
          margin-top: 5px;
        }

        .modal-body {
          text-align: center;
          padding: 15px 0;
          color: var(--dark);
          font-size: 16px;
        }

        .modal-footer {
          display: flex;
          justify-content: center;
          padding-top: 10px;
          width: 100%;
        }

        .close-button {
          background: var(--primary);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;
          font-size: 16px;
          font-weight: bold;
        }

        .close-button:hover {
          background: var(--secondary);
        }

        .button-box {
          background: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0px 6px 15px var(--shadow);
          border: 2px solid var(--border-color);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      <div className="button-box">
        <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
          <strong>Click Me</strong>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Custom Modal">
        <p>This is a beautifully animated modal!</p>
      </Modal>
      <style>{`
        .app-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background: var(--bg-color);
        }

        .open-modal-btn {
          background: var(--secondary);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .open-modal-btn:hover {
          background: var(--dark);
        }
      `}</style>
    </div>
  );
};

export default App;
