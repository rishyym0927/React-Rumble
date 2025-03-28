import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function DynamicTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetch("./data/Data.csv") // Update with the actual CSV file path
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((csvText) => {
        if (csvText.startsWith("<")) {
          throw new Error("Received HTML instead of CSV. Check the file path.");
        }
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      })
      .catch((error) => console.error("Error loading CSV file:", error));
  }, []);

  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => {
      return sortAsc
        ? (a[key] || "").toString().localeCompare((b[key] || "").toString())
        : (b[key] || "").toString().localeCompare((a[key] || "").toString());
    });
    setSortAsc(!sortAsc);
    setData(sortedData);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      val && val.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      {data.length > 0 ? (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              {Object.keys(data[0]).map((key) => (
                <th
                  key={key}
                  className="border p-2 cursor-pointer"
                  onClick={() => handleSort(key)}
                >
                  {key} {sortAsc ? "▲" : "▼"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index} className="border">
                {Object.keys(data[0]).map((key, i) => (
                  <td key={i} className="border p-2">{row[key] || "-"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">Loading data or no data available...</p>
      )}
    </div>
  );
}
