import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Modal({Header, Body, setIsOpen}) {
  return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-white/30">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-2xl shadow-xl w-96 p-6"
                >
                    <div className="flex justify-between items-center border-b pb-2">
                        <h2 className="text-xl text-neutral-900 font-semibold">{Header}</h2>
                        <button onClick={() => setIsOpen(false)}>
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="py-4 text-neutral-700">{Body}</div>
                </motion.div>
                </div>
        </div>
  );
}
