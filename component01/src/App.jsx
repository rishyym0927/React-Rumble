import React, { useState } from "react";
import Modal from "./Modal"; 

 function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      <h1>React Rumble Challenge</h1>
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default App;