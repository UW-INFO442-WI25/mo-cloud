"use client"

import { useState } from "react"

export default function Filter({ onApply }) {
  const [openFilter, setOpenFilter] = useState(null)
  const [filterState, setFilterState] = useState({
    time: [],
    visibility: 5,
    category: [], // each item: { category: "Cook", tasks: [...] }
    frequency: [],
  })

  // ----- TIME, VISIBILITY, FREQUENCY OPTIONS -----
  const timeOptions = [
    "Less than 10 minutes",
    "10 - 30 minutes",
    "30 minutes - 1 hour",
    "1 - 2 hours",
    "More than 2 hours",
  ]

  const frequencyOptions = ["Daily", "Weekly", "Monthly"]

  // ----- CATEGORY OPTIONS -----
  // Each category has a name and an array of sub-tasks
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
      tasks: [
        "Childcare & Parenting",
        "Elderly & Family Care",
        "Pet Care",
      ],
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

  // ------------------------------------------------
  // HELPERS for Category Checking/Unchecking Logic
  // ------------------------------------------------

  // Get the selected category object from filterState (or undefined if not present)
  const getSelectedCategory = (catName) => {
    return filterState.category.find((item) => item.category === catName)
  }

  // Check if a sub-task is currently selected for a given category
  const isSubTaskSelected = (catName, subTask) => {
    const catObj = getSelectedCategory(catName)
    if (!catObj) return false
    return catObj.tasks.includes(subTask)
  }

  // Check if *all* sub-tasks in a category are selected
  const areAllSubTasksSelected = (catName) => {
    const catDef = categoryOptions.find((c) => c.name === catName)
    const catState = getSelectedCategory(catName)
    if (!catDef || !catState) return false
    // If the number of selected tasks equals the total tasks in that category
    return catDef.tasks.length === catState.tasks.length
  }

  // ------------------------------------------------
  // MAIN CHECKBOX CHANGE HANDLER
  // (For Time, Frequency, Visibility, Category, etc.)
  // ------------------------------------------------
  const handleCheckboxChange = (filterType, value, subValue = null) => {
    // Handle TIME or FREQUENCY (simple arrays of strings)
    if (filterType === "time" || filterType === "frequency") {
      setFilterState((prev) => {
        const currentList = prev[filterType]
        const alreadySelected = currentList.includes(value)
        const newList = alreadySelected
          ? currentList.filter((x) => x !== value)
          : [...currentList, value]
        return { ...prev, [filterType]: newList }
      })
      return
    }

    // Handle CATEGORY with sub-items
    if (filterType === "category") {
      setFilterState((prev) => {
        const currentCategories = prev.category
        let newCategories

        // If subValue is null, user toggled the main category
        if (!subValue) {
          // Find the category definition (list of all sub-tasks)
          const catDef = categoryOptions.find((c) => c.name === value)
          if (!catDef) return prev

          // Check if we already have it fully selected
          const existing = currentCategories.find((c) => c.category === value)
          const isFullySelected =
            existing && existing.tasks.length === catDef.tasks.length

          // If it's fully selected, uncheck everything
          if (isFullySelected) {
            newCategories = currentCategories.filter((c) => c.category !== value)
          } else {
            // Otherwise, select ALL sub-tasks for this category
            // (remove old partial category, then add full set)
            const filteredOut = currentCategories.filter((c) => c.category !== value)
            newCategories = [
              ...filteredOut,
              { category: value, tasks: [...catDef.tasks] },
            ]
          }
        }
        // If subValue is not null, user toggled a single sub-task
        else {
          const existing = currentCategories.find((c) => c.category === value)
          if (!existing) {
            // If we have no category yet, create it with just this sub-task
            newCategories = [
              ...currentCategories,
              { category: value, tasks: [subValue] },
            ]
          } else {
            // Add or remove this sub-task from existing.tasks
            const alreadySelected = existing.tasks.includes(subValue)
            let updatedTasks
            if (alreadySelected) {
              // remove it
              updatedTasks = existing.tasks.filter((t) => t !== subValue)
            } else {
              // add it
              updatedTasks = [...existing.tasks, subValue]
            }

            // If no sub-tasks remain, remove the entire category
            if (updatedTasks.length === 0) {
              newCategories = currentCategories.filter((c) => c.category !== value)
            } else {
              // Otherwise, update with the new sub-tasks
              const others = currentCategories.filter((c) => c.category !== value)
              newCategories = [
                ...others,
                { category: value, tasks: updatedTasks },
              ]
            }
          }
        }

        return { ...prev, category: newCategories }
      })
      return
    }
  }

  // ------------------------------------------------
  // VISIBILITY (Slider)
  // ------------------------------------------------
  const handleVisibilityChange = (event) => {
    const newValue = Number.parseInt(event.target.value, 10)
    setFilterState((prev) => ({
      ...prev,
      visibility: newValue,
    }))
  }

  // ------------------------------------------------
  // APPLY FILTERS (calls the parent onApply)
  // ------------------------------------------------
  const handleApplyFilter = () => {
    onApply(filterState)
    setOpenFilter(null) // optional: close all dropdowns
  }

  // Toggles the dropdown open/closed
  const handleFilterClick = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName)
  }

  // ------------------------------------------------
  // RENDER
  // ------------------------------------------------
  return (
    <div className="w-64 space-y-4">
      {/* Filter by Time */}
      <div className="relative">
        <button
          onClick={() => handleFilterClick("time")}
          className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
            openFilter === "time"
              ? "bg-[#FFD54F] text-black"
              : "bg-[#64B5F6] text-white hover:bg-[#64B5F6]/90"
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
              <button onClick={handleApplyFilter} className="text-[#FFD54F] font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Filter by Visibility (slider) */}
      <div className="relative">
        <button
          onClick={() => handleFilterClick("visibility")}
          className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
            openFilter === "visibility"
              ? "bg-[#FFD54F] text-black"
              : "bg-[#64B5F6] text-white hover:bg-[#64B5F6]/90"
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
              <button onClick={handleApplyFilter} className="text-[#FFD54F] font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Filter by Category (with sub-items) */}
      <div className="relative">
        <button
          onClick={() => handleFilterClick("category")}
          className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
            openFilter === "category"
              ? "bg-[#FFD54F] text-black"
              : "bg-[#64B5F6] text-white hover:bg-[#64B5F6]/90"
          }`}
        >
          Filter by Category {openFilter === "category" ? "^" : "▼"}
        </button>
        {openFilter === "category" && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl p-4 shadow-lg z-10">
            {categoryOptions.map((category) => (
              <div key={category.name} className="mb-4">
                {/* MAIN CATEGORY CHECKBOX */}
                <label className="flex items-center space-x-3 py-2 font-semibold">
                  <input
                    type="checkbox"
                    // "checked" if all sub-tasks are selected
                    checked={areAllSubTasksSelected(category.name)}
                    onChange={() => handleCheckboxChange("category", category.name)}
                    className="w-5 h-5 rounded border-gray-300 text-[#64B5F6] focus:ring-[#64B5F6]"
                  />
                  <span className="text-gray-700">{category.name}</span>
                </label>
                {/* SUB-TASK CHECKBOXES */}
                <div className="ml-6 space-y-2">
                  {category.tasks.map((task) => (
                    <label key={task} className="flex items-center space-x-3 py-1">
                      <input
                        type="checkbox"
                        checked={isSubTaskSelected(category.name, task)}
                        onChange={() =>
                          handleCheckboxChange("category", category.name, task)
                        }
                        className="w-4 h-4 rounded border-gray-300 text-[#64B5F6] focus:ring-[#64B5F6]"
                      />
                      <span className="text-gray-600 text-sm">{task}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-right mt-2">
              <button onClick={handleApplyFilter} className="text-[#FFD54F] font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Filter by Frequency */}
      <div className="relative">
        <button
          onClick={() => handleFilterClick("frequency")}
          className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
            openFilter === "frequency"
              ? "bg-[#FFD54F] text-black"
              : "bg-[#64B5F6] text-white hover:bg-[#64B5F6]/90"
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
              <button onClick={handleApplyFilter} className="text-[#FFD54F] font-medium">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Big "Apply Filter" Button (applies all) */}
      <button
        onClick={handleApplyFilter}
        className="w-full border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
      >
        Apply Filter
      </button>
    </div>
  )
}
