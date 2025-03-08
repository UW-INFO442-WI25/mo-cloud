"use client"

import TaskLayout from "./Layout/TaskLayout";
import TaskList from "./Components/TaskList";
import { useTasks } from "./hooks/UserTask";
import { surfaceFloorTasks } from "./data/TaskData";

function SurfaceFloorCleaning() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(surfaceFloorTasks);

  return (
    <TaskLayout 
      title="Surface & Floor Cleaning Tasks"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
}

export default SurfaceFloorCleaning;