import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Accordion.css";

const AccordionItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="accordion-item">
      <button 
        className="accordion-header" 
        onClick={toggle}
        aria-expanded={isOpen}
      >
        {question}
        <span className={`icon ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      <motion.div
        className="accordion-content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
};

const Accordion = ({ data, allowMultiple }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.includes(index)}
          toggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
