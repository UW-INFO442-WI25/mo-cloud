"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NavigationBar from "../Navigation/NavigationBar"

const Question7 = () => {
  const [selectedOption, setSelectedOption] = useState(0)
  const navigate = useNavigate()

  const options = [
    "I use tools effectively to improve efficiency and reduce labor.",
    "I have some tools, but I don't use them to their full potential.",
    "I don't have or use many tools, making tasks harder.",
    "I lack proper resources, making household labor inefficient.",
  ]

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />

      {/* Question Container */}
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-4xl mx-auto bg-[#003471] rounded-3xl p-12">
          {/* Back Button */}
          <button
            onClick={() => navigate("/self-assessment/question6")}
            className="mb-8 p-2 rounded-full border border-white/20 hover:bg-white/10"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Question */}
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-white">
              How effective are the tools/resources you use for household tasks?
            </h2>
            <p className="text-gray-300 text-lg">e.g., appliances, schedules, automation</p>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-12">
            {options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all
                  ${
                    selectedOption === index
                      ? "border-[#64B5F6] bg-[#64B5F6]/10"
                      : "border-white/20 hover:border-white/40"
                  }`}
                onClick={() => setSelectedOption(index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                    ${selectedOption === index ? "border-[#64B5F6] bg-[#64B5F6]" : "border-white/40"}`}
                  >
                    {selectedOption === index && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-white text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/self-assessment/question8")}
              className="bg-[#64B5F6] text-white px-12 py-3 rounded-full text-lg hover:bg-[#64B5F6]/90 flex items-center gap-2"
            >
              Continue
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 6 ? "bg-[#64B5F6]" : "bg-white/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question7



