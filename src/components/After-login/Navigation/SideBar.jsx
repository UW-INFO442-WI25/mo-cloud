import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import pic from "../../../assets/pic.jpeg";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../../firebase";
import { FiMenu, FiX } from "react-icons/fi";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [userData, setUserData] = useState(null);
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  useEffect(() => {
    if (!auth.currentUser) return;
    const userId = auth.currentUser.uid;
    const userRef = ref(db, `users/${userId}/profile`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData(data);
      }
    });
  }, [auth.currentUser, db]);

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: <FiMenu className="w-5 h-5" /> },
    { to: "/my-tasks", label: "My Tasks", icon: <FiMenu className="w-5 h-5" /> },
    { to: "/profile", label: "Profile", icon: <FiMenu className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* phone mode-hide sidebar */}
      <button 
        onClick={toggleSidebar} 
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#002B5C] text-white p-2 rounded-md"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* sidebar */}
      <div
        className={`fixed lg:relative inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <FiX className="text-2xl" />
          </button>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center">
            <img src={pic} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
            <div className="ml-3">
              <h3 className="font-medium text-lg">
                {auth.currentUser?.displayName || userData?.name || "User"}
              </h3>
              <p className="text-gray-500 text-sm">
                {auth.currentUser?.email || userData?.email || "email@example.com"}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <NavItem key={index} to={item.to} label={item.label} icon={item.icon} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}