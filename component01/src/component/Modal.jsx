// import React from "react";
// import "./Modal.css";

// const Modal = ({ isOpen, onClose, title, children }) => {
//   // If modal is not open, return null to prevent rendering
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       {/* Prevent modal from closing when clicking inside */}
//       <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-header">
//           <h2>{title}</h2>
//           <button className="close-btn" onClick={onClose}>
//             Close
//           </button>
//         </div>
//         <div className="modal-body">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  autoCloseTime = null, // Auto close time in ms
  preventCloseOnOverlayClick = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Auto close modal after a specified duration
  useEffect(() => {
    if (isOpen && autoCloseTime) {
      const timer = setTimeout(onClose, autoCloseTime);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseTime, onClose]);

  // Drag modal functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPosition({
      x: e.clientX - e.target.parentElement.offsetLeft,
      y: e.clientY - e.target.parentElement.offsetTop,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.target.parentElement.style.left = `${e.clientX - position.x}px`;
    e.target.parentElement.style.top = `${e.clientY - position.y}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={!preventCloseOnOverlayClick ? onClose : undefined}
    >
      <div
        className="modal-container draggable"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-header"
          onMouseDown={handleMouseDown}
          style={{ cursor: "grab" }}
        >
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-action-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

