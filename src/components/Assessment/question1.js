import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import { useState, useEffect } from "react";

const Question1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve scores or initialize with default values
  const { scores: initialScores = Array(10).fill(0) } = location.state || {};
  const [scores, setScores] = useState(initialScores);
  const [selectedOption, setSelectedOption] = useState(initialScores[0]); // Question 1 index is 0

  const questionIndex = 0; // Index for question 1

  const options = [
    "I often feel overwhelmed and unable to complete all tasks efficiently.",
    "I get things done, but I struggle with time management.",
    "I complete tasks well, but they often take longer than expected.",
    "I complete tasks quickly and effectively, with minimal wasted effort.",
  ];

  useEffect(() => {
    setSelectedOption(scores[questionIndex]);
  }, [scores, questionIndex]);

  // Define updateScore locally to update scores array
  const updateScore = (index) => {
    const newScores = [...scores];
    newScores[questionIndex] = index + 1; // Store scores as 1-based index
    setScores(newScores);
    setSelectedOption(index + 1);
  };

  // Navigate to the next question with updated scores
  const handleContinue = () => {
    navigate("/self-assessment/question2", { state: { scores } });
  };

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-4xl mx-auto bg-[#003471] rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-12">
            How efficiently do you complete household tasks?
          </h2>
          <div className="space-y-4 mb-12 text-white">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => updateScore(index)} // Updates scores but does NOT navigate
                className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                  selectedOption === index + 1 ? "border-[#64B5F6] bg-[#64B5F6]/10" : "border-white/20 hover:border-white/40"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 mt-6">
            <button
              onClick={() => navigate(-1)} // Go back without changing state
              className="w-full md:w-auto bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600"
            >
              Back
            </button>
            <button
              onClick={handleContinue} // Navigate only when clicking "Continue"
              className={`w-full md:w-auto py-3 px-6 md:px-12 rounded-full text-lg text-white text-center ${
                selectedOption ? "bg-[#64B5F6] hover:bg-[#64B5F6]/90" : "bg-gray-500 cursor-not-allowed"
              }`}
              disabled={!selectedOption} // Disable button if no option is selected
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