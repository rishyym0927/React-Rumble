import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px", textAlign: "center", background: theme === "light" ? "#fff" : "#222", color: theme === "light" ? "#000" : "#fff" }}>
      <h1>📖 About Page</h1>
      <p>Learn more about us here.</p>
    </div>
  );
};

export default About;
