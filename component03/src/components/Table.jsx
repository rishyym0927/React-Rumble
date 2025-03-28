import React, { useState, useEffect } from 'react';
import { ArrowUpDown, Search } from 'lucide-react';

export function Table() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = async () => {
    try {
      const response = await fetch('/data.csv');
      const csvText = await response.text();
      const rows = csvText.split('\n');
      const headers = rows[0].split(',').map(header => header.trim());
      const parsedData = rows.slice(1).map(row => {
        const values = row.split(',').map(value => value.trim());
        return headers.reduce((obj, header, index) => {
          obj[header] = values[index];
          return obj;
        }, {});
      });
      
      setHeaders(headers);
      setData(parsedData);
    } catch (error) {
      console.error('Error loading CSV:', error);
    }
  };

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search table..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {headers.map(header => (
                <th 
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                >
                  <button
                    onClick={() => sortData(header)}
                    className="inline-flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
                  >
                    {header}
                    <ArrowUpDown 
                      size={16}
                      className={`transition-opacity duration-200 ${
                        sortConfig.key === header 
                          ? 'opacity-100 text-blue-500 dark:text-blue-400' 
                          : 'opacity-50'
                      }`}
                    />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
            {filteredData.map((row, index) => (
              <tr 
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
              >
                {headers.map(header => (
                  <td 
                    key={header}
                    className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}