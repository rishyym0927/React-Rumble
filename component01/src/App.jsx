import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <button
        className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition font-semibold"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md transition-opacity"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 10 }}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-2xl w-96 relative transform transition-all scale-95 animate-fadeIn flex flex-col items-center text-center border-4 border-indigo-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center w-full border-b-2 border-gray-300 pb-2">
              <h2 className="text-lg font-semibold w-full text-indigo-600">My Modal</h2>
              <button
                className="text-gray-500 hover:text-red-500 text-2xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="mt-4 text-gray-700">
              <p className="text-lg font-medium text-gray-600">This is the modal body content.</p>
            </div>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
