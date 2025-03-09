import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import { useEffect, useState } from "react";
import report from "../../assets/report.png";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import app from "../../firebase";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth(app);
  const db = getDatabase(app);

  const { scores = [] } = location.state || {};
  const [totalScore, setTotalScore] = useState(0);
  const [resultType, setResultType] = useState("");
  const [description, setDescription] = useState("");
  const [gaugePosition, setGaugePosition] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (scores.length === 10) {
      const sum = scores.reduce((acc, score) => acc + score, 0);
      setTotalScore(sum);

      if (sum <= 9) {
        setResultType("Poor Labor Quality");
        setDescription("You may struggle with labor efficiency and balance.");
        setGaugePosition(10);
      } else if (sum <= 17) {
        setResultType("Struggling with Labor Efficiency");
        setDescription("You are managing tasks, but improvements are needed.");
        setGaugePosition(30);
      } else if (sum <= 24) {
        setResultType("Moderate Labor Quality");
        setDescription("You handle household labor well but have some inefficiencies.");
        setGaugePosition(50);
      } else {
        setResultType("Excellent Labor Quality");
        setDescription("You efficiently manage labor with great balance.");
        setGaugePosition(75);
      }
      
      // Save results to Firebase if user is logged in
      saveResultsToFirebase(sum, scores);
    }
  }, [scores]);

  const saveResultsToFirebase = async (totalScore, detailedScores) => {
    if (!auth.currentUser) {
      console.log("User not logged in, results not saved");
      return;
    }
    
    try {
      setSaving(true);
      const userId = auth.currentUser.uid;
      const timestamp = new Date().toISOString();
      
      await set(ref(db, `users/${userId}/assessments/latest`), {
        totalScore,
        detailedScores,
        resultType,
        description,
        timestamp
      });
      
      // Also save to history
      await set(ref(db, `users/${userId}/assessments/history/${timestamp.replace(/[.]/g, '_')}`), {
        totalScore,
        detailedScores,
        resultType,
        description,
        timestamp
      });
      
      setSaved(true);
    } catch (error) {
      console.error("Error saving assessment results:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDownloadReport = () => {
    alert("Downloading report...");
  };

  const handleViewProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-4xl mx-auto bg-[#003471] rounded-3xl p-12 text-white flex flex-col md:flex-row items-center">
          <img src={report} alt="Report" className="w-1/2 md:w-1/3 mb-6 md:mb-0" />
          <div className="flex flex-col items-center md:ml-6">
            <h2 className="text-4xl font-bold mb-6 text-center">Your Test Score</h2>
            <div className="relative w-64 h-32">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                {totalScore}
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-2 bg-gray-500 rounded-full">
                <div
                  className="h-2 bg-yellow-400 rounded-full"
                  style={{ width: `${gaugePosition}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xl font-semibold mt-4 text-center">{resultType}</p>
            <p className="text-lg text-center">{description}</p>
            
            {auth.currentUser && (
              <div className="mt-4 text-center">
                {saving ? (
                  <p className="text-blue-300">Saving your results...</p>
                ) : saved ? (
                  <p className="text-green-300">Results saved to your profile!</p>
                ) : (
                  <p className="text-yellow-300">Unable to save results</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200"
            onClick={handleDownloadReport}
          >
            Download Report
          </button>
          <button
            className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500"
            onClick={handleViewProfile}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;