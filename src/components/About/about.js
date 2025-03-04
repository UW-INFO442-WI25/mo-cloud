
"use client"

import { useState } from "react"
import facebookIcon from "../../assets/Facebook-icon.png"
import group1113 from "../../assets/Group 1113.png"
import group1114 from "../../assets/Group 1114.png"
import group1115 from "../../assets/Group 1115.png"
import group1116 from "../../assets/Group 1116.png"
import instagramIcon from "../../assets/instagram-icon.png"
import member1 from "../../assets/member1.png"
import member2 from "../../assets/member2.png"
import member3 from "../../assets/member3.png"
import member4 from "../../assets/member4.png"
import member5 from "../../assets/member5.png"
import twitterIcon from "../../assets/twitter-icon.png"
import NavigationBar from "../Navigation/NavigationBar"


function About() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    yourName: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const teamMembers = [
    { name: "Hanrul Tang", role: "Financial Advisor", image: member1 },
    { name: "Jia Wu", role: "Developer", image: member2 },
    { name: "Sophia Xiao", role: "Financial Advisor", image: member3 },
    { name: "Xiaoqian Zhou", role: "Designer", image: member4 },
    { name: "Yue Xu", role: "Product Advisor", image: member5 },
  ]

  const features = [
    {
      icon: group1113,
      title: "Labor Entry & Tracking",
      description: "A simple tool for logging both visible and invisible household tasks",
    },
    {
      icon: group1114,
      title: "Reference & Learning Hub",
      description: "A collection of resources focused on invisible labor, gender equality, and household management",
    },
    {
      icon: group1115,
      title: "Assessment & Awareness Tools",
      description: "A built-in system to help families recognize imbalances and learn about equitable labor sharing",
    },
    {
      icon: group1116,
      title: "Visualization Dashboard",
      description: "Clear, intuitive charts that show how labor is distributed in a household over time",
    },
  ]

  return (
    <div className="min-h-screen bg-[#002B5C]">
      <NavigationBar />
      {/* Hero Section */}
      <div className="bg-[#002B5C] pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our project,
            <br />
            Equitable Awareness
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
            Invisible Labor in Families aims to highlight the often-overlooked labor that keeps households
            running—mental, emotional, and organizational tasks disproportionately carried by women. We strive to create
            a tool that helps new parents track, visualize, and distribute household labor equitably, fostering stronger
            partnerships, healthier family dynamics, and long-term gender equality.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002B5C] mb-4">About our team members.</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We are MoCloud, a team of five passionate designers and researchers from INFO-442—Yue (Monica) Xu, Xiaoqian
            Zhou, Hanrul (Alice) Tang, Sophia Xiao, and Jia Wu. Our team is dedicated to tackling social inequalities
            through thoughtful and impactful design solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-lg text-[#002B5C]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">How We're Making a Difference</h2>
          <p className="text-gray-600 mb-12">We believe that awareness is the first step toward change.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <img src={feature.icon || "/placeholder.svg"} alt="" className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg text-[#002B5C] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4 md:mb-6">Send Us A Message</h2>
              <p className="text-white text-lg md:text-l max-w-3xl">
                Fill out the form and 
                <br />
                our team will get back to you as quickly as we can.
                <br />
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img src={facebookIcon || "/placeholder.svg"} alt="Facebook" className="w-6 md:w-8 h-6 md:h-8" />
                  <div>
                    <div className="font-medium">Facebook</div>
                    <div className="text-white">MoCloud_Official</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img src={instagramIcon || "/placeholder.svg"} alt="Instagram" className="w-6 md:w-8 h-6 md:h-8" />
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-white">MoCloud_Official</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img src={twitterIcon || "/placeholder.svg"} alt="Twitter" className="w-6 md:w-8 h-6 md:h-8" />
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-white">MoCloud_Official</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="134 768 990"
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    placeholder="Your prefer name"
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Messages</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#64B5F6] focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#64B5F6] text-white px-8 py-3 rounded-full hover:bg-[#64B5F6]/90 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default About