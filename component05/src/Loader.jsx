import React from "react";
import "./Loader.css"; 

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="/loader.png" alt="Loading..." className="loader-img" />
    </div>
  );
};

export default Loader;
