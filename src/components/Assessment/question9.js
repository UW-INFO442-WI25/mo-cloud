"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Question9 = () => {
  const [selectedOption, setSelectedOption] = useState(0)
  const navigate = useNavigate()

  const options = [
    "I balance household labor and personal time effectively.",
    "Household work sometimes affects my personal goals, but I manage.",
    "My personal time is often sacrificed due to excessive household labor.",
    "I have no time for personal development because household tasks consume my entire schedule.",
  ]

  return (
    <div className="min-h-screen bg-[#002B5C]">
      {/* Navigation */}
      <nav className="py-8">
        <div className="container mx-auto px-8 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white">
            Mo<span className="text-[#64B5F6]">Cloud</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#64B5F6]">
              Home
            </a>
            <a href="/tasks" className="text-white hover:text-[#64B5F6]">
              Tasks
            </a>
            <a href="/self-assessment" className="text-[#64B5F6]">
              Self Assessment
            </a>
            <a href="/resources" className="text-white hover:text-[#64B5F6]">
              Resources
            </a>
            <a href="/about" className="text-white hover:text-[#64B5F6]">
              About
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-[#FFD54F] text-black px-6 py-2 rounded-full hover:bg-[#FFD54F]/90">
              Log in
            </button>
            <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-full hover:bg-[#64B5F6]/90">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Question Container */}
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-4xl mx-auto bg-[#003471] rounded-3xl p-12">
          {/* Back Button */}
          <button
            onClick={() => navigate("/self-assessment/question8")}
            className="mb-8 p-2 rounded-full border border-white/20 hover:bg-white/10"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Question */}
          <h2 className="text-3xl font-bold text-white mb-12">
            How do household tasks impact your ability to focus on personal goals and activities?
          </h2>

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
              onClick={() => navigate("/self-assessment/question10")}
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
              <div key={i} className={`w-2 h-2 rounded-full ${i === 8 ? "bg-[#64B5F6]" : "bg-white/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question9

