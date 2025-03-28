import React, { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulate API call with a delay
        setTimeout(() => {
            setData({
                title: "React Skeleton Loader",
                description: "This is a placeholder for content while loading.",
                image: "https://via.placeholder.com/150",
            });
        }, 3000);
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "50px", maxWidth: "400px", margin: "auto" }}>
            <h1>🚀 Skeleton Loader</h1>

            {/* Skeleton Loaders while fetching */}
            {!data ? (
                <>
                    <Skeleton type="image" />
                    <Skeleton type="text" />
                    <Skeleton type="text" />
                    <Skeleton type="card" />
                </>
            ) : (
                <>
                    <img src={data.image} alt="Loaded" width="100%" />
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </>
            )}
        </div>
    );
}

export default App;
