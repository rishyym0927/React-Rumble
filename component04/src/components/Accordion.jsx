import { useState } from "react";

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
    <div>
      {items.map((item, index) => (
        <div key={index} style={{
          marginBottom: "10px",
          background: "#fff",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          border: "1px solid #ddd"
        }}>
          <button
            onClick={() => toggleItem(index)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {item.question} {openIndexes.includes(index) ? "▲" : "▼"}
          </button>
          {openIndexes.includes(index) && (
            <div style={{ padding: "10px", fontSize: "14px", color: "#555" }}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
