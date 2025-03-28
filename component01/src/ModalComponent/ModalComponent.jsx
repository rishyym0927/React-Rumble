import React from "react";

function ModalComponent({ isOpen, onClose, title, children }) {
  if (!isOpen) return null; 

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h2>{title}</h2>
          <button onClick={onClose} style={styles.closeButton}>✖</button>
        </div>
        <div style={styles.body}>
          {children} {/* This allows dynamic content */}
        </div>
      </div>
    </div>
  );
}

// Styles (Inline CSS)
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white", // ✅ Ensures white background
    color: "black", // ✅ Ensures visible text
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "red", // ✅ Ensures the close button is visible
  },
  body: {
    marginTop: "10px",
    color: "black", // ✅ Ensures body text is visible
  },
};


export default ModalComponent;
