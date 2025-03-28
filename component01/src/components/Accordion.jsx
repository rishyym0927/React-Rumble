import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.title}
          </button>
          {openIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}