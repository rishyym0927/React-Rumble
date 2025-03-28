import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  // If modal is not open, return null
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Modal Header</h2>
          <button
            onClick={closeModal}
            className="text-2xl font-bold text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">
          <p>This is the body of the modal. You can add any content here.</p>
        </div>

        {/* Close Button */}
        <div className="mt-6 text-right">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
