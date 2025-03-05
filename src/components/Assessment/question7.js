import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import { useState, useEffect } from "react";

const Question7 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve scores from location.state or initialize default values
  const { scores: initialScores = Array(10).fill(0) } = location.state || {};
  const [scores, setScores] = useState(initialScores);
  const [selectedOption, setSelectedOption] = useState(initialScores[6]); // Question 7 index is 6

  const questionIndex = 6; // Index for question 7

  const options = [
    "I use tools effectively to improve efficiency and reduce labor.",
    "I have some tools, but I don't use them to their full potential.",
    "I don't have or use many tools, making tasks harder.",
    "I lack proper resources, making household labor inefficient.",
  ];

  useEffect(() => {
    setSelectedOption(scores[questionIndex]);
  }, [scores, questionIndex]);

  // Define updateScore to store the score in state
  const updateScore = (index) => {
    const newScores = [...scores];
    newScores[questionIndex] = index + 1; // Store scores as 1-based index
    setScores(newScores);
    setSelectedOption(index + 1);
  };

  // Navigate to next question when "Continue" is clicked
  const handleContinue = () => {
    navigate("/self-assessment/question8", { state: { scores } });
  };

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-4xl mx-auto bg-[#003471] rounded-3xl p-12">
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-white">How effective are the tools/resources you use for household tasks?</h2>
            <p className="text-gray-300 text-lg">e.g., appliances, schedules, automation</p>
          </div>
          <div className="space-y-4 mb-12 text-white">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => updateScore(index)} // Only updates score, no navigation
                className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                  selectedOption === index + 1 ? "border-[#64B5F6] bg-[#64B5F6]/10" : "border-white/20 hover:border-white/40"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={() => navigate(-1)} // Go back without changing scores
              className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600"
            >
              Back
            </button>
            <button
              onClick={handleContinue} // Navigate only when clicking "Continue"
              className={`px-12 py-3 rounded-full text-lg text-white ${
                selectedOption ? "bg-[#64B5F6] hover:bg-[#64B5F6]/90" : "bg-gray-500 cursor-not-allowed"
              }`}
              disabled={!selectedOption} // Disable if no option is selected
            >
              Continue
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === questionIndex ? "bg-[#64B5F6]" : "bg-white/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question7;