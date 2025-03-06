import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function MyTasksTab() {
  const location = useLocation();
  const isActive = location.pathname === "/my-tasks";

  return (
    <Link
      to="/my-tasks"
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl ${
        isActive ? "bg-[#FFF8E7]" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      <span>My Tasks</span>
    </Link>
  );
}
