import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-title" onClick={() => toggleItem(index)}>
            {item.question} {openIndex === index ? "▲" : "▼"}
          </button>
          {openIndex === index && (
            <div className="accordion-content">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
