import React from "react";
import "./PageStyles.css";

const Services = () => {
  return (
    <div className="page services">
      <h2>Our Services</h2>
      <p>We offer a wide range of creative and innovative solutions tailored to your needs.</p>
      <div className="services-container">
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBjb25zdWx0aW5nfGVufDB8fDB8fHww"
            alt="Business Consulting"
          />
          <h3>📊 Business Consulting</h3>
          <p>Empowering your business with strategic insights and innovative ideas.</p>
        </div>
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
            alt="Web Development"
          />
          <h3>💻 Web Development</h3>
          <p>Building modern, responsive, and engaging web applications for your brand.</p>
        </div>
        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="UI/UX Design"
          />
          <h3>🎨 UI/UX Design</h3>
          <p>Creating visually stunning and user-friendly designs that captivate your audience.</p>
        </div>
      </div>
      <button className="primary-btn">Learn More</button>
    </div>
  );
};

export default Services;
