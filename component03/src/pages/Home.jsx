import React from "react";
import DynamicTable from "../components/DynamicTable";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      <DynamicTable />
    </div>
  );
}
