"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { deepCleaningOrganizationTasks } from "./data/TaskData";

function DeepCleaningOrganization() {
  return (
    <TaskPageWrapper
      title="Deep Cleaning & Organization"
      taskId={2}
      tasksData={deepCleaningOrganizationTasks}
    />
  );
}

export default DeepCleaningOrganization;