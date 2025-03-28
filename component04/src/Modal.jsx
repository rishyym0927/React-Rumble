import React, { useState } from 'react';
import './Accordion.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [allowMultiple, setAllowMultiple] = useState(false);
  const [activeIndices, setActiveIndices] = useState([]);

  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.'
    },
    {
      title: 'Why use React?',
      content: 'React makes it painless to create interactive UIs with a component-based architecture.'
    },
    {
      title: 'How do you use React?',
      content: 'You create components that manage their own state and compose them to make complex UIs.'
    }
  ];

  const toggleItem = (index) => {
    if (allowMultiple) {
      setActiveIndices(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setActiveIndex(prev => prev === index ? null : index);
    }
  };

  const isItemActive = (index) => {
    return allowMultiple 
      ? activeIndices.includes(index)
      : activeIndex === index;
  };

  return (
    <div className="accordion-container">
      <div className="accordion-controls">
        <label>
          <input
            type="checkbox"
            checked={allowMultiple}
            onChange={() => setAllowMultiple(!allowMultiple)}
          />
          Allow multiple items open
        </label>
      </div>
      
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => toggleItem(index)}
            >
              <h3>{item.title}</h3>
              <span>{isItemActive(index) ? '−' : '+'}</span>
            </div>
            {isItemActive(index) && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;