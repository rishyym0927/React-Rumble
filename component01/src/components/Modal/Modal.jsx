import React from 'react';
import './Modal.css';

const Modal = ({ title, children, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const useModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return { isOpen, openModal, closeModal };
};

export default Modal;