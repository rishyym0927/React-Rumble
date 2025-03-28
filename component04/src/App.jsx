import React, { useState } from "react";
import "./Accordion.css"; // Ensure this CSS file is created for styling
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionItem = ({ title, content, isOpen, toggle }) => {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-header" onClick={toggle}>
        <span>{title}</span>
        {isOpen ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
      </button>
      <div className="accordion-content-wrapper">
        <div className="accordion-content">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Close if already open
        : [...prevIndexes, index] // Open new
    );
  };

  const faqData = [
    { title: "🚀 What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "⚛️ How does useState work?", content: "useState is a React hook that allows functional components to manage state." },
    { title: "💡 What is JSX?", content: "JSX is a syntax extension that lets you write HTML-like code inside JavaScript files." },
    { title: "🌍 Why use React?", content: "React makes UI development efficient with its component-based architecture and virtual DOM." },
  ];

  return (
    <div className="accordion-container">
      <h2 className="accordion-title">🎭 Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          toggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
