"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { petCareTasks } from "./data/TaskData";

function PetCare() {
  return (
    <TaskPageWrapper
      title="Pet Care"
      taskId={6}
      tasksData={petCareTasks}
    />
  );
}

export default PetCare;