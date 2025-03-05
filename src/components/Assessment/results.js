import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import { useEffect, useState } from "react";

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { scores = [] } = location.state || {};
  const [totalScore, setTotalScore] = useState(0);
  const [resultType, setResultType] = useState("");
  const [description, setDescription] = useState("");
  const [gaugePosition, setGaugePosition] = useState(0);

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
    }
  }, [scores]);

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-4xl mx-auto bg-[#003471] rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6 text-center">Your Test Score</h2>
          <div className="flex flex-col items-center mb-6">
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
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200"
              onClick={() => alert("Downloading report...")}
            >
              Download Report
            </button>
            <button
              className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500"
              onClick={() => alert("Redirecting to improvements...")}
            >
              Suggested Improvement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;