import { useState } from 'react';
import './modal.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 >Modal Title</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <p>This is a modal body. You can put any content here.</p>
        </div>
      </div>
    </div>
  );
}

export default function ModalUI() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
        
    </Router>
      
  );
}
