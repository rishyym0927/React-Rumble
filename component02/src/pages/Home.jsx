import React from "react";
import "./PageStyles.css";

const Home = () => {
  return (
    <div className="page home">
      <h2>Welcome to Our Colorful World</h2>
      <p>Discover amazing services and experiences crafted just for you!</p>
      <div className="cards-container">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1704352638185-2fcc28c8e7f7?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fast & Reliable"
          />
          <h3>🚀 Fast & Reliable</h3>
          <p>Experience blazing fast performance and unwavering reliability.</p>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1590065707046-4fde65275b2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VjdXJlfGVufDB8fDB8fHww"
            alt="Secure & Trusted"
          />
          <h3>🔒 Secure & Trusted</h3>
          <p>Your data is safe with us, protected by top-notch security measures.</p>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MjQlMkY3JTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="24/7 Support"
          />
          <h3>📞 24/7 Support</h3>
          <p>Our friendly support team is always here to help you, day or night.</p>
        </div>
      </div>
      <button className="primary-btn">Get Started</button>
    </div>
  );
};

export default Home;
