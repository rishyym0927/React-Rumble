import { useState } from "react";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-lg p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 relative animate-fadeIn flex flex-col items-center"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="text-gray-700 text-center mb-6">{children}</div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition duration-300 mt-4"
        >
          ❌ Close
        </motion.button>
      </motion.div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="w-96 bg-white rounded-2xl shadow-lg p-4">
      {items.map((item, index) => (
        <div key={index} className="mb-2 border-b border-gray-300">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left py-3 px-4 text-lg font-semibold flex justify-between items-center bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            {item.question}
            <span>{openIndexes.includes(index) ? "🔽" : "▶️"}</span>
          </button>
          {openIndexes.includes(index) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 text-gray-700"
            >
              {item.answer}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const faqItems = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is Framer Motion?", answer: "Framer Motion is a library for animations in React applications." },
    { question: "How do I use this accordion?", answer: "Click on any question to expand/collapse its answer." }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-10 space-y-6">
      <div className="flex justify-center w-full">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          ✨ Open Modal ✨
        </motion.button>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Beautiful Modal">
          <p className="text-lg">This is an elegant, animated modal. 🚀</p>
        </Modal>
      )}
      <Accordion items={faqItems} />
    </div>
  );
};

export default App;
