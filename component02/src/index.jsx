import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";
import "./index.css"; // Import CSS

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
