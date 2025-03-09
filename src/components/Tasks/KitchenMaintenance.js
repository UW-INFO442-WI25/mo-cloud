"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { kitchenMaintenanceTasks } from "./data/TaskData";

function KitchenMaintenance() {
  return (
    <TaskPageWrapper
      title="Kitchen Maintenance"
      taskId={3}
      tasksData={kitchenMaintenanceTasks}
    />
  );
}

export default KitchenMaintenance;