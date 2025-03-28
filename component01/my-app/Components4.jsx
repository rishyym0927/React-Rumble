import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openItems, setOpenItems] = useState([]);

  // Toggle function to expand/collapse an accordion item
  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      // If the item is already open, close it
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      // If the item is closed, open it
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div style={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} style={styles.accordionItem}>
          <div
            style={styles.accordionHeader}
            onClick={() => toggleItem(index)}
          >
            <h3>{item.title}</h3>
            <span style={styles.toggleIcon}>
              {openItems.includes(index) ? "-" : "+"}
            </span>
          </div>
          <div
            style={{
              ...styles.accordionBody,
              display: openItems.includes(index) ? "block" : "none",
            }}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  accordion: {
    width: "80%",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
  },
  accordionItem: {
    marginBottom: "5px",
    borderBottom: "1px solid #ddd",
  },
  accordionHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    cursor: "pointer",
    borderBottom: "1px solid #ccc",
  },
  accordionBody: {
    padding: "10px",
    backgroundColor: "#fafafa",
  },
  toggleIcon: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};

const App = () => {
  const accordionItems = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It is component-based and declarative.",
    },
    {
      title: "Why use React?",
      content:
        "React allows developers to build web applications faster and more efficiently by reusing components and managing states.",
    },
    {
      title: "What is a Component?",
      content:
        "A component in React is an independent, reusable piece of the UI. It can be a function or class that returns JSX.",
    },
  ];

  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;