import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../Navigation/NavigationBar";
import Sidebar from "../Sidebar"; 

export default function MyTasksPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#002B5C]">
        <NavigationBar />
      </div>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          {/* Main content for My Tasks */}
          <div className="mb-8">
            <h1 className="text-2xl font-medium">Hello, Kath 👋</h1>
          </div>
          {/* Other content */}
        </main>
      </div>
    </div>
  );
}
