import React, { useState } from "react";
import "./Accordion.css"; // Import CSS for styling

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
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <button className="accordion-header" onClick={() => toggleItem(index)}>
                        {item.question}
                        <span>{openIndexes.includes(index) ? "▲" : "▼"}</span>
                    </button>
                    {openIndexes.includes(index) && (
                        <div className="accordion-content">{item.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
