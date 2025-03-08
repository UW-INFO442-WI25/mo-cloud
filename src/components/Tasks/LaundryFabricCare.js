"use client"

import TaskLayout from "./Layout/TaskLayout";
import TaskList from "./Components/TaskList";
import { useTasks } from "./hooks/UserTask";
import { laundryFabricCareTasks } from "./data/TaskData";

function LaundryFabricCare() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(laundryFabricCareTasks);

  return (
    <TaskLayout 
      title="Laundry & Fabric Care"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
}

export default LaundryFabricCare;