import { useState } from "react";
import { useNavigate } from "react-router-dom";
import read from "../../assets/read.png";
import NavigationBar from "../Navigation/NavigationBar";

const Assessment = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState(Array(10).fill(0));

  const updateScore = (questionIndex, score) => {
    const newScores = [...scores];
    newScores[questionIndex] = score;
    setScores(newScores);
  };

  const handleStartTest = () => {
    navigate("/self-assessment/question1", { state: { scores } });
  };  

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      
      {/* Main Content */}
      <main className="container mx-auto px-8 py-24 mt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-white leading-tight max-w-xl">
              Evaluate the Quality of Your Household Labor
            </h1>
            <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
              This test consists of 10 multiple-choice questions. Choosing the option that best describes your experience.
              Your results will include a quality score, personalized feedback, and recommendations to improve labor
              efficiency and balance.
            </p>
            <button
              onClick={handleStartTest}
              className="bg-[#64B5F6] text-white px-8 py-3 rounded-full text-lg hover:bg-[#64B5F6]/90"
            >
              Take the Test
            </button>
          </div>
          <div className="relative">
            <img
              src={read || "/placeholder.svg"}
              alt="Assessment illustration"
              className="w-full max-w-md mx-auto relative z-10"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assessment;
