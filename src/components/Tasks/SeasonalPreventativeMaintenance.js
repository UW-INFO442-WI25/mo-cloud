"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { seasonalMaintenanceTasks } from "./data/TaskData";

function SeasonalPreventativeMaintenance() {
  return (
    <TaskPageWrapper
      title="Seasonal & Preventative Maintenance"
      taskId={11}
      tasksData={seasonalMaintenanceTasks}
    />
  );
}

export default SeasonalPreventativeMaintenance;