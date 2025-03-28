import React, { useState } from 'react';
import './Accordion.css';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

const Accordion = () => {
  const faqData = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do you use props in React?', answer: 'Props are used to pass data between components.' },
    { question: 'What is state in React?', answer: 'State is a built-in React object that stores data about the component.' },
  ];

  return (
    <div className="accordion">
      {faqData.map((faq, index) => (
        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Accordion;
