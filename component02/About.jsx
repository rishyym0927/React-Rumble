import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

import About from "./About";  // No need to add .jsx


const About = () => (
  <div>
    <h1>About Page</h1>
    <ThemeToggle />
    <br />
    <Link to="/">Go to Home</Link>
  </div>
);

export default About;
