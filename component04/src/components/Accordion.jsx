import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ title, content, isOpen, toggle }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggle}>
        {title} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = ({ allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "What is a component?", content: "A component is a reusable piece of UI in React." },
    { title: "What is state in React?", content: "State is an object that determines how a component behaves and renders." },
  ];

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="accordion">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          title={faq.title}
          content={faq.content}
          isOpen={openIndexes.includes(index)}
          toggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
