"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { laundryFabricCareTasks } from "./data/TaskData";

function LaundryFabricCare() {
  return (
    <TaskPageWrapper
      title="Laundry & Fabric Care"
      taskId={10}
      tasksData={laundryFabricCareTasks}
    />
  );
}

export default LaundryFabricCare;