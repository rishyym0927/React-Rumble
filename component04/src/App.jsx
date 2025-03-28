import React, { useState } from "react";

// 🌟 Accordion Component
const Accordion = ({ items, allowMultiple }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div style={styles.accordionContainer}>
      {items.map((item, index) => (
        <div key={index} style={styles.accordionItem}>
          <button
            style={styles.accordionHeader}
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <span style={styles.icon}>
              {openIndexes.includes(index) ? "🔼" : "🔽"}
            </span>
          </button>
          {openIndexes.includes(index) && (
            <div style={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// 🌟 Main App Component
const App = () => {
  const faqItems = [
    { title: "🚀 What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "🎨 What is Glassmorphism?", content: "Glassmorphism is a UI design trend using frosted-glass effects." },
    { title: "🔥 Why use an Accordion?", content: "It helps organize content in a user-friendly manner." },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎭 FAQ Section</h1>
      <Accordion items={faqItems} allowMultiple={true} />
    </div>
  );
};

// 💎 Stylish Component Design
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #141e30, #243b55)",
    color: "#fff",
  },
  title: {
    fontSize: "26px",
    marginBottom: "20px",
    textShadow: "0px 0px 10px rgba(0, 238, 255, 0.8)",
  },
  accordionContainer: {
    width: "90%",
    maxWidth: "500px",
  },
  accordionItem: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    marginBottom: "10px",
    overflow: "hidden",
    backdropFilter: "blur(12px)",
    boxShadow: "0px 0px 15px rgba(0, 238, 255, 0.3)",
  },
  accordionHeader: {
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    background: "transparent",
    border: "none",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    color: "#0ef",
  },
  icon: {
    fontSize: "20px",
  },
  accordionContent: {
    padding: "15px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "0 0 10px 10px",
    color: "#fff",
  },
};

// 🚀 Exporting the App Component
export default App;
