import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";
import { motion } from "framer-motion"; // For smooth animations

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1} // Focus trap
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">{children}</div>
      </motion.div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Enhanced Modal">
        <p>This modal includes animations, keyboard support, and improved accessibility.</p>
      </Modal>
    </div>
  );
};

export default App;
