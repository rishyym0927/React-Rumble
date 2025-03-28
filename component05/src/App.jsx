import React, { useState, useEffect } from "react";
import { SkeletonCard } from "./Skeleton";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ name: "John Doe", bio: "Software Engineer" });
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {loading ? (
        <SkeletonCard />
      ) : (
        <div className="profile-card">
          <img src="https://via.placeholder.com/50" alt="User Avatar" className="avatar" />
          <div>
            <h2>{data.name}</h2>
            <p>{data.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
