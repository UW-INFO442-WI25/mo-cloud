"use client"

import { useState } from "react"
import emailIcon from "../../assets/email-icon.png"
import facebookIcon from "../../assets/Facebook-icon.png"
import instagramIcon from "../../assets/instagram-icon.png"
import member1 from "../../assets/member1.png"
import member2 from "../../assets/member2.png"
import member3 from "../../assets/member3.png"
import member4 from "../../assets/member4.png"
import member5 from "../../assets/member5.png"
import phoneIcon from "../../assets/phone-icon.png"
import twitterIcon from "../../assets/twitter-icon.png"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferName: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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
            <a href="/self-assessment" className="text-white hover:text-[#64B5F6]">
              Self Assessment
            </a>
            <a href="/resources" className="text-white hover:text-[#64B5F6]">
              Resources
            </a>
            <a href="/contact" className="text-[#64B5F6]">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-[#FFD54F] text-black px-6 py-2 rounded-full hover:bg-[#FFD54F]/90">Login /Register</button>
            <button className="bg-[#64B5F6] text-white px-6 py-2 rounded-full hover:bg-[#64B5F6]/90">
              One Time User →
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Info Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 mb-12">
              Questions? Comments? 
              <br />
              We would love to chat!
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4">
                <img src={emailIcon || "/placeholder.svg"} alt="Email" className="w-8 h-8" />
                <div>
                  <div className="text-sm text-gray-400">Email us</div>
                  <div className="text-white">xiaoqz6@uw.edu</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center space-x-4">
                <img src={phoneIcon || "/placeholder.svg"} alt="Phone" className="w-8 h-8" />
                <div>
                  <div className="text-sm text-gray-400">Phone number</div>
                  <div className="text-white">(123) 431 3456</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white rounded-t-[3rem]">
        <div className="container mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us A Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you as quickly as we can.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                      placeholder="134 768 990"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="preferName"
                      value={formData.preferName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                      placeholder="Your prefer name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Messages</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                    placeholder="Type your message here"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90 transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="space-y-6">
                <a href="#" className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <img src={facebookIcon || "/placeholder.svg"} alt="Facebook" className="w-12 h-12" />
                  <div>
                    <div className="font-medium">Facebook</div>
                    <div className="text-gray-600">MoCloud_Official</div>
                  </div>
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <img src={instagramIcon || "/placeholder.svg"} alt="Instagram" className="w-12 h-12" />
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-gray-600">MoCloud_Official</div>
                  </div>
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <img src={twitterIcon || "/placeholder.svg"} alt="Twitter" className="w-12 h-12" />
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-gray-600">MoCloud_Official</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Abour Our Team</h1>
          <div className="mt-24">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <img
                  src={member1 || "/placeholder.svg"}
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="font-medium">Hanrui Tang</div>
              </div>
              <div className="text-center">
                <img
                  src={member2 || "/placeholder.svg"}
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="font-medium">Jia wu</div>
              </div>
              <div className="text-center">
                <img
                  src={member3 || "/placeholder.svg"}
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="font-medium">Sophia Xiao</div>
              </div>
              <div className="text-center">
                <img
                  src={member4 || "/placeholder.svg"}
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="font-medium">Xiaoqian Zhou</div>
              </div>
              <div className="text-center">
                <img
                  src={member5 || "/placeholder.svg"}
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="font-medium">Yue Xu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

