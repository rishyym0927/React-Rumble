import React, { useState } from "react";

function Accordion({ items, allowMultipleOpen = false }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index]
      );
    } else {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.accordionContainer}>
        <h1 style={styles.heading}>Frequently Asked Questions (FAQ) 📖</h1>
        {items.map((item, index) => (
          <div key={index} style={styles.accordionItem}>
            <button
              onClick={() => toggleItem(index)}
              style={styles.accordionHeader}
            >
              {item.question}
              <span>{openIndexes.includes(index) ? "▲" : "▼"}</span>
            </button>
            {openIndexes.includes(index) && (
              <div style={styles.accordionContent}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Updated Styles: Fixed Background, Proper Text Color, Fully Centered
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    width: "100vw",
    backgroundColor: "#f0f0f5", // Light background for contrast
  },
  accordionContainer: {
    width: "90%",
    maxWidth: "700px",
    backgroundColor: "#ffffff", // White background for content
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center", // Centers text inside
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333", // Dark text for contrast
  },
  accordionItem: {
    marginBottom: "10px",
    borderRadius: "5px",
    overflow: "hidden",
  },
  accordionHeader: {
    width: "100%",
    backgroundColor: "#007bff", // Blue background
    color: "white", // White text for contrast
    padding: "15px",
    fontSize: "18px",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background 0.3s",
  },
  accordionContent: {
    backgroundColor: "#f9f9f9", // Light gray for content
    color: "#333", // Dark text for readability
    padding: "15px",
    fontSize: "16px",
    textAlign: "left",
    lineHeight: "1.5",
    borderBottom: "1px solid #ddd",
  },
};

export default Accordion;
