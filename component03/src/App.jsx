import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import DynamicTable from "./Components/DynamicTable";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.csv") // Make sure data.csv is inside public folder
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    complete: (result) => setData(result.data),
                });
            });
    }, []);

    return (
        <div className="App">
            <h1 className="text-center text-2xl font-bold my-4">CSV Data Table</h1>
            <DynamicTable initialData={data} />
        </div>
    );
};

export default App;
