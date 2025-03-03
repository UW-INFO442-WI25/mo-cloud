import React, { useState } from 'react';
import userImage from '../../assets/avatar1.png';
import timeDistributionPlot from '../../assets/chart1.png';
import selfAssessmentImage from '../../assets/90percent.png';
import { Link } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";

const UserProfilePage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        customGender: '',
        country: '',
        timeZone: '',
        familyMembers: '',
        description: '',
        email: 'Amy123@gmail.com'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleGenderChange = (e) => {
        const { value } = e.target;
        setFormData({ 
            ...formData, 
            gender: value, 
            customGender: value === 'Others' ? '' : formData.customGender 
        });
    };

    const toggleEdit = () => {
        if (isEditing) {
            const updatedGender = formData.gender === "Others" ? formData.customGender : formData.gender;
            setFormData({ ...formData, gender: updatedGender });
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#002B5C]">
            {/* Navigation Bar */}
            <div className="fixed top-0 left-0 w-full z-50 bg-[#002B5C] shadow-md">
                <NavigationBar />
            </div>

            {/* White Box Section */}
            <div className="pt-20 w-full">
                <div className="w-full h-32 flex-shrink-0"></div>
                <div className="relative w-4/5 bg-white p-12 shadow-lg rounded-2xl -mt-12 mx-auto flex flex-col">
                    
                    {/* Edit & Save Buttons */}
                    <div className="absolute top-6 right-6 flex gap-4">
                        <button 
                            onClick={toggleEdit} 
                            className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
                            {isEditing ? "Save" : "Edit"}
                        </button>
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center space-x-6 mb-6">
                        <img 
                            src={userImage} 
                            alt="User Profile" 
                            className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900">Amy</h2>
                            <p className="text-sm text-gray-500">{formData.email}</p>
                        </div>
                    </div>

                    {/* Profile Title */}
                    <div className="relative mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">User Profile</h2>
                    </div>

                    {/* Main Content Section */}
                    <div className="flex gap-12">
                        {/* Left-side*/}
                        <div className="w-1/2">
                            <div className="grid grid-cols-1 gap-8">
                                {[
                                    { label: 'First Name', name: 'firstName' },
                                    { label: 'Last Name', name: 'lastName' },
                                    { label: 'Country', name: 'country' }
                                ].map(({ label, name }) => (
                                    <div key={name}>
                                        <label className="block text-sm font-medium text-gray-700">{label}</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name={name}
                                                value={formData[name]}
                                                onChange={handleChange}
                                                className="w-full bg-white text-gray-900 rounded-lg px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none"
                                            />
                                        ) : (
                                            <div className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-2 border border-gray-300">
                                                {formData[name] || "Not provided"}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Gender Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                                    {isEditing ? (
                                        <>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleGenderChange}
                                                className="w-full bg-white text-gray-900 rounded-lg px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none">
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </select>
                                            {formData.gender === "Others" && (
                                                <input
                                                    type="text"
                                                    name="customGender"
                                                    value={formData.customGender}
                                                    onChange={handleChange}
                                                    placeholder="Specify your gender"
                                                    className="w-full bg-white text-gray-900 rounded-lg px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none mt-2"
                                                />
                                            )}
                                        </>
                                    ) : (
                                        <div className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-2 border border-gray-300">
                                            {formData.gender || "Not provided"}
                                        </div>
                                    )}
                                </div>

                                {/* Family Members */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Family Members</label>
                                    {isEditing ? (
                                        <textarea
                                            name="familyMembers"
                                            value={formData.familyMembers}
                                            onChange={handleChange}
                                            className="w-full bg-white text-gray-900 rounded-lg px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none"
                                        />
                                    ) : (
                                        <div className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-2 border border-gray-300">
                                            {formData.familyMembers || "Not provided"}
                                        </div>
                                    )}
                                </div>

                                {/* Describe Yourself */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Describe Yourself</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        placeholder="Your Description"
                                        className={`w-full h-28 bg-gray-100 text-gray-900 rounded-lg px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none ${isEditing ? 'bg-white' : ''}`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right-side*/}
                        <div className="w-1/2 flex flex-col gap-8">
                            <div className="relative flex flex-col items-center">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Time dashboard</h3>
                                <Link to="/tasks">
                                    <img 
                                        src={timeDistributionPlot} 
                                        alt="Time Distribution" 
                                        className="w-2/3 max-w-sm cursor-pointer transition-transform hover:scale-105"
                                        onMouseEnter={() => setHoveredImage('timeDistribution')}
                                        onMouseLeave={() => setHoveredImage(null)}
                                    />
                                </Link>
                                {hoveredImage === 'timeDistribution' && (
                                    <div className="absolute top-20 bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg">
                                        View detailed time tracking analysis
                                    </div>
                                )}
                            </div>

                            <div className="relative flex flex-col items-center">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your self-assessment result is:</h3>
                                <div className="flex items-center">
                                    <Link to="/self-assessment">
                                        <img 
                                            src={selfAssessmentImage} 
                                            alt="Self-assessment Results" 
                                            className="w-2/3 max-w-sm cursor-pointer transition-transform hover:scale-105"
                                            onMouseEnter={() => setHoveredImage('selfAssessment')}
                                            onMouseLeave={() => setHoveredImage(null)}
                                        />
                                    </Link>
                                    <span className="text-red-500 font-bold text-8xl ml-4">90%</span>
                                </div>
                                {hoveredImage === 'selfAssessment' && (
                                    <div className="absolute top-20 bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg">
                                        Check your latest personality assessment analysis
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
