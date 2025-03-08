import React from "react";
import NavigationBar from "../../Navigation/NavigationBar";
import Sidebar from "../Navigation/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#002B5C]">
        <NavigationBar />
      </div>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}