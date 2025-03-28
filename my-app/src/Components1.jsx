import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={styles.app}>
      <h1>React Modal Example</h1>
      <button style={styles.openButton} onClick={openModal}>
        Open Modal
      </button>

      {isModalOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h2>Modal Header</h2>
              <button style={styles.closeButton} onClick={closeModal}>
                X
              </button>
            </div>
            <div style={styles.modalBody}>
              <p>This is the modal body. You can include any content here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline Styles
const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  openButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "400px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
  modalBody: {
    padding: "20px",
    textAlign: "left",
  },
};

// Render Application
export default App;