import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={onClick}>
                {title}
            </button>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

const Accordion = ({ items, allowMultiple }) => {
    const [openItems, setOpenItems] = useState([]);

    const handleToggle = (index) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(index)
                    ? prev.filter((item) => item !== index)
                    : [...prev, index]
            );
        } else {
            setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openItems.includes(index)}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
