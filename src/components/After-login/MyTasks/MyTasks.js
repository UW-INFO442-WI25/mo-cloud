import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DashboardLayout from "../Layout/DashboardLayout";
import app from "../../../firebase";
import TaskItem from "../../Tasks/Components/TaskItem";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function MyTasks() {
  const [myTasks, setMyTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [authStatus, setAuthStatus] = useState("checking");
  const [taskStats, setTaskStats] = useState({
    totalTasks: 0,
    totalTime: 0,
    categoryCounts: {},
    weeklyActivity: {},
    tasksByCategory: []
  });
  
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Check authentication status
  useEffect(() => {
    console.log("Checking auth status...");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStatus("authenticated");
        console.log("MyTasks: User is authenticated:", user.uid);
      } else {
        setAuthStatus("unauthenticated");
        console.log("MyTasks: User is not authenticated");
      }
    });
    
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const fetchMyTasks = async () => {
      console.log("Fetching tasks...");
      const userId = auth.currentUser?.uid;
      
      if (!userId) {
        console.log("No user ID available, can't fetch tasks");
        setLoading(false);
        return;
      }
      
      console.log("Fetching tasks for user:", userId);
      const userTasksRef = ref(db, `users/${userId}/myTasks`);
      
      onValue(userTasksRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Fetched data:", data);
        
        if (data) {
          const tasksList = Object.entries(data).map(([key, value]) => ({
            firebaseKey: key,
            ...value
          }));
          
          console.log("Processed tasks:", tasksList);
          setMyTasks(tasksList);
          
          // Calculate statistics
          const stats = {
            totalTasks: tasksList.length,
            totalTime: 0,
            categoryCounts: {},
            weeklyActivity: {},
            tasksByCategory: []
          };
          
          // Get days of the week
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          daysOfWeek.forEach(day => {
            stats.weeklyActivity[day] = 0;
          });
          
          tasksList.forEach(task => {
            // Add time
            stats.totalTime += task.totalTimeSpent || 0;
            
            // Count categories
            if (task.category) {
              stats.categoryCounts[task.category] = (stats.categoryCounts[task.category] || 0) + 1;
            }
            
            // Track weekly activity
            if (task.dateAdded) {
              const taskDate = new Date(task.dateAdded);
              const dayOfWeek = daysOfWeek[taskDate.getDay()];
              stats.weeklyActivity[dayOfWeek] += 1;
            }
          });
          
          // Format data for pie chart
          stats.tasksByCategory = Object.entries(stats.categoryCounts).map(([name, value]) => ({
            name,
            value
          }));
          
          // Format data for bar chart
          stats.weeklyActivityData = Object.entries(stats.weeklyActivity).map(([day, count]) => ({
            day,
            count
          }));
          
          setTaskStats(stats);
        } else {
          console.log("No tasks found");
          setMyTasks([]);
        }
        setLoading(false);
      }, (error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
    };
    
    if (authStatus === "authenticated") {
      fetchMyTasks();
    } else if (authStatus === "unauthenticated") {
      setLoading(false);
    }
  }, [auth.currentUser, authStatus, db]);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleBackToList = () => {
    setSelectedTask(null);
  };

  const formatTime = (minutes) => {
    if (!minutes) return "0 min";
    
    if (minutes < 60) {
      return `${Math.round(minutes)} min`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = Math.round(minutes % 60);
      return remainingMinutes > 0 ? `${hours} h ${remainingMinutes} min` : `${hours} h`;
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8" role="status" aria-live="polite">
        <h1 className="text-2xl font-medium">Hello, {auth.currentUser?.displayName || 'User'} 👋</h1>
        <p className="text-gray-600 mt-2">Here are your saved tasks</p>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64" role="status" aria-live="assertive">
          <p className="sr-only">Loading tasks...</p>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : selectedTask ? (
        // Task Detail View
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <button
              onClick={handleBackToList}
              className="mr-4 p-2 rounded-full hover:bg-gray-100"
              aria-label="Back to task list"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="True">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-medium">{selectedTask.title}</h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
              {selectedTask.category}
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
              {selectedTask.frequency}
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
              {formatTime(selectedTask.totalTimeSpent || 0)}
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
              {new Date(selectedTask.dateAdded).toLocaleDateString()}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Completed Subtasks:</h3>
            {selectedTask.completedSubtasks?.map((subtask) => (
              <TaskItem 
                key={subtask.id} 
                task={subtask} 
                onToggleComplete={() => {}} // Read-only in this view
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-1">Total Tasks</h3>
              <p className="text-2xl font-medium">{taskStats.totalTasks}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-1">Total Time Spent</h3>
              <p className="text-2xl font-medium">{formatTime(taskStats.totalTime)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-1">Most Common Category</h3>
              <p className="text-2xl font-medium">
                {Object.entries(taskStats.categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "None"}
              </p>
            </div>
          </div>
          
          {/* Data Visualizations */}
          {myTasks.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Category Distribution Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4">Tasks by Category</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%" aria-label="Tasks by category chart">
                    <PieChart>
                      <Pie
                        data={taskStats.tasksByCategory}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        aria-label="Pie chart representing the distribution of tasks by category"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {taskStats.tasksByCategory.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Weekly Activity Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4">Weekly Activity</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%" aria-label="Weekly activity chart">
                    <BarChart
                      data={taskStats.weeklyActivityData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      aria-label="Bar chart representing task completion over the week"
                    >
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Tasks Completed" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
          
          {/* Tasks List View */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">My Tasks</h2>
            
            {myTasks.length === 0 ? (
              <p className="text-gray-500">You haven't added any tasks yet.</p>
            ) : (
              <div className="space-y-4">
                {myTasks.map((task) => (
                  <div 
                    key={task.firebaseKey}
                    onClick={() => handleTaskClick(task)}
                    role="button"
                    tabIndex="0"
                    className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    aria-label={`View task: ${task.title}`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{task.title}</h3>
                      <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {task.category}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2 text-sm text-gray-500">
                      <span>{task.frequency}</span>
                      <span>•</span>
                      <span>{formatTime(task.totalTimeSpent || 0)}</span>
                      <span>•</span>
                      <span>{new Date(task.dateAdded).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </DashboardLayout>
  );
}