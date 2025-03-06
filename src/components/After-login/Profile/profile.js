"use client"
import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../Navigation/NavigationBar";
import Sidebar from "../Sidebar";

export default function Profile() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="bg-[#002B5C]">
        <NavigationBar />
      </div>
      <div className="flex">
        {/* Sidebar Component */}
        <Sidebar />
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
          {/* Add your profile-specific content below */}
        </main>
      </div>
    </div>
  );
}
