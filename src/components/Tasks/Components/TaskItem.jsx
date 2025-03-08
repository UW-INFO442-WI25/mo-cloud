import React from "react";

export default function TaskItem({ task, onToggleComplete }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
        task.completed ? "bg-green-50" : "bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          onClick={() => onToggleComplete && onToggleComplete(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer
            ${task.completed ? "border-green-500 bg-green-500" : "border-gray-300"}`}
        >
          {task.completed && (
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className="text-gray-900 text-lg">{task.name}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-gray-900 font-medium">{task.timeRange}</span>
        <span className="text-gray-500">min</span>
      </div>
    </div>
  );
    }