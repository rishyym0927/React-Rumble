import { useState, useEffect } from "react";
import Papa from "papaparse";

const Table = ({ csvFile }) => {
    const [data, setData] = useState([]); // Original CSV data
    const [filteredData, setFilteredData] = useState([]); // Displayed data
    const [sortColumn, setSortColumn] = useState("Name"); // Default sorting by Name
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    // ✅ Load CSV Data Dynamically
    useEffect(() => {
        fetch(csvFile)
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        setData(result.data);
                        setFilteredData(result.data);
                    },
                });
            });
    }, [csvFile]);

    // ✅ Sorting function (Sorts Entire Rows)
    const handleSort = (column) => {
        const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
        const sortedData = [...filteredData].sort((a, b) => {
            let valA = a[column]?.toString().toLowerCase() || "";
            let valB = b[column]?.toString().toLowerCase() || "";

            if (order === "asc") return valA > valB ? 1 : -1;
            return valA < valB ? 1 : -1;
        });

        setSortColumn(column);
        setSortOrder(order);
        setFilteredData(sortedData);
    };

    // ✅ Apply search filtering dynamically
    useEffect(() => {
        const filtered = data.filter((row) =>
            Object.values(row).some((value) =>
                value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    return (
        <div>
            {/* 🔍 Search Input */}
            <input
                type="text"
                placeholder="🔍 Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "10px", padding: "8px", width: "250px" }}
            />

            {/* 📊 Table */}
            <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        {data.length > 0 &&
                            Object.keys(data[0]).map((column) => (
                                <th key={column} style={{ padding: "10px", background: "#ddd" }}>
                                    {column}
                                    <button onClick={() => handleSort(column)} style={{ marginLeft: "5px" }}>
                                        {sortColumn === column ? (sortOrder === "asc" ? "⬆️" : "⬇️") : "↕️"}
                                    </button>
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((cell, i) => (
                                    <td key={i} style={{ padding: "8px", border: "1px solid #ccc" }}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={Object.keys(data[0] || {}).length} style={{ textAlign: "center", padding: "10px" }}>
                                No results found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
