import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Website</h1>
      <p style={styles.text}>Click the toggle button to switch themes.</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Center vertically
    width: "100vw", // Center horizontally
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "600px",
  },
};

export default Home;
