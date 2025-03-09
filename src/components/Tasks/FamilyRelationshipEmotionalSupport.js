"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { familyRelationshipTasks } from "./data/TaskData";

function FamilyRelationshipEmotionalSupport() {
  return (
    <TaskPageWrapper
      title="Family Relationship & Emotional Support"
      taskId={6}
      tasksData={familyRelationshipTasks}
    />
  );
}

export default FamilyRelationshipEmotionalSupport;