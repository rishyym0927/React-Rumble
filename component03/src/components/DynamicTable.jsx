import React, { useState } from "react";
import Papa from "papaparse";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/Table";
import { ArrowUpDown } from "lucide-react";

export default function DynamicTable() {
  const [data, setData] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");

  // Handle CSV File Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    Papa.parse(file, {
      complete: (result) => setData(result.data),
      header: true,
      skipEmptyLines: true,
    });
  };

  // Handle Sorting (default ascending)
  const handleSort = (key) => {
    const newOrder = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortOrder(newOrder);

    const sortedData = [...data].sort((a, b) => {
      return newOrder === "asc" ? a[key]?.localeCompare(b[key]) : b[key]?.localeCompare(a[key]);
    });

    setData(sortedData);
  };

  // Search Filter Function
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Dynamic Table</h2>

      {/* File Upload & Search */}
      <div className="mb-4 flex flex-col md:flex-row gap-2">
        <Input type="file" accept=".csv" onChange={handleFileUpload} className="p-2 border rounded w-full md:w-auto" />
        <Input
          type="text"
          placeholder="🔍 Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Table Container to prevent overflow */}
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <TableHead key={key} onClick={() => handleSort(key)} className="p-2 bg-gray-100">
                    {key} <ArrowUpDown size={14} className="inline ml-1" />
                  </TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((cell, idx) => (
                    <TableCell key={idx} className="p-2">{cell}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={Object.keys(data[0] || {}).length} className="text-center p-4">
                  No matching data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
