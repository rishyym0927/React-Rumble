import { useState, useEffect } from "react";
import Papa from "papaparse";

const App = () => {
    const [tableData, setTableData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: "Company Name", direction: "asc" });

    useEffect(() => {
        fetch("/data.csv")
            .then(response => response.text())
            .then(csvText => {
                const result = Papa.parse(csvText, { header: true, skipEmptyLines: true });
                setHeaders(result.meta.fields); // Extract column headers
                setTableData(result.data); // Extract table rows
            })
            .catch(error => console.error("Error loading CSV:", error));
    }, []);

    const sortData = () => {
        let direction = "asc";
        if (sortConfig.direction === "asc") {
            direction = "desc";
        }

        const sortedData = [...tableData].sort((a, b) => {
            return direction === "asc"
                ? a["Company Name"].localeCompare(b["Company Name"])
                : b["Company Name"].localeCompare(a["Company Name"]);
        });

        setTableData(sortedData);
        setSortConfig({ key: "Company Name", direction });
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">CSV Data Table</h2>

            {tableData.length > 0 ? (
                <div className="overflow-x-auto w-full max-w-6xl">
                    <table className="w-full border-2 border-black bg-white shadow-md rounded-lg text-black">
                        <thead className="bg-gray-700 text-white">
                            <tr>
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className={`p-3 text-left ${
                                            header === "Company Name"
                                                ? "cursor-pointer hover:bg-gray-600 transition"
                                                : ""
                                        }`}
                                        onClick={header === "Company Name" ? sortData : undefined}
                                    >
                                        {header}{" "}
                                        {header === "Company Name" &&
                                            (sortConfig.direction === "asc" ? "▲" : "▼")}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-t hover:bg-gray-100">
                                    {headers.map((header, cellIndex) => (
                                        <td key={cellIndex} className="p-3">
                                            {row[header]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-600">Loading CSV data...</p>
            )}
        </div>
    );
};

export default App;
