import React, { useState } from "react";
import "./app.css";

const AccordionItem = ({ title, content, isOpen, toggle }) => {
    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={toggle}>
                {title}
                <span className={`chevron ${isOpen ? "rotate" : ""}`}>&#9660;</span>
            </div>
            <div className={`accordion-content ${isOpen ? "show" : ""}`}>{content}</div>
        </div>
    );
};

const Accordion = () => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleAccordion = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const accordionData = [
        { title: "Section 1", content: "This is the content for section 1." },
        { title: "Section 2", content: "This is the content for section 2." },
        { title: "Section 3", content: "This is the content for section 3." }
    ];

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndexes.includes(index)}
                    toggle={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
