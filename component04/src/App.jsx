import React from "react";
import FAQAccordion from "./FAQAccordion.jsx"; // Import the Accordion component

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">FAQ Section</h1>
        <FAQAccordion />
      </div>
    </div>
  );
}

export default App;
