import React, { useState, useEffect } from "react";

const DynamicTable = ({ initialData }) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, ascending: true });

    useEffect(() => {
        setData(initialData);
    }, [initialData]);

    const handleSort = (key) => {
        const isAscending = sortConfig.key === key ? !sortConfig.ascending : true;

        const sortedData = [...data].sort((a, b) => {
            return isAscending
                ? a[key]?.localeCompare(b[key] || "")
                : b[key]?.localeCompare(a[key] || "");
        });

        setData(sortedData);
        setSortConfig({ key, ascending: isAscending });
    };

    const filteredData = data.filter((row) =>
        Object.values(row).some((val) => val.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="p-4 w-full max-w-4xl mx-auto">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 block w-full px-3 py-2 border rounded shadow"
            />
            {data.length > 0 && (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        {Object.keys(data[0]).map((key) => (
                            <th
                                key={key}
                                onClick={() => handleSort(key)}
                                className="border p-2 cursor-pointer hover:bg-gray-300"
                            >
                                {key} {sortConfig.key === key ? (sortConfig.ascending ? "⬆" : "⬇") : "↕"}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((row, index) => (
                        <tr key={index} className="odd:bg-gray-100 even:bg-white">
                            {Object.values(row).map((val, i) => (
                                <td key={i} className="border p-2">{val}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DynamicTable;
