import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import DashboardLayout from "../Layout/DashboardLayout";
import SearchBar from "../UI/SearchBar";
import TaskCard from "../UI/TaskCard";
import { mockTasks } from "../Mock/TaskData";
import { filterIcons } from "./FilterIcons";
import app from "../../../firebase";

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState("Cook");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      });
    };
    
    fetchUserData();
  }, [auth.currentUser, db]);

  useEffect(() => {
    // Filter tasks based on active category and search query
    const filtered = mockTasks.filter(
      (task) =>
        task.category === activeFilter &&
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [activeFilter, searchQuery]);

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium">
          Hello,
          <br />
          {auth.currentUser?.displayName || userData?.name || 'User'} 👋
        </h1>
      </div>
      
      {/* Search Bar */}
      <div className="flex sm:flex-row gap-4 mb-8">
        <SearchBar 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="w-full sm:w-auto bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90">
          Search
        </button>
        <button className="w-full sm:w-auto bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90">
          Filter
        </button>
      </div>
      
      {/* Reference Lists Section */}
      <div className="px-4 py-6 sm:px-0">
        <h2 className="text-xl font-medium text-gray-900 mb-4">
          Reference Lists 😊
        </h2>
        <div className="flex overflow-x-auto pb-2">
          {filterIcons.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className="flex min-w-[100px] max-w-[150px]"
            >
              <img
                src={activeFilter === filter.name ? filter.activeIcon : filter.icon}
                alt={filter.name}
                className="h-full w-2/4"
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Task Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredTasks.map((task, index) => (
          <TaskCard 
            key={index}
            task={task}
            onClick={() => navigate(task.route)}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}