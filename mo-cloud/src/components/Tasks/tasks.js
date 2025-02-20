"use client"

import { useState } from "react"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import p4 from "../../assets/p4.png"
import p5 from "../../assets/p5.png"
import p6 from "../../assets/p6.png"
import Filter from "./filter.jsx"

const Tasks = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const tasks = [
    {
      title: "Meal Preparation & Cooking",
      time: "30 min",
      image: p2,
      bgColor: "bg-[#FFF8E7]",
    },
    {
      title: "Grocery Management",
      time: "1 h 30 min",
      image: p3,
      bgColor: "bg-[#FFF8E7]",
    },
    {
      title: "Post-Meal Cleanup",
      time: "45 min",
      image: p4,
      bgColor: "bg-[#FFF8E7]",
    },
    {
      title: "Surface & Floor Cleaning",
      time: "1 h",
      image: p5,
      bgColor: "bg-[#FFE8E8]",
    },
    {
      title: "Laundry & Fabric Care",
      time: "2 h 45 min",
      image: p6,
      bgColor: "bg-[#FFE8E8]",
    },
    {
      title: "Deep Cleaning & Organization",
      time: "2 h",
      image: p2,
      bgColor: "bg-[#FFE8E8]",
    },
  ]

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
            <button className="bg-[#FFD54F] text-black px-6 py-2 rounded-full hover:bg-[#FFD54F]/90">Login /Register</button>
            <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-full hover:bg-[#64B5F6]/90">
              One Time User →
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <Filter />

          {/* Tasks Grid */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Some Tasks......"
                  className="w-full px-4 py-2 rounded-full bg-white text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              <button className="bg-[#64B5F6] text-white px-8 py-2 rounded-full hover:bg-[#64B5F6]/90">Search</button>
            </div>

            {/* Tasks Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className={`${task.bgColor} rounded-[40px] overflow-hidden cursor-pointer transition-transform hover:scale-105`}
                >
                  {/* Image Container */}
                  <div className="p-12 flex items-center justify-center">
                    <div className="relative w-full aspect-square">
                      <div className="absolute inset-0 rounded-full bg-pink-100/50" />
                      <img
                        src={task.image || "/placeholder.svg"}
                        alt={task.title}
                        className="relative z-10 w-full h-full object-contain p-4"
                      />
                    </div>
                  </div>
                  {/* Text Container */}
                  <div className="bg-[#002B5C] p-8">
                    <div className="text-sm text-gray-400/80 mb-3">Whole time: {task.time}</div>
                    <h3 className="text-3xl text-white font-semibold leading-tight">{task.title}</h3>
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

