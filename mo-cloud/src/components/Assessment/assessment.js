import { useNavigate } from "react-router-dom"
import read from "../../assets/read.png"

const Assessment = () => {
  const navigate = useNavigate()

  const handleStartTest = () => {
    navigate("/self-assessment/question")
  }

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

      {/* Main Content */}
      <main className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-white leading-tight max-w-xl">
              Evaluate the Quality of Your Household Labor
            </h1>
            <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
              This test consists of 10 multiple-choice questions. Choose the option that best describes your experience.
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
  )
}

export default Assessment

