import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // 引入箭头图标
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
          description: "Well-Balanced Household Workload. You manage household tasks efficiently, and labor is fairly distributed. You likely receive support and recognition for your contributions."
        },
        {
          score_range: "16-25",
          description: "Somewhat Uneven Labor Distribution. You may be experiencing some inefficiencies or occasional burdens, but overall, your workload is manageable. Consider minor adjustments for improvement."
        },
        {
          score_range: "26-35",
          description: "High Risk of Overburdening. Your score suggests you are handling a disproportionate amount of household work. You may often feel exhausted or unrecognized. It may be time to redistribute tasks."
        },
        {
          score_range: "36-40",
          description: "Significant Household Labor Imbalance. Your score indicates a major imbalance in household labor, leading to stress and potential burnout. Immediate steps are recommended, such as open discussions about fair task division and seeking support where needed."
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
  const [openSections, setOpenSections] = useState({}); // 存储展开/折叠状态

  // 切换某个 section 的展开/折叠
  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index] // 切换 true/false
    }));
  };

  return (
    <div className="min-h-screen bg-[#002B5C] text-white">
      <NavigationBar />

      <div className="w-full max-w-5xl mx-auto p-8 mt-24">
        {/* 大标题，拆分成两行 */}
        <h1 className="text-3xl md:text-5xl font-bold mb-20 leading-tight">
          Self-Assessment Guide: <br /> Understanding Your Household Labor
        </h1>

        {documentationData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            {/* 标题部分，带箭头按钮 */}
            <button
              className="text-2xl md:text-3xl font-semibold mb-2 text-[#64B5F6] flex justify-between w-full text-left"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {openSections[index] ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* 可折叠的内容区域 */}
            {openSections[index] && (
              <div className="text-lg text-gray-300 leading-relaxed whitespace-pre-line mt-2 p-4 bg-[#1E3A5F] rounded-lg">
                {section.content}

                {/* 如果有 response scale */}
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

                {/* 如果有 interpretation */}
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

                {/* 如果有 recommendations */}
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

                {/* Conclusion */}
                {section.conclusion && <p className="text-lg text-gray-300 mt-4">{section.conclusion}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
