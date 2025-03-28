import React, { useState, useEffect } from "react";
import Skeleton from "./skeleton";

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        bio: "A passionate React developer.",
      });
    }, 3000); // Simulating API delay
  }, []);

  return (
    <div className="card">
      {user ? (
        <>
          <img src={user.avatar} alt="Avatar" className="avatar" />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </>
      ) : (
        <>
          <Skeleton type="avatar" />
          <Skeleton type="text large" />
          <Skeleton type="text small" />
        </>
      )}
    </div>
  );
};

export default UserCard;
