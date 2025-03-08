// src/components/Tasks/hooks/UserTask.js
import { useState, useContext } from "react";
import { FilterContext } from "../FilterContext";
import { filterTasks } from "../utils/FilterTasks";

export function useTasks(initialTasks) {
  const [tasks, setTasks] = useState(initialTasks);
  const { filters } = useContext(FilterContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = filterTasks(tasks, searchQuery, filters);

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? {...task, completed: !task.completed} : task
    ));
  };

  return {
    tasks,
    filteredTasks,
    searchQuery,
    setSearchQuery,
    handleToggleComplete
  };
}