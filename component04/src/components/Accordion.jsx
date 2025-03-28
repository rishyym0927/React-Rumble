// src/components/Accordion.js
import React, { useState } from "react";
import "../App.css";

const Accordion = ({ items, allowMultipleOpen }) => {
  const [openItems, setOpenItems] = useState([]);

  // Handle toggle of accordion item
  const handleToggle = (id) => {
    if (allowMultipleOpen) {
      if (openItems.includes(id)) {
        setOpenItems(openItems.filter((itemId) => itemId !== id));
      } else {
        setOpenItems([...openItems, id]);
      }
    } else {
      setOpenItems(openItems.includes(id) ? [] : [id]);
    }
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <div key={item.id} className={`accordion-item ${openItems.includes(item.id) ? "open" : ""}`}>
          <div className="accordion-header" onClick={() => handleToggle(item.id)}>
            <h3>{item.question}</h3>
            <span>{openItems.includes(item.id) ? "➖" : "➕"}</span>
          </div>
          <div className="accordion-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
