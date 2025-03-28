import React, { useState, useEffect } from 'react';
import './App.css';

const ThemeToggle = ({ darkMode, toggleTheme }) => (
  <button className="theme-toggle" onClick={toggleTheme}>
    {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
  </button>
);

const Header = ({ darkMode }) => (
  <header className={`header ${darkMode ? 'dark' : 'light'}`}>
    <h1>Survey Website</h1>
  </header>
);

const SurveyForm = ({ darkMode }) => {
  const questions = [
    {
      id: 1,
      type: 'text',
      text: 'What is your name?',
    },
    {
      id: 2,
      type: 'multiple-choice',
      text: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green', 'Yellow']
    },
    {
      id: 3,
      type: 'rating',
      text: 'How would you rate our service?',
    },
    {
      id: 4,
      type: 'dropdown',
      text: 'How did you hear about us?',
      options: ['Facebook', 'Twitter', 'Friend', 'Other']
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});

  const handleAnswer = (value) => {
    setResponses({
      ...responses,
      [questions[currentQuestion].id]: value
    });
  };

  const handleSubmit = () => {
    console.log('Survey responses:', responses);
    alert('Thank you for completing the survey!');
  };

  return (
    <div className={`survey-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      
      {(() => {
        const question = questions[currentQuestion];
        const answer = responses[question.id];
        
        switch(question.type) {
          case 'text':
            return (
              <div className="question">
                <label>{question.text}</label>
                <input
                  type="text"
                  value={answer || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                />
              </div>
            );
          case 'multiple-choice':
            return (
              <div className="question">
                <label>{question.text}</label>
                {question.options.map((option) => (
                  <div key={option}>
                    <label>
                      <input
                        type="radio"
                        name={question.id}
                        value={option}
                        checked={answer === option}
                        onChange={(e) => handleAnswer(e.target.value)}
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            );
          case 'rating':
            return (
              <div className="question">
                <label>{question.text}</label>
                <div className="rating-container">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      className={`rating-btn ${answer === num ? 'selected' : ''}`}
                      onClick={() => handleAnswer(num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            );
          case 'dropdown':
            return (
              <div className="question">
                <label>{question.text}</label>
                <select
                  value={answer || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                >
                  <option value="">Select an option</option>
                  {question.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          default:
            return null;
        }
      })()}

      <div className="navigation-buttons">
        {currentQuestion > 0 && (
          <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
            Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 ? (
          <button 
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={!responses[questions[currentQuestion].id]}
          >
            Next
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={!responses[questions[currentQuestion].id]}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

const Footer = ({ darkMode }) => (
  <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
    <p>© 2023 Survey Website. All rights reserved.</p>
  </footer>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or user preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Save preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Apply class to body for global theming
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <Header darkMode={darkMode} />
      <main>
        <SurveyForm darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;