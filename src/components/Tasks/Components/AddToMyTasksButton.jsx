import { useState, useEffect } from "react";
import { getDatabase, ref, push, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../../firebase";

export default function AddToMyTasksButton({ taskInfo, tasks }) {
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [authStatus, setAuthStatus] = useState("checking");
  
  const auth = getAuth(app);
  const db = getDatabase(app);

  // Check authentication status on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStatus("authenticated");
        console.log("User is authenticated:", user.uid);
      } else {
        setAuthStatus("unauthenticated");
        console.log("User is not authenticated");
      }
    });
    
    return () => unsubscribe();
  }, [auth]);

  // Add to My Tasks function
  const handleAddToMyTasks = async () => {
    setSaving(true);
    console.log("Starting save process...");
    console.log("Tasks to save:", tasks.filter(task => task.completed));
    
    try {
      // Get current user ID
      const userId = auth.currentUser?.uid;
      
      if (!userId) {
        console.error("User not authenticated");
        setSaving(false);
        return;
      }
      
      console.log("Saving for user:", userId);
      
      // Create a reference to the user's tasks
      const userTasksRef = ref(db, `users/${userId}/myTasks`);
      
      // Create a new task entry
      const newTaskRef = push(userTasksRef);
      
      // Get completed subtasks
      const completedTasks = tasks.filter(task => task.completed);
      
      // Calculate total time spent
      const totalTimeSpent = calculateTotalTime(completedTasks);
      
      const dataToSave = {
        id: taskInfo?.id || "unknown",
        title: taskInfo?.title || "Unknown Task",
        category: taskInfo?.category || "Uncategorized",
        frequency: taskInfo?.frequency || "Daily",
        visibility: taskInfo?.visibility || 5,
        time: taskInfo?.time || "0 min",
        dateAdded: new Date().toISOString(),
        completedSubtasks: completedTasks,
        totalTimeSpent: totalTimeSpent
      };
      
      console.log("Saving data:", dataToSave);
      
      // Set the task data
      await set(newTaskRef, dataToSave);
      console.log("Data saved successfully!");
      
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
  
  // Calculate total time spent based on completed subtasks
  const calculateTotalTime = (completedTasks) => {
    let totalMinutes = 0;
    
    completedTasks.forEach(task => {
      const timeRange = task.timeRange;
      if (timeRange) {
        // Handle ranges like "5-10" or single values like "30"
        const parts = timeRange.split('-');
        if (parts.length === 2) {
          // If it's a range, take the average
          const min = parseInt(parts[0]);
          const max = parseInt(parts[1]);
          totalMinutes += (min + max) / 2;
        } else {
          // If it's a single value
          totalMinutes += parseInt(parts[0]);
        }
      }
    });
    
    return totalMinutes;
  };

  return (
    <button
      onClick={handleAddToMyTasks}
      disabled={saving || saveSuccess || authStatus === "unauthenticated"}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium transition-all ${
        authStatus === "unauthenticated" 
          ? "bg-gray-400 cursor-not-allowed" 
          : saveSuccess 
            ? "bg-green-500" 
            : "bg-[#AED581] hover:bg-[#8BC34A]"
      }`}
    >
      {authStatus === "unauthenticated" ? (
        "Login Required"
      ) : saveSuccess ? (
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
  );
} 