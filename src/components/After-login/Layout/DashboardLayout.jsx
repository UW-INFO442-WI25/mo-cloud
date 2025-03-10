import React, { useState } from "react";
import NavigationBar from "../../Navigation/NavigationBar";
import Sidebar from "../Navigation/Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="bg-[#002B5C] w-full">
        <NavigationBar />
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}