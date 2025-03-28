import React from "react";
import Accordion from "./Accordion";

function App() {
    const faqData = [
        { question: "What is React?", answer: "React is a JavaScript library for building UI." },
        { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript." },
        { question: "What are hooks?", answer: "Hooks let you use state and other features in function components." },
    ];

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>🎭 Accordion/FAQ Section</h1>

            {/* Allow multiple open */}
            <h2>🔄 Multiple Open</h2>
            <Accordion items={faqData} allowMultiple={true} />

            {/* Only one open at a time */}
            <h2>📌 One Open at a Time</h2>
            <Accordion items={faqData} allowMultiple={false} />
        </div>
    );
}

export default App;
