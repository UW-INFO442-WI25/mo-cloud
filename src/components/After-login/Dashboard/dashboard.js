"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import p1 from "../../../assets/task1.png"
import p10 from "../../../assets/task10.png"
import p12 from "../../../assets/task12.png"
import p13 from "../../../assets/task13.png"
import p14 from "../../../assets/task14.png"
import p15 from "../../../assets/task15.png"
import p16 from "../../../assets/task16.png"
import p17 from "../../../assets/task17.png"
import p18 from "../../../assets/task18.png"
import p20 from "../../../assets/task20.png"
import p22 from "../../../assets/task22.png"
import p3 from "../../../assets/task3.png"
import p4 from "../../../assets/task4.png"
import p6 from "../../../assets/task6.png"
import p9 from "../../../assets/task9.png"
import NavigationBar from "../../Navigation/NavigationBar"

// Import filter icons
import careIcon from "../../../assets/Care.png"
import careBlueIcon from "../../../assets/Care_blue.png"
import cleanIcon from "../../../assets/Clean.png"
import cleanBlueIcon from "../../../assets/Clean_blue.png"
import cookIcon from "../../../assets/Cook.png"
import cookBlueIcon from "../../../assets/Cook_blue.png"
import emotionIcon from "../../../assets/Emotion.png"
import emotionBlueIcon from "../../../assets/Emotion_blue.png"
import repairIcon from "../../../assets/Repair.png"
import repairBlueIcon from "../../../assets/Repair_blue.png"
import pic from "../../../assets/pic.jpeg"

// Mock task data (replace with actual data fetching in a real application)
const mockTasks = [
    {
      title: "Meal Preparation & Cooking",
      time: "2 h 20 min",
      image: p9,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/meal-preparation",
      category: "Cook",
      frequency: "Daily"
    },
    {
      title: "Grocery Shopping & Inventory Management",
      time: "2 h 15 min",
      image: p14,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/grocery-management",
      category: "Cook",
      frequency: "Weekly"
    },
    {
      title: "Kitchen Maintenance & Cleanup",
      time: "55 min",
      image: p16,
      bgColor: "bg-[#FFF8E7]",
      route: "/tasks/kitchen-maintenance",
      category: "Cook",
      frequency: ["Daily", "Weekly"]
    },
    {
      title: "Surface & Floor Cleaning",
      time: "1 h 5 min",
      image: p12,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/surface-floor-cleaning",
      category: "Clean",
      frequency: "Weekly"
    },
    {
      title: "Laundry & Fabric Care",
      time: "2 h 40 min",
      image: p13,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/laundry-fabric-care",
      category: "Clean",
      frequency: "Weekly"
    },
    {
      title: "Deep Cleaning & Organization",
      time: "2 h 50 min",
      image: p15,
      bgColor: "bg-[#FFE4E6]",
      route: "/tasks/deep-cleaning-organization",
      category: "Clean",
      frequency: "Monthly"
    },
    {
      title: "Childcare & Parenting",
      time: "4 h",
      image: p1,
      bgColor: "bg-[#E5EAD7]",
      route: "/childcare-parenting",
      category: "Care",
      frequency: "Daily"
    },
    {
      title: "Elderly & Family Care",
      time: "3 h 30 min",
      image: p22,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/elderly-family-care",
      category: "Care",
      frequency: "Daily"
    },
    {
      title: "Pet Care",
      time: "2 h",
      image: p6,
      bgColor: "bg-[#E5EAD7]",
      route: "/tasks/pet-care",
      category: "Care",
      frequency: ["Daily", "Weekly"]
    },
    {
      title: "Family Relationship & Emotional Support",
      time: "3 h",
      image: p17,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/family-relationship-emotional-support",
      category: "Emotion",
      frequency: "As Needed"
    },
    {
      title: "Social & Community Engagement",
      time: "3 h 45 min",
      image: p3,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/social-community-engagement",
      category: "Emotion",
      frequency: "As Needed"
    },
    {
      title: "Household Mood & Stress Management",
      time: "2 h",
      image: p20,
      bgColor: "bg-[#FED7AA]",
      route: "/tasks/household-mood-stress-management",
      category: "Emotion",
      frequency: "Daily"
    },
    {
      title: "Household Repairs & Fixes",
      time: "3 h 30 min",
      image: p4,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/household-repairs-fixes",
      category: "Repair",
      frequency: "As Needed"
    },
    {
      title: "Seasonal & Preventative Maintenance",
      time: "3 h",
      image: p10,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/seasonal-preventative-maintenance",
      category: "Repair",
      frequency: "As Needed"
    },
    {
      title: "Vehicle & Equipment Maintenance",
      time: "2 h",
      image: p18,
      bgColor: "bg-[#DCD5FC]",
      route: "/tasks/vehicle-equipment-maintenance",
      category: "Repair",
      frequency: "As Needed"
    },    
]

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState("Cook")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTasks, setFilteredTasks] = useState([])
  const navigate = useNavigate()

  const filterIcons = [
    { name: "Cook", icon: cookIcon, activeIcon: cookBlueIcon },
    { name: "Clean", icon: cleanIcon, activeIcon: cleanBlueIcon },
    { name: "Care", icon: careIcon, activeIcon: careBlueIcon },
    { name: "Emotion", icon: emotionIcon, activeIcon: emotionBlueIcon },
    { name: "Repair", icon: repairIcon, activeIcon: repairBlueIcon },
  ]

  useEffect(() => {
    // Filter tasks based on active category and search query
    const filtered = mockTasks.filter(
      (task) => task.category === activeFilter && task.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredTasks(filtered)
  }, [activeFilter, searchQuery])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-[#002B5C]">
        <NavigationBar />
        </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-[calc(100vh-64px)] border-r border-gray-200 p-6">
          {/* User Profile */}
          <div className="flex items-center space-x-3 p-4 rounded-2xl border border-gray-100 mb-8 cursor-pointer">
            <img src={pic || "/placeholder.svg"} alt="Profile" className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-medium">Kath</h3>
              <p className="text-sm text-gray-500">xiaoqz6@uw.edu</p>
            </div>
            <button className="ml-auto">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <a href="/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-[#FFF8E7]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Dashboard</span>
            </a>
            <a
              href="/my-tasks"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span>My Tasks</span>
            </a>
            <a
              href="/profile"
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50"
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
            </a>
            <button
            onClick={() => navigate("/sign-in")}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50"
            >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Log Out</span>
          </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-medium">
              Hello,
              <br />
              Kath 👋
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex sm:flex-row gap-4 mb-8">
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
              <button className="w-full sm:w-auto bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90">
                Filter
              </button>
            </div>

          {/* Reference Lists Section */}
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Reference Lists 😊</h2>
            <div className="flex overflow-x-auto pb-2">
              {filterIcons.map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className="flex min-w-[100px] max-w-[150px]"
                >
                  <img
                    src={activeFilter === filter.name ? filter.activeIcon : filter.icon}
                    alt={filter.name}
                    className="h-full w-2/4"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Task Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTasks.map((task, index) => (
                <div
                  key={index}
                  onClick={() => navigate(task.route)}
                  className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 transition-transform hover:scale-105 cursor-pointer"
                >
                  <div className={`${task.bgColor} aspect-[4/3] relative overflow-hidden`}>
                    <img
                      src={task.image || "/placeholder.svg"}
                      alt={task.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">Whole time: {task.time}</div>
                    <h3 className="text-xl text-gray-900 font-semibold leading-tight">
                      {task.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
          </main>
      </div>
    </div>
  )
}
