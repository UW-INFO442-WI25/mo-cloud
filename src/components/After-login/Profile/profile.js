"use client"
import { useNavigate } from "react-router-dom"
import pic from "../../../assets/pic.jpeg"
import NavigationBar from "../../Navigation/NavigationBar"

export default function Profile() {
  const navigate = useNavigate()
  
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
            <a href="/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50">
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
              className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-[#FFF8E7]"
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
          </nav>
          
          {/* Log Out Button */}
          <button
            onClick={() => navigate("/sign-in")}
            className="absolute bottom-8 left-6 flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl"
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
          
          </main>
      </div>
    </div>
  )
}
