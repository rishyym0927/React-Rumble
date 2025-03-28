import { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  font-family: "Poppins", sans-serif;
  color: #333;
`;

const AccordionItem = styled.div`
  background: #f9f9f9;
  margin-bottom: 12px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ff6b6b;
  color: white;
  padding: 18px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    background: #ee5253;
  }
`;

const AccordionContent = styled.div`
  padding: 16px;
  background: white;
  color: #555;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  font-size: 16px;
  line-height: 1.5;
  transition: 0.3s ease-in-out;
`;

const Accordion = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Container>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleItem(index)}>
            {item.title}
            {openIndexes.includes(index) ? <FaMinus /> : <FaPlus />}
          </AccordionHeader>
          <AccordionContent isOpen={openIndexes.includes(index)}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Container>
  );
};

const faqItems = [
  { title: "What is JavaScript?", content: "JavaScript is a programming language used to build interactive web applications." },
  { title: "How does React work?", content: "React uses a virtual DOM to update only the necessary parts of the UI efficiently." },
  { title: "What is a component?", content: "A component in React is a reusable piece of UI that can be nested, managed, and reused." },
];

const App = () => <Accordion items={faqItems} />;

export default App;
