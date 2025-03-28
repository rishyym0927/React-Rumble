import Accordion from "./components/Accordion";

const faqData = [
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "What is an accordion component?", answer: "An accordion is a UI component that expands and collapses content sections." },
  { question: "How does this accordion work?", answer: "Clicking a header toggles its content, allowing multiple sections to open at once." },
];

const App = () => {
  return (
    <div className="app">
      <h2>FAQ Section</h2>
      <Accordion items={faqData} />
    </div>
  );
};

export default App;
