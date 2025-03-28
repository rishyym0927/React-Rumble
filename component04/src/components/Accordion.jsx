import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (allowMultiple) {
        // If multiple items can be open, toggle the clicked index
        return prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index];
      } else {
        // If only one item can be open, replace the current open index
        return prevIndexes.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${
              openIndexes.includes(index) ? "active" : ""
            }`}
            onClick={() => toggleItem(index)}
          >
            <span>{item.title}</span>
            <span className="accordion-icon">
              {openIndexes.includes(index) ? "−" : "+"}
            </span>
          </button>
          <div
            className={`accordion-content ${
              openIndexes.includes(index) ? "open" : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
