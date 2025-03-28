import Accordion from "./components/Accordion";

const faqData = [
  { question: "What is React?", answer: "React is a JavaScript library for building UIs." },
  { question: "How does React work?", answer: "React creates a virtual DOM to improve performance." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for writing HTML in JavaScript." }
];

const App = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🎭 FAQ Section</h1>
      <Accordion items={faqData} allowMultiple={true} />
    </div>
  );
};

export default App;
