import React from "react";
import Accordion from "./Components/Accordion";
import "./Components/Accordion.css";

const faqItems = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "How does useState work?", content: "useState is a Hook that allows you to have state variables in functional components." },
    { title: "What is JSX?", content: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML." }
];

const App = () => {
    return (
        <div className="app-container">
            <h1>FAQ Section</h1>
            <Accordion items={faqItems} allowMultiple={true} />
        </div>
    );
};

export default App;