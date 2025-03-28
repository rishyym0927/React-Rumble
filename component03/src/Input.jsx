import React from "react";
export function Input({ value, onChange, placeholder, className = "" }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border p-2 rounded w-full ${className}`}
      />
    );
  }
  
  