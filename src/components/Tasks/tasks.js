// src/components/Tasks/tasks.js
"use client"

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import Filter from "./filter";
import TaskCard from "./Components/TaskCard";
import SearchBar from "./Components/SearchBar";
import { taskCategories } from "./data/TaskData";
import { FilterContext } from "./FilterContext";

const Tasks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { filters, setFilters } = useContext(FilterContext);
  const [filteredTasks, setFilteredTasks] = useState(taskCategories);
  const navigate = useNavigate();

  // Apply filters to tasks
  useEffect(() => {
    let filtered = [...taskCategories];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply visibility filter
    if (filters.visibility !== null) {
      filtered = filtered.filter(task => task.visibility === filters.visibility);
    }
    
    // Apply frequency filter
    if (filters.frequency && filters.frequency.length > 0) {
      filtered = filtered.filter(task => 
        filters.frequency.includes(task.frequency)
      );
    }
    
    // Apply category filter
    if (filters.category && filters.category.length > 0) {
      filtered = filtered.filter(task => 
        filters.category.includes(task.category)
      );
    }
    
    setFilteredTasks(filtered);
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      {/* Main Content */}
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64">
            <Filter />
          </div>
          {/* Tasks Grid */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <SearchBar 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="w-full sm:w-auto bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90">
                Search
              </button>
            </div>
            
            {/* Task Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onClick={() => navigate(task.route)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;