import React, { useState } from "react";

// 🌟 Modal Component
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2>✨ Modern Modal</h2>
          <button onClick={onClose} style={styles.closeButton}>❌</button>
        </div>
        <div style={styles.body}>
          <p>🚀 This is a sleek, animated modal with a beautiful design!</p>
        </div>
      </div>
    </div>
  );
};

// 🌟 Main App Component
const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={styles.container}>
      <button onClick={() => setModalOpen(true)} style={styles.openButton}>
        Open Modal ✨
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

// 💎 Stylish Component Design
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #141e30, #243b55)",
  },
  openButton: {
    padding: "15px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "#0ef",
    color: "#141e30",
    boxShadow: "0px 0px 15px rgba(0, 238, 255, 0.6)",
    transition: "0.3s",
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
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
    padding: "20px",
    borderRadius: "15px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0px 0px 20px rgba(0, 238, 255, 0.5)",
    color: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    textShadow: "0px 0px 10px rgba(0, 238, 255, 0.8)",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    fontSize: "20px",
    color: "#fff",
    cursor: "pointer",
  },
  body: {
    fontSize: "16px",
    textAlign: "center",
  },
};

// 🚀 Exporting the App Component
export default App;
