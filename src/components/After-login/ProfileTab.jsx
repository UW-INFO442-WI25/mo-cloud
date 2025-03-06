import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ProfileTab() {
  const location = useLocation();
  const isActive = location.pathname === "/profile";

  return (
    <Link
      to="/profile"
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl ${
        isActive ? "bg-[#FFF8E7]" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <span>Profile</span>
    </Link>
  );
}
