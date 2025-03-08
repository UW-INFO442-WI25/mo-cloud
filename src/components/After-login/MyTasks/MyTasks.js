import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";

export default function MyTasks() {
  return (
    <DashboardLayout>
      {/* Main content for My Tasks */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium">Hello, Kath 👋</h1>
      </div>
      {/* Add your My Tasks specific content here */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-medium mb-4">My Tasks</h2>
        <p>Your tasks will appear here.</p>
      </div>
    </DashboardLayout>
  );
}