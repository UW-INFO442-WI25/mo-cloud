"use client"

import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import NavigationBar from "../Navigation/NavigationBar"
import Filter from "./filter"
import { FilterContext } from "./FilterContext"
import { groceryManagementTasks } from "./data/TaskData"
import { filterTasks } from "./utils/FilterTasks"

function GroceryManagement() {
  const navigate = useNavigate()
  const { filters } = useContext(FilterContext)
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredSubTasks = filterTasks(groceryManagementTasks, searchQuery, filters)

  return (
    <div className="container mx-auto px-4 py-8">
      <NavigationBar />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Filter />
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-bold mb-6">Grocery Shopping & Inventory Management</h1>
          
          {/* Search input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full p-2 border border-gray-300 rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Task list */}
          <div className="space-y-4">
            {filteredSubTasks.map((task) => (
              <div key={task.id} className="p-4 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{task.name}</span>
                  <span className="text-sm text-gray-500">{task.timeRange} min</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <span className="mr-4">Frequency: {task.frequency}</span>
                  <span>Visibility: {task.visibility}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroceryManagement