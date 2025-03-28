import { useState } from 'react';
import Papa from 'papaparse';

export default function DynamicTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const handleFileUpload = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      complete: (result) => setData(result.data),
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <table>
        <thead>
          <tr>{data.length > 0 && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}</tr>
        </thead>
        <tbody>
          {data.filter(row => Object.values(row).some(value => value.includes(search))).map((row, index) => (
            <tr key={index}>{Object.values(row).map((val, i) => <td key={i}>{val}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}