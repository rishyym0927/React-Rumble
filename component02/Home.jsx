import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <ThemeToggle />
    <br />
    <Link to="/about">Go to About</Link>
  </div>
);

export default Home;
