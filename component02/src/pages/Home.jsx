import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px", textAlign: "center", background: theme === "light" ? "#fff" : "#222", color: theme === "light" ? "#000" : "#fff" }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

export default Home;
