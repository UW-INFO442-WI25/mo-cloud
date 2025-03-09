import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import NavigationBar from "../Navigation/NavigationBar";



const documentationData = {
  title: "Self-Assessment Guide: Understanding Your Household Labor",
  sections: [
    {
      title: "Welcome to the Household Labor Self-Assessment",
      content: `Managing a household involves many tasks, some visible and others invisible. This self-assessment is designed to help you:
      \n(1) Understand how much household labor you do
      \n(2) Recognize any imbalances in labor distribution
      \n(3) Identify hidden labor you may be doing without recognition
      \n(4) Find ways to optimize and share responsibilities fairly`
    },
    {
      title: "How This Assessment Works",
      content: `This self-assessment consists of 10 multiple-choice questions covering:
      \n(1) Task completion efficiency
      \n(2) Time spent on household duties
      \n(3) Physical and emotional burden
      \n(4) Multitasking and prioritization
      \n(5) Recognition and fairness of labor distribution`,
      response_scale: {
        "1": "Well-balanced workload, minimal burden",
        "2": "Some challenges, but manageable",
        "3": "Frequent difficulties, possible imbalance",
        "4": "High stress, strong signs of labor inequity"
      },
      analysis: "After answering all questions, your total score will be analyzed to provide insights into your household labor situation."
    },
    {
      title: "Understanding Your Results",
      interpretation: [
        {
          score_range: "10-15",
          description: "Significant Household Labor Imbalance. Your score indicates a major imbalance in household labor, leading to stress and potential burnout. Immediate steps are recommended, such as open discussions about fair task division and seeking support where needed."
        },
        {
          score_range: "16-25",
          description: "High Risk of Overburdening. Your score suggests you are handling a disproportionate amount of household work. You may often feel exhausted or unrecognized. It may be time to redistribute tasks."
        },
        {
          score_range: "26-35",
          description: "Somewhat Uneven Labor Distribution. You may be experiencing some inefficiencies or occasional burdens, but overall, your workload is manageable. Consider minor adjustments for improvement."
        },
        {
          score_range: "36-40",
          description: "Well-Balanced Household Workload. You manage household tasks efficiently, and labor is fairly distributed. You likely receive support and recognition for your contributions."
        }
      ]
    },
    {
      title: "Recognizing Hidden Labor",
      content: `Beyond physical household tasks, you may also be handling invisible labor, such as:
      \n(1) Emotional Labor – Managing relationships, planning family events, organizing childcare
      \n(2) Redoing Work – Having to repeat tasks due to lack of help or inefficiency
      \n(3) Unrecognized Effort – Doing a large share of the work but receiving little acknowledgment`,
      insights: "Your assessment results will highlight these areas and offer suggestions for reducing hidden labor and increasing fair recognition of your contributions."
    },
    {
      title: "Taking Action Based on Your Results",
      content: `After completing this assessment, you will receive:
      \n(1) A breakdown of your household workload and its fairness
      \n(2) A comparison of your workload against a reasonable baseline
      \n(3) Insights into any hidden or emotional labor you may be handling
      \n(4) Personalized recommendations for improving balance and reducing stress`,
      recommendations: [
        "Talking to family members about more equitable task-sharing",
        "Using tracking tools to visualize and distribute workload fairly",
        "Setting boundaries on tasks to prevent burnout",
        "Delegating or automating certain tasks where possible"
      ],
      conclusion: "By completing this assessment, you will be taking an important step in making invisible labor visible. Recognizing your contributions and ensuring a fair division of labor is essential to promoting well-being and strengthening relationships. Use the results of your assessment to start meaningful conversations and create a more balanced home environment."
    }
  ]
};

const Documentation = () => {
  const [openSections, setOpenSections] = useState({});




  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-[#002B5C] text-white">
      <NavigationBar />

      <div className="w-full max-w-5xl mx-auto p-8 mt-24">
        <h1 className="text-3xl md:text-5xl font-bold mb-20 leading-tight">
          Self-Assessment Guide: <br /> Understanding Your Household Labor
        </h1>

        {documentationData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <button
              className="text-2xl md:text-3xl font-semibold mb-2 text-[#64B5F6] flex justify-between w-full text-left"
              onClick={() => toggleSection(index)}
              aria-expanded={openSections[index] ? "true" : "false"}
              aria-controls={`section-content-${index}`}
            >
              {section.title}
              {openSections[index] ? <FaChevronUp aria-hidden="true" /> : <FaChevronDown aria-hidden="true" />}
            </button>

            {openSections[index] && (
              <div 
                id={`section-content-${index}`}
                className="text-lg text-gray-300 leading-relaxed whitespace-pre-line mt-2 p-4 bg-[#1E3A5F] rounded-lg"
                aria-live="polite"
              >
                {section.content}
                {section.response_scale && (
                  <div className="mt-4 p-8 bg-[#0E2A45] rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-[#64B5F6]">Response Scale:</h3>
                    <ul className="list-disc ml-6">
                      {Object.entries(section.response_scale).map(([key, value]) => (
                        <li key={key} className="text-gray-300">{key}: {value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {section.interpretation && (
                  <div className="mt-4 p-8 bg-[#0E2A45] rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-[#64B5F6]">Score Interpretation:</h3>
                    <ul className="list-disc ml-6">
                      {section.interpretation.map((item, idx) => (
                        <li key={idx} className="text-gray-300">
                          <strong>{item.score_range}:</strong> {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {section.recommendations && (
                  <div className="mt-4 p-8 bg-[#0E2A45] rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-[#64B5F6]">Recommendations:</h3>
                    <ul className="list-disc ml-6">
                      {section.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-gray-300">{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {section.conclusion && <p className="text-lg text-gray-300 mt-4">{section.conclusion}</p>}
              </div>
            )}


          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation