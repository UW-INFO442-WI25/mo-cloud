"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import NavigationBar from "../Navigation/NavigationBar"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your signup logic here
    if (!agreeToTerms) {
      alert("Please agree to the Terms & Conditions")
      return
    }
    // Process signup
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-400">
      <NavigationBar />
      {/* Main Content */}
      <div className="container mx-auto px-4 mt-12 flex flex-wrap items-start justify-center">
        {/* Signup Form */}
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-[#20184e] mb-4">Create Your Account</h2>
          <p className="text-gray-600 mb-8">Create an account today and start</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-full border border-gray-300 px-4 py-2"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-gray-300 px-4 py-2"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="3125 4123 5452"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full rounded-full border border-gray-300 px-4 py-2"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Type password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-[#4f9cf9] focus:ring-[#4f9cf9]"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I have read and agree to the Terms & Conditions.
              </label>
            </div>

            <button type="submit" className="w-full bg-[#4f9cf9] hover:bg-[#52c3ff] text-white rounded-full px-4 py-2">
              Create account
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <button className="w-full border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50">
              Sign in with Google
            </button>
            <button className="w-full border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50">
              Sign in with Facebook
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#4f9cf9] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

