import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "../styles.css"; // Importing the CSS file

const faqs = [
  { id: 1, question: "📌 What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { id: 2, question: "🎨 What is Framer Motion?", answer: "Framer Motion is a React library for animations and transitions." },
  { id: 3, question: "💡 What is Lucide React?", answer: "Lucide React is an icon library for modern UI development." },
];

export default function Accordion() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="faq-container">
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <button
            onClick={() => toggleItem(faq.id)}
            className="faq-button"
          >
            {faq.question}
            <motion.div
              animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className={`chevron ${openItems.includes(faq.id) ? "rotate" : ""}`} size={20} />
            </motion.div>
          </button>
          {openItems.includes(faq.id) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="faq-content"
            >
              {faq.answer}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
