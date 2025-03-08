"use client"

import TaskLayout from "./Layout/TaskLayout";
import TaskList from "./Components/TaskList";
import { useTasks } from "./hooks/UserTask";
import { elderlyFamilyCareTasks } from "./data/TaskData";

function ElderlyFamilyCare() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(elderlyFamilyCareTasks);

  return (
    <TaskLayout 
      title="Elderly & Family Care Tasks"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
}

export default ElderlyFamilyCare;