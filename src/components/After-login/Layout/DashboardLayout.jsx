import React, { useState } from "react";
import NavigationBar from "../../Navigation/NavigationBar";
import Sidebar from "../Navigation/Sidebar";
import { FiMenu } from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-[#002B5C]">
          <NavigationBar />
        </div>

        <header className="bg-[#002B5C] text-white p-4 flex items-center justify-between lg:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FiMenu className="text-2xl" />
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
