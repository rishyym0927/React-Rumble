import React from "react";
import Skeleton from "./Skeleton";

function DataCard({ title, description, loading }) {
  return (
    <div className="card">
      {loading ? (
        <>
          <Skeleton type="title" />
          <Skeleton type="text" />
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{description}</p>
        </>
      )}
    </div>
  );
}

export default DataCard;
