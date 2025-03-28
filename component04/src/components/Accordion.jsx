import React, { useState } from "react";
import "../styles.css";

const faqData = [
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "How does useState work?", answer: "useState is a React Hook that allows state management in functional components." },
  { question: "What is the Virtual DOM?", answer: "The Virtual DOM is a lightweight copy of the real DOM that updates efficiently." },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <h2>FAQ Section</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(index)}>
              {item.question}
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9660;</span>
            </button>
            <div className={`accordion-content ${openIndex === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
