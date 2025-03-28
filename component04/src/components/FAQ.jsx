import { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 80%;
  max-width: 700px;
  margin: 40px auto;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: #000;
  padding: 20px;
`;

const AccordionItem = styled.div`
  border-bottom: 2px solid #ddd;
  margin-bottom: 10px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const AccordionHeader = styled.div`
  background: #007bff;
  color: white;
  padding: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const AccordionContent = styled.div`
  background: #000;
  padding: 15px;
  font-size: 16px;
  line-height: 1.6;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  transition: max-height 0.3s ease-in-out;
`;

export default function Accordion() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building interactive user interfaces.",
    },
    {
      question: "How does useState work?",
      answer: "The useState hook allows functional components to manage state.",
    },
    {
      question: "What are props in React?",
      answer: "Props are inputs to components that allow data to be passed from a parent to a child.",
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React.",
    },
  ];

  return (
    <AccordionContainer>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleAccordion(index)}>
            {faq.question} {openIndexes.includes(index) ? "➖" : "➕"}
          </AccordionHeader>
          <AccordionContent isOpen={openIndexes.includes(index)}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
}
