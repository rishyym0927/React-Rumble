import DynamicTable from "../components/DynamicTable";

export default function TablePage() {
  return (
    <div>
      <h1>CSV Data Table</h1>
      <p>Upload a CSV file to display and sort data.</p>
      <DynamicTable />
    </div>
  );
}
