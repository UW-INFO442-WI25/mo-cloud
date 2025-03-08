import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleComplete }) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete} 
        />
      ))}
    </div>
  );
}