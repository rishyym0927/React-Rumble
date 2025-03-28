import { useState, useEffect } from "react";
import Papa from "papaparse";

const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetch("./Data.csv") 
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => setData(result.data),
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      return sortAsc
        ? a[Object.keys(a)[0]].localeCompare(b[Object.keys(b)[0]])
        : b[Object.keys(a)[0]].localeCompare(a[Object.keys(a)[0]]);
    });
    setData(sortedData);
    setSortAsc(!sortAsc);
  };
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4"
      />
      <button onClick={handleSort} className="bg-blue-500 text-white p-2 mb-4">
        Sort {sortAsc ? "Ascending" : "Descending"}
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key} className="border p-2">
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="border">
              {Object.values(row).map((value, i) => (
                <td key={i} className="border p-2">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
