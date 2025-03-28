import React from "react";
import ThemeProvider from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>🌗 Dark/Light Mode Toggle</h1>
        <ThemeToggle />
        <p>Switch between dark and light themes with smooth transitions!</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
