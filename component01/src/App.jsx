import { useState } from 'react';
import './App.css';

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="modal-action-btn" onClick={onClose}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      <h1 className="app-title">⚡ React Rumble</h1>
      <p className="app-subtitle">The ultimate coding challenge</p>
      
      <button 
        className="open-button" 
        onClick={() => setIsOpen(true)}
      >
        <span>Show Modal</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <Modal title="🚀 Round 1 Challenge" onClose={() => setIsOpen(false)}>
          <div className="modal-content">
            <div className="modal-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#646cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V12" stroke="#646cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16H12.01" stroke="#646cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Welcome to React Rumble!</h4>
            <p>This modal was created with modern styling and animations for Round 1 of the competition.</p>
            <ul className="features-list">
              <li>✨ Beautiful transitions</li>
              <li>🎨 Custom SVG icons</li>
              <li>🌈 Gradient effects</li>
              <li>🖱️ Interactive elements</li>
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;