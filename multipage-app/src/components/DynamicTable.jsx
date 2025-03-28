import { useState } from "react";
import Papa from "papaparse";

export default function DynamicTable() {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => setData(result.data),
      header: true,
    });
  };

  return (
    <>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => <td key={i}>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
