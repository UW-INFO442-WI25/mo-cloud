"use client"

import TaskPageWrapper from "./Components/TaskPageWrapper";
import { mealPreparationTasks } from "./data/TaskData";

function MealPreparationCooking() {
  return (
    <TaskPageWrapper
      title="Meal Preparation & Cooking"
      taskId={8}
      tasksData={mealPreparationTasks}
    />
  );
}

export default MealPreparationCooking;