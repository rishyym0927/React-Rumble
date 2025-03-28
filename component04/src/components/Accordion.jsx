import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

motion.div.displayName = "motion.div";

const faqData = [
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs." },
  { question: "What is Vite?", answer: "Vite is a modern frontend build tool that provides fast development and optimized production builds." }
];

export default function Accordion() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <motion.div>
        <h1 className="text-xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      </motion.div>
      {faqData.map((item, index) => (
        <div key={index} className="w-full rounded-lg overflow-hidden">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium">{item.question}</span>
            <ChevronDown className="w-5 h-5" />
          </button>
          {openIndexes.includes(index) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-4 bg-white/10"
            >
              {item.answer}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
