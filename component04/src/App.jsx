import { useState } from 'react';
import './App.css';

const faqs = [
  { question: "What is Vite?", answer: "Vite is a next-generation frontend tool that improves development experience." },
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "How do I install dependencies?", answer: "You can install dependencies using npm or yarn." }
];

function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={onClick}>
        {faq.question}
      </button>
      {isOpen && <p className="accordion-content">{faq.answer}</p>}
    </div>
  );
}

function App() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes(prevIndexes => 
      prevIndexes.includes(index) 
        ? prevIndexes.filter(i => i !== index) 
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="app-container">
      <h1>FAQ Section</h1>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            isOpen={openIndexes.includes(index)}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


