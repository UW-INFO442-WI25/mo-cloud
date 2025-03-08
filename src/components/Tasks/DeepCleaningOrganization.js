"use client"

import { useContext } from "react"
import TaskLayout from "./Layout/TaskLayout"
import TaskList from "./Components/TaskList"
import { useTasks } from "./hooks/UserTask"
import { deepCleaningTasks } from "./data/TaskData"

function DeepCleaningOrganization() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(deepCleaningTasks);

  return (
    <TaskLayout 
      title="Deep Cleaning & Organization Tasks"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  )
}

export default DeepCleaningOrganization