"use client"

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Filter from "./filter"
import { FilterContext } from "./FilterContext"

function KitchenMaintenance() {
  const navigate = useNavigate()
  const { filters } = useContext(FilterContext)
  const [searchQuery, setSearchQuery] = useState("")

  const subTasks = [
    {
      id: 1,
      name: "Cleaning countertops, stove, and sink",
      timeRange: "10-20",
      completed: false,
      frequency: "Daily",
      visibility: 6
    },
    {
      id: 2,
      name: "Packing and storing leftovers",
      timeRange: "5-15",
      completed: false,
      frequency: "Daily",
      visibility: 4
    },
    {
      id: 3,
      name: "Taking out the trash",
      timeRange: "5",
      completed: false,
      frequency: "Daily",
      visibility: 9
    },
    {
      id: 4,
      name: "Checking food expiration dates and organizing fridge",
      timeRange: "10-15",
      completed: false,
      frequency: "Weekly",
      visibility: 2
    },
  ]

  // Filter logic: search, visibility exact match, frequency
  const filteredSubTasks = subTasks.filter((task) => {
    // 1) Search
    if (searchQuery && !task.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    // 2) Visibility exact match
    if (typeof filters.visibility === "number" && task.visibility !== filters.visibility) {
      return false
    }
    // 3) Frequency
    if (filters.frequency.length > 0 && !filters.frequency.includes(task.frequency)) {
      return false
    }
    return true
  })

  return (
    <div className="min-h-screen bg-[#002B5C]">
      {/* Navigation */}
      <nav className="py-8">
        <div className="container mx-auto px-8 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white">
            Mo<span className="text-[#64B5F6]">Cloud</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#64B5F6]">Home</a>
            <a href="/tasks" className="text-[#64B5F6]">Tasks</a>
            <a href="/self-assessment" className="text-white hover:text-[#64B5F6]">Self Assessment</a>
            <a href="/resources" className="text-white hover:text-[#64B5F6]">Resources</a>
            <a href="/about" className="text-white hover:text-[#64B5F6]">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-[#FFD54F] text-black px-6 py-2 rounded-full hover:bg-[#FFD54F]/90">Log in</button>
            <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-full hover:bg-[#64B5F6]/90">Register</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64">
            <Filter />
          </div>

          {/* Subtasks Content */}
          <div className="flex-1 order-1 lg:order-2">
            {/* Back and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => navigate("/tasks")}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="w-full sm:w-auto bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90">
                Search
              </button>
            </div>

            {/* Subtasks List */}
            <div className="bg-white rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kitchen Maintenance & Cleanup Tasks</h2>
              <div className="space-y-4">
                {filteredSubTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                      task.completed ? "bg-green-50" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          task.completed ? "border-green-500 bg-green-500" : "border-gray-300"
                        }`}
                      >
                        {task.completed && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-gray-900 text-lg">{task.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-900 font-medium">{task.timeRange}</span>
                      <span className="text-gray-500">min</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> {/* end subtasks content */}
        </div>
      </div>
    </div>
  )
}

export default KitchenMaintenance

