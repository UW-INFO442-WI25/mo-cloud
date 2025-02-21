"use client"

import { useState } from "react"

export default function Filter() {
  const [openFilter, setOpenFilter] = useState([])
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

  const categoryOptions = [
    {
      name: "Cook",
      tasks: ["Meal Preparation & Cooking", "Grocery Shopping & Inventory Management", "Kitchen Maintenance & Cleanup"],
    },
    {
      name: "Clean",
      tasks: ["Surface & Floor Cleaning", "Laundry & Fabric Care", "Deep Cleaning & Organization"],
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
      tasks: ["Household Repairs & Fixes", "Seasonal & Preventative Maintenance", "Vehicle & Equipment Maintenance"],
    },
  ]
  const frequencyOptions = ["Daily", "Weekly", "Monthly"]

  const handleFilterClick = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName)
  }

  const handleCheckboxChange = (filterType, value, task = null) => {
    setFilterState((prev) => {
      const currentValues = prev[filterType]
      let newValues

      if (task) {
        // If a task is provided, toggle it within the category
        const categoryIndex = currentValues.findIndex((item) => item.category === value)
        if (categoryIndex > -1) {
          const category = currentValues[categoryIndex]
          const taskIndex = category.tasks.indexOf(task)
          const newTasks = taskIndex > -1 ? category.tasks.filter((t) => t !== task) : [...category.tasks, task]

          newValues = [
            ...currentValues.slice(0, categoryIndex),
            { ...category, tasks: newTasks },
            ...currentValues.slice(categoryIndex + 1),
          ]

          // Remove the category if no tasks are selected
          if (newTasks.length === 0) {
            newValues = newValues.filter((item) => item.category !== value)
          }
        } else {
          newValues = [...currentValues, { category: value, tasks: [task] }]
        }
      } else {
        // Toggle the entire category
        newValues = currentValues.some((item) => item.category === value)
          ? currentValues.filter((item) => item.category !== value)
          : [...currentValues, { category: value, tasks: [] }]
      }

      return { ...prev, [filterType]: newValues }
    })
  }

  const handleVisibilityChange = (event) => {
    setFilterState((prev) => ({ ...prev, visibility: Number.parseInt(event.target.value) }))
  }

  const handleApplyFilter = () => {
    console.log("Applied filters:", filterState)
    // Add your filter logic here
    // You can use the filterState.category array to get the selected categories and tasks
    // Each item in the array will have a 'category' property and a 'tasks' array
    // Example:
    // filterState.category.forEach(item => {
    //   console.log(`Category: ${item.category}`)
    //   console.log(`Selected tasks: ${item.tasks.join(', ')}`)
    // })
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
            {categoryOptions.map((category) => (
              <div key={category.name} className="mb-4">
                <label className="flex items-center space-x-3 py-2 font-semibold">
                  <input
                    type="checkbox"
                    checked={filterState.category.some((item) => item.category === category.name)}
                    onChange={() => handleCheckboxChange("category", category.name)}
                    className="w-5 h-5 rounded border-gray-300 text-[#64B5F6] focus:ring-[#64B5F6]"
                  />
                  <span className="text-gray-700">{category.name}</span>
                </label>
                <div className="ml-6 space-y-2">
                  {category.tasks.map((task) => (
                    <label key={task} className="flex items-center space-x-3 py-1">
                      <input
                        type="checkbox"
                        checked={filterState.category.some(
                          (item) => item.category === category.name && item.tasks.includes(task),
                        )}
                        onChange={() => handleCheckboxChange("category", category.name, task)}
                        className="w-4 h-4 rounded border-gray-300 text-[#64B5F6] focus:ring-[#64B5F6]"
                      />
                      <span className="text-gray-600 text-sm">{task}</span>
                    </label>
                  ))}
                </div>
              </div>
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


