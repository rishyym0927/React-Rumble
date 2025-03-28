import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { usePapaParse } from "react-papaparse";

export default function DynamicTable() {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [search, setSearch] = useState("");
  const { readString } = usePapaParse();

  useEffect(() => {
    fetch("/component03/Data.csv") 
      .then((response) => response.text())
      .then((csvText) => {
        readString(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (results) => setData(results.data),
        });
      });
  }, []);

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setSortConfig({ key, direction });
    setData(sortedData);
  };

  const filteredData = data.filter(row =>
    Object.values(row).some(value => value?.toString().toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-4 space-y-4">
      <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key} className="border p-2 cursor-pointer" onClick={() => handleSort(key)}>
                {key} {sortConfig.key === key ? (sortConfig.direction === "asc" ? "⬆" : "⬇") : ""}
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
}
