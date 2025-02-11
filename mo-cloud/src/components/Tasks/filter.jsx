"use client"

import { useState } from "react"

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(null)
  const [filterState, setFilterState] = useState({
    time: [],
    visibility: 5,
    category: [],
    frequency: [],
  })

  const timeOptions = [
    "Less than 10 minutes",
    "10 - 30 minutes",
    "30 minutes - 1 hour",
    "1 - 2 hours",
    "More than 2 hours",
  ]

  const categoryOptions = ["Cook", "Clean", "Care", "Emotion", "Repair"]
  const frequencyOptions = ["Daily", "Weekly", "Monthly"]

  const handleFilterClick = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName)
  }

  const handleCheckboxChange = (filterType, value) => {
    setFilterState((prev) => {
      const currentValues = prev[filterType]
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value]
      return { ...prev, [filterType]: newValues }
    })
  }

  const handleVisibilityChange = (event) => {
    setFilterState((prev) => ({ ...prev, visibility: Number.parseInt(event.target.value) }))
  }

  const handleApplyFilter = () => {
    console.log("Applied filters:", filterState)
    // Add your filter logic here
  }

  return (
    <div className="w-64 space-y-4">
      {/* Time Filter */}
      <div className="relative">
        <button
          onClick={() => handleFilterClick("time")}
          className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
            openFilter === "time" ? "bg-[#FFD54F] text-black" : "bg-[#64B5F6] text-white hover:bg-[#64B5F6]/90"
          }`}
        >
          Filter by Time {openFilter === "time" ? "^" : "▼"}
        </button>
        {openFilter === "time" && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl p-4 shadow-lg z-10">
            {timeOptions.map((option) => (
              <label key={option} className="flex items-center space-x-3 py-2">
                <input
                  type="checkbox"
                  checked={filterState.time.includes(option)}
                  onChange={() => handleCheckboxChange("time", option)}
                  className="w-5 h-5 rounded border-gray-300 text-[#64B5F6] focus:ring-[#64B5F6]"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
            <div className="text-right mt-2">
              <button onClick={() => setOpenFilter(null)} className="text-[#FFD54F] font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Visibility Filter */}
      <div className="relative">
        <button
          onClick={() => handleFilterClick("visibility")}
          className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
            openFilter === "visibility" ? "bg-[#FFD54F] text-black" : "bg-[#64B5F6] text-white hover:bg-[#64B5F6]/90"
          }`}
        >
          Filter by Visibility {openFilter === "visibility" ? "^" : "▼"}
        </button>
        {openFilter === "visibility" && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl p-4 shadow-lg z-10">
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>0 (Visible)</span>
                <span>10 (Invisible)</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={filterState.visibility}
                onChange={handleVisibilityChange}
                className="w-full"
              />
              <div className="text-center text-gray-700">{filterState.visibility}</div>
            </div>
            <div className="text-right mt-2">
              <button onClick={() => setOpenFilter(null)} className="text-[#FFD54F] font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="relative">
        <button
          onClick={() => handleFilterClick("category")}
          className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
            openFilter === "category" ? "bg-[#FFD54F] text-black" : "bg-[#64B5F6] text-white hover:bg-[#64B5F6]/90"
          }`}
        >
          Filter by Category {openFilter === "category" ? "^" : "▼"}
        </button>
        {openFilter === "category" && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl p-4 shadow-lg z-10">
            {categoryOptions.map((option) => (
              <label key={option} className="flex items-center space-x-3 py-2">
                <input
                  type="checkbox"
                  checked={filterState.category.includes(option)}
                  onChange={() => handleCheckboxChange("category", option)}
                  className="w-5 h-5 rounded border-gray-300 text-[#64B5F6] focus:ring-[#64B5F6]"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
            <div className="text-right mt-2">
              <button onClick={() => setOpenFilter(null)} className="text-[#FFD54F] font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Frequency Filter */}
      <div className="relative">
        <button
          onClick={() => handleFilterClick("frequency")}
          className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
            openFilter === "frequency" ? "bg-[#FFD54F] text-black" : "bg-[#64B5F6] text-white hover:bg-[#64B5F6]/90"
          }`}
        >
          Filter by Frequency {openFilter === "frequency" ? "^" : "▼"}
        </button>
        {openFilter === "frequency" && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl p-4 shadow-lg z-10">
            {frequencyOptions.map((option) => (
              <label key={option} className="flex items-center space-x-3 py-2">
                <input
                  type="checkbox"
                  checked={filterState.frequency.includes(option)}
                  onChange={() => handleCheckboxChange("frequency", option)}
                  className="w-5 h-5 rounded border-gray-300 text-[#64B5F6] focus:ring-[#64B5F6]"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
            <div className="text-right mt-2">
              <button onClick={() => setOpenFilter(null)} className="text-[#FFD54F] font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Apply All Filters Button */}
      <button
        onClick={handleApplyFilter}
        className="w-full border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
      >
        Apply Filter
      </button>
    </div>
  )
}

