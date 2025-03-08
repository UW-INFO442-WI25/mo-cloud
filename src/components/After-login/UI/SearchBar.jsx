import React from "react";

export default function SearchBar({ value, onChange, placeholder = "Search Some Tasks......" }) {
  return (
    <div className="flex-1 relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-900"
        value={value}
        onChange={onChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}