import React from "react";

export default function TaskCard({ task, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 transition-transform hover:scale-105 cursor-pointer"
    >
      <div className={`${task.bgColor} aspect-[4/3] relative overflow-hidden`}>
        <img
          src={task.image || "/placeholder.svg"}
          alt={task.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">
          Whole time: {task.time}
        </div>
        <h3 className="text-xl text-gray-900 font-semibold leading-tight">
          {task.title}
        </h3>
      </div>
    </div>
  );
}