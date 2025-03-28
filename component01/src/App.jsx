import React, { useState } from 'react';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to our Modal!"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            This is a beautiful, functional modal component built with React and Tailwind CSS.
            It features a semi-transparent overlay, smooth transitions, and a close button.
          </p>
          <p className="text-gray-600">
            Click outside the modal or the close button to dismiss it.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;