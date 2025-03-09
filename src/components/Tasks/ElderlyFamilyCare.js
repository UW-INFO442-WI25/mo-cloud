"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { elderlyFamilyCareTasks } from "./data/TaskData";

function ElderlyFamilyCare() {
  return (
    <TaskPageWrapper
      title="Elderly & Family Care"
      taskId={4}
      tasksData={elderlyFamilyCareTasks}
    />
  );
}

export default ElderlyFamilyCare;