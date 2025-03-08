"use client"

import TaskLayout from "./Layout/TaskLayout";
import TaskList from "./Components/TaskList";
import { useTasks } from "./hooks/UserTask";
import { familyRelationshipTasks } from "./data/TaskData";

function FamilyRelationshipEmotionalSupport() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(familyRelationshipTasks);

  return (
    <TaskLayout 
      title="Family Relationship & Emotional Support"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
}

export default FamilyRelationshipEmotionalSupport;