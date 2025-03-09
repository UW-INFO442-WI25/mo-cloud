import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import { useEffect, useState } from "react";
import report from "../../assets/report.png";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import app from "../../firebase";
import jsPDF from "jspdf";
import result1 from "../../assets/result_1.png"
import result2 from "../../assets/result_2.png"
import result3 from "../../assets/result_3.png"
import result4 from "../../assets/result_4.png"

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth(app);
  const db = getDatabase(app);

  const { scores = [], questions = [] } = location.state || {};
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

      if (sum >= 36 && sum <= 40) {
        setResultType("Well-Balanced Household Workload");
        setDescription("You manage household tasks efficiently, and labor is fairly distributed. You likely receive support and recognition for your contributions.");
        setGaugePosition(100);
      } else if (sum >= 26 && sum <= 35) {
        setResultType("Somewhat Uneven Labor Distribution");
        setDescription("You may be experiencing some inefficiencies or occasional burdens, but overall, your workload is manageable. Consider minor adjustments for improvement.");
        setGaugePosition(75);
      } else if (sum >= 16 && sum <= 25) {
        setResultType("High Risk of Overburdening");
        setDescription("Your score suggests you are handling a disproportionate amount of household work. You may often feel exhausted or unrecognized. It may be time to redistribute tasks.");
        setGaugePosition(50);
      } else if (sum <= 15) {
        setResultType("Significant Household Labor Imbalance");
        setDescription("Your score indicates a major imbalance in household labor, leading to stress and potential burnout. Immediate steps are recommended, such as open discussions about fair task division and seeking support where needed.");
        setGaugePosition(25);
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
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Self-Assessment Report", 20, 20);

  
    // Score Summary
    doc.setFontSize(14);
    doc.text(`Your Score: ${totalScore}`, 20, 40);
    doc.text(`Category: ${resultType}`, 20, 50);
    
    // Wrap long text for better readability
    const splitDescription = doc.splitTextToSize(description, 170);
    doc.text(splitDescription, 20, 60);
  
    // User Answers
    doc.setFontSize(12);
    doc.text("Your Answers:", 20, 80);
  
    const questions = [
      "How efficiently do you complete household tasks?",
      "How do you prioritize household tasks?",
      "How often do you feel overwhelmed by household labor?",
      "How often do you multitask when doing household labor?",
      "How would you describe the physical effort involved in your household labor?",
      "Do you feel the household labor is distributed fairly in your household?",
      "How often do you experience stress from household labor?",
      "How do you approach organizing and maintaining household spaces?",
      "How do you feel about the division of household responsibilities?",
      "How often do you receive acknowledgment or appreciation for the household labor you do?"
    ];
  
    const options = [
      [
        "I complete tasks quickly and effectively, with minimal wasted effort.",
        "I complete tasks well, but they often take longer than expected.",
        "I get things done, but I struggle with time management.",
        "I often feel overwhelmed and unable to complete all tasks efficiently."
      ],
      [
        "I plan tasks based on urgency and importance, ensuring smooth workflow.",
        "I prioritize based on necessity but sometimes feel overwhelmed.",
        "I handle tasks as they come, without much planning.",
        "I struggle to keep up, and tasks often pile up unpredictably."
      ],
      [
        "Rarely, I manage to stay on top of household tasks.",
        "Occasionally, I feel overwhelmed but can manage.",
        "Frequently, I struggle with the workload.",
        "Almost always, household labor feels unmanageable."
      ],
      [
        "I effectively manage multiple tasks at once without quality loss.",
        "I multitask sometimes, but it affects task quality.",
        "I often multitask but feel rushed or distracted.",
        "I struggle with multitasking, and it affects my productivity."
      ],
      [
        "I balance physical tasks well without feeling overworked.",
        "Some tasks are tiring, but I manage.",
        "I often feel physically drained after completing tasks.",
        "Household labor is physically exhausting and difficult to sustain."
      ],
      [
        "Yes, tasks are divided fairly and efficiently.",
        "Tasks are somewhat balanced, but I handle a bit more.",
        "The workload is mostly on me, with little help.",
        "I do almost everything, and it feels unfair."
      ],
      [
        "Rarely, I feel little to no stress from household labor.",
        "Occasionally, it causes mild stress but is manageable.",
        "Frequently, I feel stressed from the household workload.",
        "Almost always, household labor is a major source of stress for me."
      ],
      [
        "I have a structured system in place for organizing and maintaining household spaces.",
        "I try to keep things organized but struggle with consistency.",
        "I clean and organize when things become too messy.",
        "I find it difficult to maintain household organization."
      ],
      [
        "I am satisfied with how responsibilities are divided.",
        "I wish there was a more balanced distribution of tasks.",
        "I often feel like I am doing more than my fair share.",
        "I strongly feel that household responsibilities are unfairly distributed."
      ],
      [
        "Frequently—my contributions are recognized and valued.",
        "Sometimes—I receive appreciation, but not consistently.",
        "Rarely—my efforts go unnoticed most of the time.",
        "Never—my work is taken for granted."
      ]
    ];
  
    let yPosition = 95;
  
    scores.forEach((score, index) => {
      const questionText = doc.splitTextToSize(`${index + 1}. ${questions[index]}`, 170);
      doc.text(questionText, 20, yPosition);
      yPosition += questionText.length * 7;
  
      doc.setFont("helvetica", "italic");
      doc.text(`- Selected Answer: ${options[index][score - 1]}`, 25, yPosition);
      yPosition += 10;
      doc.setFont("helvetica", "normal");
  
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
    });
  
    doc.save("self-assessment-report.pdf");
  };
  

  const handleViewProfile = () => {
    navigate("/profile");
  };

  const getResultImage = (type) => {
    switch (type) {
      case "Well-Balanced Household Workload":
        return result1;
      case "Somewhat Uneven Labor Distribution":
        return result2;
      case "High Risk of Overburdening":
        return result3;
      case "Significant Household Labor Imbalance":
        return result4;
      default:
        return result1;
    }
  };

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-4xl mx-auto bg-[#003471] rounded-3xl p-12 text-white flex flex-col md:flex-row items-center">
          <img src={getResultImage(resultType)} alt="Report" className="w-1/2 md:w-1/3 mb-6 md:mb-0" />
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
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 flex items-center gap-2"
            onClick={handleDownloadReport}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l4-4m-4 4l-4-4" />
            </svg>
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