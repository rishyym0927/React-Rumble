import { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const openModal = () => {
    setClosing(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => setIsModalOpen(false), 300); // Wait for animation
  };

  return (
    <>
      {/* Dark Overlay (Only visible when modal is open) */}
      {isModalOpen && <div className={`overlay ${closing ? "fade-out" : ""}`}></div>}

      {/* Show Open Modal button only when modal is NOT open */}
      {!isModalOpen && (
        <button className="open-btn" onClick={openModal}>
          Open Modal
        </button>
      )}

      {/* Modal with animations */}
      {isModalOpen && (
        <div className={`glass-div ${closing ? "hide" : "show"}`}>
          <div className="header">Header</div>
          <div className="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div className="close-btn" onClick={closeModal}>
            Close
          </div>
        </div>
      )}
    </>
  );
}

export default App;
