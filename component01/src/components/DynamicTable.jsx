import { useEffect, useState } from 'react';

function DynamicTable({ csvUrl }) {
  const [data, setData] = useState([]);
  const [sortedAsc, setSortedAsc] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(csvUrl)
      .then(response => response.text())
      .then(text => {
        // Basic CSV parsing (assumes headers in first row)
        const rows = text.split('\n').filter(Boolean);
        const headers = rows[0].split(',');
        const parsedData = rows.slice(1).map(row => {
          const values = row.split(',');
          return headers.reduce((obj, header, i) => {
            obj[header.trim()] = values[i].trim();
            return obj;
          }, {});
        });
        setData(parsedData);
      });
  }, [csvUrl]);

  const sortData = () => {
    const sorted = [...data].sort((a, b) => {
      // Sort using first header field for demonstration
      const header = Object.keys(a)[0];
      return sortedAsc
        ? a[header].localeCompare(b[header])
        : b[header].localeCompare(a[header]);
    });
    setData(sorted);
    setSortedAsc(!sortedAsc);
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      val.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={sortData}>
        Sort {sortedAsc ? 'Descending' : 'Ascending'}
      </button>
      <table>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
