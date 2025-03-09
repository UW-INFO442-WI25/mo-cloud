"use client"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getDatabase, ref, push, set } from "firebase/database"
import { getAuth } from "firebase/auth"
import TaskLayout from "./Layout/TaskLayout"
import TaskItem from "./Components/TaskItem"
import { taskCategories } from "./data/TaskData"
import app from "../../firebase" // Using your existing Firebase config

export default function TaskDetail() {
  const { taskId } = useParams()
  const navigate = useNavigate()
  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [saving, setSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  
  const auth = getAuth(app)
  const db = getDatabase(app)

  // Fetch task details from TaskData.js
  useEffect(() => {
    // Find the task in taskCategories
    const foundTask = taskCategories.find(t => t.id.toString() === taskId);
    
    if (foundTask) {
      // Create subtasks based on the task type
      // This is a simplified example - you may need to adjust based on your data structure
      const subtasks = [
        { id: 1, name: "Making a grocery list", timeRange: "5-15", completed: false },
        { id: 2, name: "Checking pantry for missing ingredients", timeRange: "5-10", completed: false },
        { id: 3, name: "Grocery shopping (in-store/online)", timeRange: "30-90", completed: false },
        { id: 4, name: "Organizing groceries after shopping", timeRange: "10-20", completed: false },
      ];
      
      setTask({
        ...foundTask,
        subtasks
      });
    }
    setLoading(false);
  }, [taskId]);

  // Toggle subtask completion
  const handleToggleComplete = (subtaskId) => {
    setTask(prev => {
      if (!prev) return prev;
      
      return {
        ...prev,
        subtasks: prev.subtasks.map(subtask => 
          subtask.id === subtaskId 
            ? { ...subtask, completed: !subtask.completed } 
            : subtask
        )
      };
    });
  };

  // Add to My Tasks function
  const handleAddToMyTasks = async () => {
    if (!task) return;
    
    setSaving(true);
    
    try {
      // Get current user ID
      const userId = auth.currentUser?.uid;
      
      if (!userId) {
        console.error("User not authenticated");
        setSaving(false);
        return;
      }
      
      // Create a reference to the user's tasks
      const userTasksRef = ref(db, `users/${userId}/myTasks`);
      
      // Create a new task entry
      const newTaskRef = push(userTasksRef);
      
      // Set the task data
      await set(newTaskRef, {
        id: task.id,
        title: task.title,
        category: task.category,
        frequency: task.frequency,
        visibility: task.visibility,
        time: task.time,
        dateAdded: new Date().toISOString(),
        completed: false,
        subtasks: task.subtasks
      });
      
      setSaveSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error saving task:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <TaskLayout
        title="Loading..."
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      >
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </TaskLayout>
    );
  }

  if (!task) {
    return (
      <TaskLayout
        title="Task Not Found"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      >
        <div className="bg-white rounded-3xl p-8">
          <p className="text-gray-700">The requested task could not be found.</p>
          <button
            onClick={() => navigate("/tasks")}
            className="mt-4 bg-[#1E88E5] text-white px-4 py-2 rounded-lg"
          >
            Back to Tasks
          </button>
        </div>
      </TaskLayout>
    );
  }

  return (
    <TaskLayout
      title={task.title}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    >
      <div className="bg-white rounded-3xl p-8 relative">
        {/* Add to My Tasks button */}
        <button
          onClick={handleAddToMyTasks}
          disabled={saving || saveSuccess}
          className={`absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium transition-all ${
            saveSuccess 
              ? "bg-green-500" 
              : "bg-[#AED581] hover:bg-[#8BC34A]"
          }`}
        >
          {saveSuccess ? (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Added!
            </>
          ) : saving ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Saving...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add to MY Tasks
            </>
          )}
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">{task.title}</h2>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
            {task.category}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
            {task.frequency}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
            Visibility: {task.visibility}
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
            {task.time}
          </div>
        </div>
        
        <div className="space-y-4">
          {task.subtasks.map((subtask) => (
            <TaskItem 
              key={subtask.id} 
              task={subtask} 
              onToggleComplete={() => handleToggleComplete(subtask.id)}
            />
          ))}
        </div>
      </div>
    </TaskLayout>
  );
}
