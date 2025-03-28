import { useState } from "react";
import "./App.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Modal Example</h1>

      <button className="open-modal-btn" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span>Modal Title</span>
              <button className="close-button" onClick={() => setModalOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>This is an enhanced modal with better styles!</p>
            </div>
            <div className="modal-footer">Modal Footer - Additional Info</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
