import React from "react";
import DashboardTab from "./dashboardtab";
import MyTasksTab from "./MyTasksTab";
import ProfileTab from "./profiletab";
import LogoutButton from "./LogoutButton";
import pic from "../../assets/pic.jpeg"; 

export default function Sidebar() {
  return (
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
        <DashboardTab />
        <MyTasksTab />
        <ProfileTab />
        <LogoutButton />
      </nav>
    </aside>
  );
}
