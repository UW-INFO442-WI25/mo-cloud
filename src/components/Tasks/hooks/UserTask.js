import { useState, useContext, useEffect } from "react";
import { FilterContext } from "../FilterContext";
import { filterTasks } from "../utils/FilterTasks";

export function useTasks(initialTasks) {
  const { filters } = useContext(FilterContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    setFilteredTasks(filterTasks(tasks, searchQuery, filters));
  }, [tasks, searchQuery, filters]);

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
