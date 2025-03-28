import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Accordion  ({ items, allowMultiple = true })  {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems(openItems.includes(index)
        ? openItems.filter(i => i !== index)
        : [...openItems, index]
      );
    } else {
      setOpenItems(openItems.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
          >
            <span className="text-lg font-medium text-gray-900">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openItems.includes(index) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-200 ease-in-out ${
              openItems.includes(index)
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 py-4 text-gray-600">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}