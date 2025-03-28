import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <h1>📦 Modal Component</h1>
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
