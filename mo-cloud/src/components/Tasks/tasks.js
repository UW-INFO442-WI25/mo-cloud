"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import p1 from "../../assets/task1.png"
import p10 from "../../assets/task10.png"
import p12 from "../../assets/task12.png"
import p13 from "../../assets/task13.png"
import p14 from "../../assets/task14.png"
import p15 from "../../assets/task15.png"
import p16 from "../../assets/task16.png"
import p17 from "../../assets/task17.png"
import p18 from "../../assets/task18.png"
import p20 from "../../assets/task20.png"
import p22 from "../../assets/task22.png"
import p3 from "../../assets/task3.png"
import p4 from "../../assets/task4.png"
import p6 from "../../assets/task6.png"
import p9 from "../../assets/task9.png"
import Filter from "./filter.jsx"

const Tasks = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    time: [],
    visibility: 5,
    category: [],
    frequency: [],
  })
  const navigate = useNavigate()

  // Our tasks array, each with a `title` and `category`
  const tasks = [
    {
      title: "Meal Preparation & Cooking",
      time: "2 h 20 min",
      image: p9,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/meal-preparation",
      category: "Cook",
    },
    {
      title: "Grocery Shopping & Inventory Management",
      time: "2 h 15 min",
      image: p14,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/grocery-management",
      category: "Cook",
    },
    {
      title: "Kitchen Maintenance & Cleanup",
      time: "55 min",
      image: p16,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/kitchen-maintenance",
      category: "Cook",
    },
    {
      title: "Surface & Floor Cleaning",
      time: "1 h 5 min",
      image: p12,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/surface-floor-cleaning",
      category: "Clean",
    },
    {
      title: "Laundry & Fabric Care",
      time: "2 h 40 min",
      image: p13,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/laundry-fabric-care",
      category: "Clean",
    },
    {
      title: "Deep Cleaning & Organization",
      time: "2 h 50 min",
      image: p15,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/deep-cleaning-organization",
      category: "Clean",
    },
    {
      title: "Childcare & Parenting",
      time: "4 h",
      image: p1,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/childcare-parenting",
      category: "Care",
    },
    {
      title: "Elderly & Family Care",
      time: "3 h 30 min",
      image: p22,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/elderly-family-care",
      category: "Care",
    },
    {
      title: "Pet Care",
      time: "2 h",
      image: p6,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/pet-care",
      category: "Care",
    },
    {
      title: "Family Relationship & Emotional Support",
      time: "3 h",
      image: p17,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/family-relationship-emotional-support",
      category: "Emotion",
    },
    {
      title: "Social & Community Engagement",
      time: "3 h 45 min",
      image: p3,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/social-community-engagement",
      category: "Emotion",
    },
    {
      title: "Household Mood & Stress Management",
      time: "2 h",
      image: p20,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/household-mood-stress-management",
      category: "Emotion",
    },
    {
      title: "Household Repairs & Fixes",
      time: "3 h 30 min",
      image: p4,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/household-repairs-fixes",
      category: "Repair",
    },
    {
      title: "Seasonal & Preventative Maintenance",
      time: "3 h",
      image: p10,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/seasonal-preventative-maintenance",
      category: "Repair",
    },
    {
      title: "Vehicle & Equipment Maintenance",
      time: "2 h",
      image: p18,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/vehicle-equipment-maintenance",
      category: "Repair",
    },
  ]

  // ------------------------------------------------------
  // 1) A helper to check if a task matches the category filter
  // ------------------------------------------------------
  const matchesCategoryFilter = (task, categoryFilter) => {
    // If user hasn't selected any categories at all, pass
    if (categoryFilter.length === 0) {
      return true
    }

    // We do an "OR" check across each category object in filterState
    // If task matches at least one, it's included
    for (let catObj of categoryFilter) {
      // Must match the same top-level category first
      if (catObj.category !== task.category) {
        continue
      }

      // If catObj.tasks is empty, that means user selected the *entire* category
      // => match
      if (catObj.tasks.length === 0) {
        return true
      }

      // Otherwise, user selected specific sub-tasks
      // => only match if this task's `title` is in the array
      if (catObj.tasks.includes(task.title)) {
        return true
      }
    }
    // If no match was found, return false
    return false
  }

  // ------------------------------------------------------
  // 2) Do the final filtering of tasks
  // ------------------------------------------------------
  const filteredTasks = tasks.filter((task) => {
    // Search Query (by task.title)
    if (
      searchQuery &&
      !task.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Category Filter
    if (!matchesCategoryFilter(task, filters.category)) {
      return false
    }

    // Time Filter (if you want to implement it, you'd look at filters.time here)
    // Frequency Filter (similarly)
    // Visibility Filter (similarly)

    return true
  })

  // This is called by the Filter component whenever the user clicks "Apply"
  const handleApplyFilter = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen bg-[#002B5C]">
      {/* Navigation */}
      <nav className="py-8">
        <div className="container mx-auto px-8 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white">
            Mo<span className="text-[#64B5F6]">Cloud</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#64B5F6]">
              Home
            </a>
            <a href="/tasks" className="text-[#64B5F6]">
              Tasks
            </a>
            <a href="/self-assessment" className="text-white hover:text-[#64B5F6]">
              Self Assessment
            </a>
            <a href="/resources" className="text-white hover:text-[#64B5F6]">
              Resources
            </a>
            <a href="/about" className="text-white hover:text-[#64B5F6]">
              About
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-[#FFD54F] text-black px-6 py-2 rounded-full hover:bg-[#FFD54F]/90">
              Log in
            </button>
            <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-full hover:bg-[#64B5F6]/90">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64">
            <Filter onApply={handleApplyFilter} />
          </div>

          {/* Tasks Grid */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Some Tasks......"
                  className="w-full px-6 py-3 rounded-full bg-gray-100 text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
              <button className="w-full sm:w-auto bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90">
                Search
              </button>
            </div>

            {/* Filtered Task Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTasks.map((task, index) => (
                <div
                  key={index}
                  onClick={() => navigate(task.route)}
                  className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 transition-transform hover:scale-105 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className={`${task.bgColor} aspect-[4/3] relative overflow-hidden`}>
                    <img
                      src={task.image || "/placeholder.svg"}
                      alt={task.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Text Container */}
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">Whole time: {task.time}</div>
                    <h3 className="text-xl text-gray-900 font-semibold leading-tight">{task.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
