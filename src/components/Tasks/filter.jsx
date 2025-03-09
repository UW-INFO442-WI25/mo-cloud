"use client"
import { useState, useContext } from "react"
import { FilterContext } from "./FilterContext"

export default function Filter() {
  const { filters, setFilters } = useContext(FilterContext)
  const [tempFilterState, setTempFilterState] = useState(filters)
  const [openFilter, setOpenFilter] = useState(null)

  // Options
  const frequencyOptions = [
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "As Needed", value: "As Needed" },
  ]
  
  const categoryOptions = [
    { label: "Cook", value: "Cook" },
    { label: "Clean", value: "Clean" },
    { label: "Care", value: "Care" },
    { label: "Emotion", value: "Emotion" },
    { label: "Repair", value: "Repair" },
  ]

  // Toggle open/close a dropdown
  const handleToggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName)
    if (openFilter !== filterName) {
      setTempFilterState({...filters})
    }
  }

  // The main checkbox change logic
  const handleCheckboxChange = (filterType, value) => {
    if (filterType === "frequency") {
      setTempFilterState((prev) => {
        const currentList = prev[filterType] || []
        const alreadySelected = currentList.includes(value)
        const newList = alreadySelected
          ? currentList.filter((x) => x !== value)
          : [...currentList, value]
        return { ...prev, [filterType]: newList }
      })
    } else if (filterType === "category") {
      setTempFilterState((prev) => {
        const currentList = prev[filterType] || []
        const alreadySelected = currentList.includes(value)
        const newList = alreadySelected
          ? currentList.filter((x) => x !== value)
          : [...currentList, value]
        return { ...prev, [filterType]: newList }
      })
    }
  }

  // Visibility slider
  const handleVisibilityChange = (e) => {
    const value = parseInt(e.target.value, 10)
    setTempFilterState((prev) => ({ ...prev, visibility: value }))
  }

  const handleApplyFilter = () => {
    setFilters({...tempFilterState})
    setOpenFilter(null)
  }
  
  const handleResetVisibility = () => {
    setTempFilterState((prev) => ({ ...prev, visibility: null }))
  }

  return (
    <div className="w-64 space-y-4">
      <h2 className="text-xl font-semibold text-[#1E88E5] mb-4">Filters</h2>

      {/* Frequency Filter */}
      <div className="rounded-xl overflow-hidden">
        <button
          onClick={() => handleToggleFilter("frequency")}
          className={`flex items-center justify-between w-full px-4 py-3 ${
            openFilter === "frequency" ? "bg-[#FFD54F] text-black" : "bg-[#1E88E5] text-white"
          } rounded-xl`}
        >
          <span className="font-medium">Frequency</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              openFilter === "frequency" ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        
        {openFilter === "frequency" && (
          <div className="p-4 bg-gray-50 mt-2 rounded-xl">
            <div className="space-y-2">
              {frequencyOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={tempFilterState.frequency?.includes(option.value)}
                    onChange={() => handleCheckboxChange("frequency", option.value)}
                    className="w-4 h-4 text-[#1E88E5] rounded focus:ring-[#1E88E5]"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            
            <div className="text-right mt-2">
              <button
                onClick={handleApplyFilter}
                className="text-[#1E88E5] font-medium hover:text-[#1565C0]"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Visibility Filter */}
      <div className="rounded-xl overflow-hidden">
        <button
          onClick={() => handleToggleFilter("visibility")}
          className={`flex items-center justify-between w-full px-4 py-3 ${
            openFilter === "visibility" ? "bg-[#FFD54F] text-black" : "bg-[#1E88E5] text-white"
          } rounded-xl`}
        >
          <span className="font-medium">Visibility</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              openFilter === "visibility" ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        
        {openFilter === "visibility" && (
          <div className="p-4 bg-gray-50 mt-2 rounded-xl">
            <div className="space-y-4">
              <input
                type="range"
                min="1"
                max="10"
                value={tempFilterState.visibility || 5}
                onChange={handleVisibilityChange}
                className="w-full accent-[#1E88E5]"
              />
              <div className="text-center text-gray-700">
                {tempFilterState.visibility !== null
                  ? tempFilterState.visibility
                  : "All"}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <button
                onClick={handleResetVisibility}
                className="text-gray-500 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleApplyFilter}
                className="text-[#1E88E5] font-medium hover:text-[#1565C0]"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Category Filter */}
      <div className="rounded-xl overflow-hidden">
        <button
          onClick={() => handleToggleFilter("category")}
          className={`flex items-center justify-between w-full px-4 py-3 ${
            openFilter === "category" ? "bg-[#FFD54F] text-black" : "bg-[#1E88E5] text-white"
          } rounded-xl`}
        >
          <span className="font-medium">Category</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              openFilter === "category" ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        
        {openFilter === "category" && (
          <div className="p-4 bg-gray-50 mt-2 rounded-xl">
            <div className="space-y-2">
              {categoryOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={tempFilterState.category?.includes(option.value)}
                    onChange={() => handleCheckboxChange("category", option.value)}
                    className="w-4 h-4 text-[#1E88E5] rounded focus:ring-[#1E88E5]"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            
            <div className="text-right mt-2">
              <button
                onClick={handleApplyFilter}
                className="text-[#1E88E5] font-medium hover:text-[#1565C0]"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}