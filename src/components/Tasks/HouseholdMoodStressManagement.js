"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { householdMoodStressTasks } from "./data/TaskData";

function HouseholdMoodStressManagement() {
  return (
    <TaskPageWrapper
      title="Household Mood & Stress Management"
      taskId={7}
      tasksData={householdMoodStressTasks}
    />
  );
}

export default HouseholdMoodStressManagement;