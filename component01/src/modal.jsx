import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {!isOpen && (
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-lg relative flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Better Modal</h2>
            <p className="text-gray-600">
              This modal is centered, animated, and polished with Tailwind.
            </p>
            <button
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
