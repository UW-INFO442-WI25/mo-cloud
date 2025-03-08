"use client"

import TaskLayout from "./Layout/TaskLayout";
import TaskList from "./Components/TaskList";
import { useTasks } from "./hooks/UserTask";
import { vehicleEquipmentTasks } from "./data/TaskData";

function VehicleEquipmentMaintenance() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(vehicleEquipmentTasks);

  return (
    <TaskLayout 
      title="Vehicle & Equipment Maintenance"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
}

export default VehicleEquipmentMaintenance;