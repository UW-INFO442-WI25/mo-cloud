import React from "react";

export default function TaskCard({ task, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 transition-transform hover:scale-105 cursor-pointer"
    >
      <div className={`${task.bgColor || 'bg-gray-100'} aspect-[4/3] relative overflow-hidden`}>
        {/* Handle both imported images and string paths */}
        {typeof task.image === 'string' ? (
          <img
            src={task.image}
            alt={task.title}
            className="w-full h-full object-contain"
            onError={(e) => {
              console.error(`Failed to load image: ${task.image}`);
              e.target.src = '/placeholder.svg'; // Fallback image
            }}
          />
        ) : (
          <img
            src={task.image}
            alt={task.title}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">
          {task.time && `Whole time: ${task.time}`}
        </div>
        <h3 className="text-xl text-gray-900 font-semibold leading-tight">
          {task.title}
        </h3>
      </div>
    </div>
  );
}