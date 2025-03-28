import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function UniqueModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 text-white font-semibold bg-pink-600 rounded-lg shadow-lg hover:bg-pink-500 transition-transform transform hover:scale-105"
      >
        Open Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/20 text-white max-w-md w-full relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-xl"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <h2 className="text-lg font-bold uppercase">✨ Stylish Modal</h2>
                  <button onClick={() => setIsOpen(false)} className="p-1 hover:text-red-400 transition-transform transform hover:scale-110">
                    <X size={20} />
                  </button>
                </div>
                <div className="py-4">
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Experience the beauty of modern UI with a glassmorphic, animated modal that stands out.
                  </p>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-lg hover:opacity-80 transition-transform transform hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}