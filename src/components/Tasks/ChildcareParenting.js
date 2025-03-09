"use client";

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { childcareParentingTasks } from "./data/TaskData";

function ChildcareParenting() {
  return (
    <TaskPageWrapper
      title="Childcare & Parenting"
      taskId={4}
      tasksData={childcareParentingTasks}
    />
  );
}

export default ChildcareParenting;