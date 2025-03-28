import React, { useState, useEffect } from "react";

// 🔥 Beautiful Skeleton Loader Component
const SkeletonLoader = ({ type }) => {
  const baseStyle = {
    background: "linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 75%)",
    backgroundSize: "200% 100%",
    animation: "loadingAnimation 1.5s infinite ease-in-out",
    borderRadius: "10px",
  };

  const styles = {
    text: { ...baseStyle, width: "100%", height: "15px", marginBottom: "10px" },
    image: { ...baseStyle, width: "100px", height: "100px", borderRadius: "50%" },
    card: { ...baseStyle, width: "100%", height: "200px", borderRadius: "15px" },
  };

  return <div style={styles[type]} />;
};

// 🌟 Main Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: "🚀 Stunning UI with Skeleton Loader",
        image: "https://source.unsplash.com/100x100/?technology",
        description: "This component ensures a smooth user experience while content loads.",
      });
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {isLoading ? (
          <>
            <SkeletonLoader type="image" />
            <SkeletonLoader type="text" />
            <SkeletonLoader type="text" />
            <SkeletonLoader type="card" />
          </>
        ) : (
          <>
            <img src={data.image} alt="Loaded" style={styles.image} />
            <h2 style={styles.title}>{data.title}</h2>
            <p style={styles.text}>{data.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

// 💎 Stylish Component Design
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  },
  card: {
    textAlign: "center",
    width: "80%",
    maxWidth: "400px",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 0px 30px rgba(0, 255, 255, 0.3)",
    backdropFilter: "blur(12px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    color: "#fff",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    boxShadow: "0px 0px 15px rgba(0, 238, 255, 0.8)",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#0ef",
    textShadow: "0px 0px 10px rgba(0, 238, 255, 0.8)",
  },
  text: {
    fontSize: "14px",
    marginTop: "5px",
  },
};

// 🌟 Adding Keyframes for Smooth Animation
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes loadingAnimation {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;
document.head.appendChild(styleSheet);

// 🚀 Exporting the App Component
export default App;
