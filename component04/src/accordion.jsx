import React, { useState } from "react";
import "./Accordion.css";

const faqData = [
  { id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { id: 2, question: "How does useState work?", answer: "useState is a Hook that lets you add state to a functional component." },
  { id: 3, question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML." },
  { id: 4, question: "Can I use React with other libraries?", answer: "Yes, React can be used alongside other JavaScript libraries or frameworks." }
];

function Accordion() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter(item => item !== id) // Close if already open
        : [...prevOpenItems, id] // Open if closed
    );
  };

  return (
    <div className="accordion">
      {faqData.map((item) => (
        <div key={item.id} className="accordion-item">
          <button className="accordion-header" onClick={() => toggleItem(item.id)}>
            {item.question} {openItems.includes(item.id) ? "🔼" : "🔽"}
          </button>
          {openItems.includes(item.id) && <div className="accordion-content">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
