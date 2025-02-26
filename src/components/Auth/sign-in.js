"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Shuffle } from "lucide-react"
import NavigationBar from "../Navigation/NavigationBar"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-400">
      <NavigationBar />
      {/* Main Content */}
      <div className="container mx-auto px-4 mt-12 flex flex-wrap items-start justify-center gap-8">
        {/* Login Form */}
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-[#20184e] mb-4">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Please fill your email and password to sign in.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-gray-300 px-4 py-2"
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
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10"
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

            <button
              type="submit"
              className="w-full bg-[#4f9cf9] hover:bg-[#52c3ff] text-white rounded-full px-4 py-2"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#4f9cf9] hover:underline">
                Sign up
              </Link>
            </p>
            <Link to="/forgot-password" className="text-[#4f9cf9] hover:underline text-sm">
              Forgot password
            </Link>
          </div>

          <div className="mt-8 space-y-4">
            <button className="w-full border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50">
              Sign in with Google
            </button>
            <button className="w-full border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-50">
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
