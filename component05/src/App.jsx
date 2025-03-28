import React, { useState, useEffect } from "react";
import SkeletonLoader from "./Components/SkeletonLoader";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData("Loaded Content");
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            {loading ? <SkeletonLoader type="text" /> : <p>{data}</p>}
            {loading ? <SkeletonLoader type="image" /> : <img src="example.jpg" alt="Loaded" />}
            {loading ? <SkeletonLoader type="card" /> : <div className="content-card">Loaded Card</div>}
        </div>
    );
};

export default App;
