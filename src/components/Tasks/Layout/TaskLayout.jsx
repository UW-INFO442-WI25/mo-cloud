import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../Navigation/NavigationBar";
import Filter from "../filter";

export default function TaskLayout({ 
  children, 
  title,
  searchQuery, 
  setSearchQuery,
  showBackButton = true
}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />

      {/* Main Content */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64">
            <Filter />
          </div>

          {/* Tasks Content */}
          <div className="flex-1 order-1 lg:order-2">
            {/* Back and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {showBackButton && (
                <button
                  onClick={() => navigate("/tasks")}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Some Tasks......"
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
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
              <button className="w-full sm:w-auto bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90">
                Search
              </button>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-3xl p-8">
              {title && <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}