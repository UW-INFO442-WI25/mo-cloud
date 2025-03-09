"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { groceryManagementTasks } from "./data/TaskData";

function GroceryManagement() {
  return (
    <TaskPageWrapper
      title="Grocery Management"
      taskId={1}
      tasksData={groceryManagementTasks}
    />
  );
}

export default GroceryManagement;