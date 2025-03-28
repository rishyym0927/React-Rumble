import React, { useState } from "react";
import Modal from "./Modal.jsx";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button className="open_model" onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Modal Header"
      >
        <p>This is the modal body content. Customize as needed!</p>
      </Modal>
    </div>
  );
}

export default App;
