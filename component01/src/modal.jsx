import { useState } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-blue-200 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <button
          className="absolute top-2 right-2 bg-gray-300 rounded-full px-2 py-1"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </button>
      
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="My Modal">
        <p>This is the modal body content.</p>
      </Modal>
    </div>
  );
};

export default App;
