import React from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const App = () => {
  return (
    <div>
      <h1>Dark/Light Mode Toggle</h1>
      <ThemeToggle />
      <p>Toggle the theme and navigate between pages to see it persist!</p>
    </div>
  );
};

export default App;
