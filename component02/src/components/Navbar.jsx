import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <ThemeToggle />
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "var(--button-bg)",
  },
  link: {
    textDecoration: "none",
    color: "var(--button-text)",
    fontSize: "18px",
    margin: "0 10px",
  },
};

export default Navbar;
