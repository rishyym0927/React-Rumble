import { useState } from "react";

const faqs = [
  { question: "What is React?", answer: "React is a JavaScript library for UI." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript." },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(index === openIndex ? null : index)}>
            {faq.question}
          </button>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
