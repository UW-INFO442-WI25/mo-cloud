import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium">
          Hello,
          <br />
          Kath 👋
        </h1>
      </div>
      {/* Add your profile-specific content here */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-medium mb-4">My Profile</h2>
        <p>Your profile information will appear here.</p>
      </div>
    </DashboardLayout>
  );
}