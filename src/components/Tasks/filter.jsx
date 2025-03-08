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
    {
      name: "Cook",
      tasks: [
        "Meal Preparation & Cooking",
        "Grocery Shopping & Inventory Management",
        "Kitchen Maintenance & Cleanup",
      ],
    },
    {
      name: "Clean",
      tasks: [
        "Surface & Floor Cleaning",
        "Laundry & Fabric Care",
        "Deep Cleaning & Organization",
      ],
    },
    {
      name: "Care",
      tasks: ["Childcare & Parenting", "Elderly & Family Care", "Pet Care"],
    },
    {
      name: "Emotion",
      tasks: [
        "Family Relationship & Emotional Support",
        "Social & Community Engagement",
        "Household Mood & Stress Management",
      ],
    },
    {
      name: "Repair",
      tasks: [
        "Household Repairs & Fixes",
        "Seasonal & Preventative Maintenance",
        "Vehicle & Equipment Maintenance",
      ],
    },
  ]

  // Toggle open/close a dropdown
  const handleToggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName)
    if (openFilter !== filterName) {
      setTempFilterState(filters)
    }
  }

  // Visibility slider
  const handleVisibilityChange = (e) => {
    const value = parseInt(e.target.value, 10)
    setTempFilterState((prev) => ({ ...prev, visibility: value }))
  }

  const handleApplyFilter = () => {
    setFilters(tempFilterState)
    setOpenFilter(null)
  }

  const handleResetVisibility = () => {
    setTempFilterState((prev) => ({ ...prev, visibility: null }))
  }

  return (
    <div className="w-64 space-y-4">
      <h2 className="text-xl font-medium text-gray-900">Filters</h2>
      
      {/* Visibility Filter */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => handleToggleFilter("visibility")}
          className="flex items-center justify-between w-full px-4 py-3 bg-white"
        >
          <span className="font-medium text-gray-900">Visibility</span>
          <svg
            className={`w-5 h-5 transition-transform ${openFilter === "visibility" ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {openFilter === "visibility" && (
          <div className="p-4 bg-gray-50">
            <div className="space-y-4">
              <input
                type="range"
                min="1"
                max="10"
                value={tempFilterState.visibility || 5}
                onChange={handleVisibilityChange}
                className="w-full"
              />
              <div className="text-center text-gray-700">
                {tempFilterState.visibility !== null ? tempFilterState.visibility : "All"}
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
                className="text-[#FFD54F] font-medium"
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
