import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import DashboardLayout from "../Layout/DashboardLayout";
import app from "../../../firebase";
import { Link } from "react-router-dom";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [assessmentData, setAssessmentData] = useState(null);
  
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) return;
      
      const userId = auth.currentUser.uid;
      
      // Fetch user profile data
      const userRef = ref(db, `users/${userId}/profile`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setUserData(data);
        }
        setLoading(false);
      });
      
      // Fetch assessment data
      const assessmentRef = ref(db, `users/${userId}/assessments/latest`);
      onValue(assessmentRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setAssessmentData(data);
        }
      });
    };
    
    fetchUserData();
  }, [auth.currentUser, db]);
  
  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-medium">Hello, {auth.currentUser?.displayName || 'User'} 👋</h1>
        <p className="text-gray-600 mt-2">Welcome to your profile</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-4">Profile Information</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-500">Email</p>
              <p>{auth.currentUser?.email}</p>
            </div>
            
            <div>
              <p className="text-gray-500">Name</p>
              <p>{auth.currentUser?.displayName || 'Not set'}</p>
            </div>
            
            {/* Add more profile fields as needed */}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-4">Labor Quality Assessment</h2>
          
          {!assessmentData ? (
            <div className="text-center py-6">
              <p className="text-gray-500 mb-4">You haven't completed an assessment yet.</p>
              <Link 
                to="/self-assessment" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Take Assessment
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{assessmentData.resultType}</span>
                <span className="text-2xl font-bold">{assessmentData.totalScore}/40</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-yellow-400 h-2.5 rounded-full" 
                  style={{ width: `${(assessmentData.totalScore / 40) * 100}%` }}
                ></div>
              </div>
              
              <p className="text-gray-700">{assessmentData.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="font-medium mb-2">Question Breakdown</h3>
                <div className="grid grid-cols-5 gap-2">
                  {assessmentData.detailedScores.map((score, index) => (
                    <div key={index} className="text-center">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full" 
                          style={{ width: `${(score / 4) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">Q{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-sm text-gray-500 mt-4">
                Last updated: {new Date(assessmentData.timestamp).toLocaleDateString()}
              </div>
              
              <div className="mt-4">
                <Link 
                  to="/self-assessment" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Retake Assessment
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}