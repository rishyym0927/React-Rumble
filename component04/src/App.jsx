import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index];
      } else {
        return prev.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className={`accordion-item ${openItems.includes(index) ? 'open' : ''}`} 
             key={index}>
          <button 
            className="accordion-header"
            onClick={() => toggleItem(index)}
            aria-expanded={openItems.includes(index)}
            aria-controls={`content-${index}`}
          >
            <span>{item.title}</span>
            <span className="chevron">▼</span>
          </button>
          
          <div 
            id={`content-${index}`}
            className="accordion-content" 
            aria-hidden={!openItems.includes(index)}
          >
            <div className="content-inner">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;