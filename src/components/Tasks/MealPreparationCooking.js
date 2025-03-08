"use client"

import TaskLayout from "./Layout/TaskLayout";
import TaskList from "./Components/TaskList";
import { useTasks } from "./hooks/UserTask";
import { mealPreparationTasks } from "./data/TaskData";

function MealPreparationCooking() {
  const { 
    filteredTasks, 
    searchQuery, 
    setSearchQuery, 
    handleToggleComplete 
  } = useTasks(mealPreparationTasks);

  return (
    <TaskLayout 
      title="Meal Preparation & Cooking"
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <TaskList tasks={filteredTasks} onToggleComplete={handleToggleComplete} />
    </TaskLayout>
  );
}

export default MealPreparationCooking;