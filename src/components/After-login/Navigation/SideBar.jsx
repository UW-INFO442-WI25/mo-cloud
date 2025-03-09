import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import pic from "../../../assets/pic.jpeg";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../../firebase";

export default function Sidebar() {
  const [userData, setUserData] = useState(null);
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) return;
      
      const userId = auth.currentUser.uid;
      
      // Fetch user profile data
      const userRef = ref(db, `users/${userId}/profile`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setUserData(data);
        }
      });
    };
    
    fetchUserData();
  }, [auth.currentUser, db]);

  // Define navigation items with their icons
  const navItems = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      )
    },
    {
      to: "/my-tasks",
      label: "My Tasks",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      )
    },
    {
      to: "/profile",
      label: "Profile",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      )
    }
  ];

  return (
    <div className="w-64 bg-white h-screen flex flex-col border-r">
      {/* User Profile Section */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <img 
            src={pic} 
            alt="Profile" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3">
            <h3 className="font-medium text-lg">
              {auth.currentUser?.displayName || userData?.name || 'Kath'}
            </h3>
            <p className="text-gray-500 text-sm">
              {auth.currentUser?.email || userData?.email || 'xiaoqz6@uw.edu'}
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <NavItem 
              key={index}
              to={item.to}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}