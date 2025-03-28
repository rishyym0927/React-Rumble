import React, { useState } from 'react';
import './App.css'; // Import styles from App.css

// Modal Component
function Modal({ show, handleClose, title, body }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="app-header">
        <nav className="navbar">
          <h1>My Website</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main>
        <h2><u>Welcome to My React App</u></h2>
        <button onClick={handleOpen} className="primary-button">
          Open Modal
        </button>
      </main>

      {/* Modal Component */}
      <Modal 
        show={showModal} 
        handleClose={handleClose} 
        title="Modal Header"
        body="This is the content inside the modal. You can customize it!"
      />

      {/* Footer Section */}
      <footer className="app-footer">
        <p>© 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
