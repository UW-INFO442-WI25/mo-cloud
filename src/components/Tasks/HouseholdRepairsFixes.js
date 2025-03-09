"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { householdRepairsTasks } from "./data/TaskData";

function HouseholdRepairsFixes() {
  return (
    <TaskPageWrapper
      title="Household Repairs & Fixes"
      taskId={13}
      tasksData={householdRepairsTasks}
    />
  );
}

export default HouseholdRepairsFixes;