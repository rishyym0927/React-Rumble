import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript used in React.",
  },
  {
    question: "What is a component?",
    answer: "Components are reusable UI elements in React.",
  },
];

export default function Accordion() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-gradient-to-bl from-gray-900 to-gray-800 rounded-3xl shadow-2xl">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center mb-8">FAQs</h1>
      <div className="grid gap-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-800 to-purple-900 border border-gray-700">
            <div
              className="flex justify-between items-center p-5 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all"
              onClick={() => toggleItem(index)}>
              <h2 className="text-2xl font-semibold text-white">{item.question}</h2>
              <motion.div
                animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <ChevronDown className="text-white w-8 h-8" />
              </motion.div>
            </div>
            {openItems.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}>
                <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-b-3xl">
                  <p className="text-lg text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
