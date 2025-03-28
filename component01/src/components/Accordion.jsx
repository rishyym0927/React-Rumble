import { useState } from 'react';

function Accordion({ items }) {
  // Array of booleans tracking open state
  const [openItems, setOpenItems] = useState(Array(items.length).fill(false));

  const toggleItem = index => {
    setOpenItems(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleItem(index)}>
            {item.title}
          </button>
          {openItems[index] && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
