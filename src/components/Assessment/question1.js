import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import { useState, useEffect } from "react";

const Question1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve scores and updateScore from state or initialize default values
  const { scores: initialScores = Array(10).fill(0), updateScore = () => {} } = location.state || {};

  const questionIndex = 0; // Question 1 index

  const options = [
    "I complete tasks quickly and effectively, with minimal wasted effort.",
    "I complete tasks well, but they often take longer than expected.",
    "I get things done, but I struggle with time management.",
    "I often feel overwhelmed and unable to complete all tasks efficiently.",
  ];

  // Maintain scores in state to persist user selection
  const [scores, setScores] = useState(initialScores);
  const [selectedOption, setSelectedOption] = useState(initialScores[questionIndex]);

  // Sync scores when navigating back
  useEffect(() => {
    setSelectedOption(scores[questionIndex]);
  }, [scores, questionIndex]);

  const handleOptionSelect = (index) => {
    const newScores = [...scores];
    newScores[questionIndex] = index + 1;
    setScores(newScores);
    setSelectedOption(index + 1);
    
    // Update global state before navigating
    updateScore(questionIndex, index + 1);
    
    navigate("/Assessment/question2", { state: { scores: newScores, updateScore } });
  };

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-4xl mx-auto bg-[#003471] rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-12">
            How efficiently do you complete household tasks?
          </h2>
          <div className="space-y-4 mb-12">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
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
              onClick={() => navigate(-1)} // Use navigate(-1) to preserve state
              className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600"
            >
              Back
            </button>
            <button
              onClick={() => navigate("/Assessment/question2", { state: { scores, updateScore } })}
              className="bg-[#64B5F6] text-white px-12 py-3 rounded-full text-lg hover:bg-[#64B5F6]/90"
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

export default Question1;
