import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-100 to-purple-200">
      <motion.button 
        onClick={toggleModal} 
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
      >
        🌟 Open Unique Modal
      </motion.button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.div 
            className="bg-white rounded-[3rem] shadow-2xl p-8 w-11/12 max-w-lg border-4 border-purple-300 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100 to-blue-200 opacity-10"></div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-extrabold text-purple-600">✨ Enchanted Modal</h2>
              <button onClick={toggleModal} className="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
            </div>
            <div className="mb-6 text-lg text-gray-700">
              <p>Welcome to this unique modal with vibrant colors and smooth animations. Let's make your UI pop! 🎉</p>
            </div>
            <motion.button 
              onClick={toggleModal} 
              className="px-5 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              🚀 Close Modal
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;
