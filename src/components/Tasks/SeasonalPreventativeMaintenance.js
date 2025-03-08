"use client"

import TaskLayout from "./Layout/TaskLayout";
import TaskList from "./Components/TaskList";
import { useTasks } from "./hooks/UserTask";
import { seasonalMaintenanceTasks } from "./data/TaskData";

function SeasonalPreventativeMaintenance() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(seasonalMaintenanceTasks);

  return (
    <TaskLayout 
      title="Seasonal & Preventative Maintenance"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
}

export default SeasonalPreventativeMaintenance;