"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { surfaceFloorCleaningTasks } from "./data/TaskData";

function SurfaceFloorCleaning() {
  return (
    <TaskPageWrapper
      title="Surface & Floor Cleaning"
      taskId={1}
      tasksData={surfaceFloorCleaningTasks}
    />
  );
}

export default SurfaceFloorCleaning;