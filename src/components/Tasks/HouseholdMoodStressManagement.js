"use client"

import TaskLayout from "./Layout/TaskLayout";
import TaskList from "./Components/TaskList";
import { useTasks } from "./hooks/UserTask";
import { householdRepairsTasks } from "./data/TaskData";

function HouseholdRepairsFixes() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(householdRepairsTasks);

  return (
    <TaskLayout 
      title="Household Repairs & Fixes"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
}

export default HouseholdRepairsFixes;