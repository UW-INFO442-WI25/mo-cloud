export function filterTasks(tasks, searchQuery, filters) {
    return tasks.filter((task) => {
      // 1) Search
      if (searchQuery && !task.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // 2) Visibility exact match
      if (typeof filters.visibility === "number" && task.visibility !== filters.visibility) {
        return false;
      }
      
      // 3) Frequency
      if (filters.frequency.length > 0 && !filters.frequency.includes(task.frequency)) {
        return false;
      }
      
      return true;
    });
  }