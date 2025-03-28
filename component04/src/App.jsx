import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript, used with React to describe UI elements." },
    { question: "What is a component?", answer: "Components are reusable building blocks in React applications." },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Frequently Asked Questions</h1>
      <div style={{ marginTop: "20px" }}>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{question}</span>
        <button onClick={toggleAnswer} className="show-btn" style={{ marginLeft: "10px" }}>
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>
      {isOpen && <div style={{ marginTop: "10px", color: "#555" }}>{answer}</div>}
    </div>
  );
};

export default FAQSection;