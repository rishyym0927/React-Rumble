// src/components/Modal.jsx
import React from 'react';
import './Modal.css';

function Modal({
    isOpen,
    onClose,
    title,
    children,
    image = null,
    imageCaption = '',
    imageDescription = ''
}) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button
                        className="modal-close-btn"
                        onClick={onClose}
                    >
                        x
                    </button>
                </div>
                <div className="modal-body">
                    {image && (
                        <div className="modal-image-wrapper">
                            <img
                                src={image}
                                alt={imageDescription}
                                className="modal-image"
                            />
                            {(imageCaption || imageDescription) && (
                                <div className="modal-image-text-container">
                                    {imageDescription && (
                                        <p className="modal-image-description">
                                            {imageDescription}
                                        </p>
                                    )}
                                    {imageCaption && (
                                        <p className="modal-image-caption">
                                            {imageCaption}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;