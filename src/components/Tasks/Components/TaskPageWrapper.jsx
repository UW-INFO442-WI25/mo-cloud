import React from "react";
import TaskLayout from "../Layout/TaskLayout";
import TaskList from "./TaskList";
import AddToMyTasksButton from "./AddToMyTasksButton";
import { useTasks } from "../hooks/UserTask";
import { taskCategories } from "../data/TaskData";

export default function TaskPageWrapper({ 
  title, 
  taskId, 
  tasksData 
}) {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(tasksData);

  // Find the task info from taskCategories
  const taskInfo = taskCategories.find(task => task.id === taskId) || {
    id: taskId,
    title: title,
    category: "Uncategorized",
    frequency: "Daily",
    time: "0 min",
    visibility: 5
  };

  // Create the Add to My Tasks button
  const addToMyTasksButton = (
    <AddToMyTasksButton 
      taskInfo={taskInfo} 
      tasks={filteredTasks} 
    />
  );

  return (
    <TaskLayout 
      title={title}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      actionButton={addToMyTasksButton}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
} 