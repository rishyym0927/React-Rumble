import { useState } from 'react';
import './App.css';

// Accordion Component (can also move to separate file)
const Accordion = ({ items, allowMultiple = false }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleItem = (index) => {
    setActiveIndexes(prev => {
      if (allowMultiple) {
        return prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index];
      } else {
        return prev.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`accordion-item ${activeIndexes.includes(index) ? 'active' : ''}`}
        >
          <button 
            className="accordion-header"
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndexes.includes(index)}
          >
            <span>{item.title}</span>
            <span className="accordion-icon">
              {activeIndexes.includes(index) ? '−' : '+'}
            </span>
          </button>
          <div className="accordion-content">
            <div className="accordion-inner">
              {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main App Component
function App() {
  const faqItems = [
    {
      title: "How do I get started with React Rumble?",
      content: "Sign up on our platform, choose a challenge from the dashboard, and click 'Start Coding' to begin your React Rumble experience!"
    },
    {
      title: "Are there any prerequisites?",
      content: "Basic knowledge of React, JavaScript, and HTML/CSS is recommended. Our beginner challenges include learning resources."
    },
    {
      title: "What happens when I complete a challenge?",
      content: [
        <p key="1">You'll receive:</p>,
        <ul key="2">
          <li>Instant scoring and feedback</li>
          <li>A performance breakdown</li>
          <li>Option to compare with other solutions</li>
        </ul>
      ]
    },
    {
      title: "Can I participate on mobile?",
      content: "While possible for simple challenges, we recommend using a desktop for the best coding experience."
    }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Rumble FAQ</h1>
        <p>Get answers to common questions</p>
      </header>
      
      <main>
        <Accordion items={faqItems} allowMultiple={false} />
      </main>
    </div>
  );
}

export default App;