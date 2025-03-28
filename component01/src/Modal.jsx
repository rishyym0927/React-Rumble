import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white text-black w-[400px] max-w-full rounded-lg shadow-lg p-5 transform animate-slideUp relative">
        {/* Close Button (Top Right) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold transition"
        >
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-semibold text-center">{title}</h2>

        {/* Modal Body */}
        <div className="mt-4 text-gray-700">{children}</div>

        {/* Close Button (Bottom) */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
