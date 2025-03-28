import React from "react";
import "./PageStyles.css";

const About = () => {
  return (
    <div className="page about">
      <h2>About Us</h2>
      <p>We bring passion, creativity, and expertise to deliver the best services.</p>
      <div className="about-section">
        <img
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG91ciUyMHRlYW18ZW58MHx8MHx8fDA%3D"
          alt="Our Team"
        />
        <div className="about-text">
          <h3>Who We Are</h3>
          <p>
            A diverse group of professionals dedicated to innovation and excellence.
          </p>
          <h3>Our Mission</h3>
          <p>
            To craft memorable experiences and create impactful solutions for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
