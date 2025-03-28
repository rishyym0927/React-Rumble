import React, { useState } from "react";
import Modal from "./components/Modal"; // Import the Modal component
import "./App.css"; // Import styles for the button

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <button className="open-button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
