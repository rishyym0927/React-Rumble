import React, { useState } from "react";
import ModalC from "./ModalComponent/ModalComponent"; 
import ModalComponent from "./ModalComponent/ModalComponent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>React Modal Example</h1>
      <button onClick={() => setIsModalOpen(true)} style={styles.openButton}>
        Open Modal
      </button>

      {/* Modal Component */}
      <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
        <p>This is a reusable modal component in React!</p>
      </ModalComponent>
    </div>
  );
}

const styles = {
  openButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default App;
