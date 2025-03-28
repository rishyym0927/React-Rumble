import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API Call
    setTimeout(() => {
      setData({ message: "API Data Loaded Successfully!" });
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px",marginLeft: "550px" }}>
      {loading ? <Loader /> : <h2>{data.message}</h2>}
    </div>
  );
}

export default App;
