"use client";

import React from "react";
import resource1 from "../../assets/resource_1.png";
import resource2 from "../../assets/resource_2.png";
import resource3 from "../../assets/resource_3.png";
import resource4 from "../../assets/resource_4.png";
import resource5 from "../../assets/resource_5.png";
import NavigationBar from "../Navigation/NavigationBar";

const Resource = () => {
  return (
    <div className="min-h-screen bg-[#002B5C] text-white">
      <NavigationBar />

      <div className="w-full max-w-screen-xl mx-auto p-6">
        {/* Hero Section */}
        <div className="relative w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
          <img
            src={resource1}
            alt="Top Journal Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <h1 className="text-white text-center text-3xl md:text-5xl font-bold max-w-3xl">
              Dad’s clueless, Mom’s fried. Talking about Invisible work, maybe there’s a better way.
            </h1>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Resource Classifications */}
          <div className="bg-white shadow-md p-6 rounded-lg text-black">
            <h2 className="text-lg font-semibold mb-4">Resource Classifications</h2>
            <ul className="text-blue-500 space-y-2">
              <li><a href="#">Research</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Organization</a></li>
            </ul>
          </div>

          {/* Self-assessment Documentation */}
          <div className="bg-white shadow-md p-6 rounded-lg text-black">
            <h2 className="text-lg font-semibold mb-4">Self-assessment Documentation</h2>
            <ul className="text-blue-500 space-y-2">
              <li><a href="#">Insights behind ten questions</a></li>
              <li><a href="#">Results reference</a></li>
            </ul>
          </div>
        </div>

        {/* Articles Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Recommended Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Article 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden text-black">
              <img
                src={resource2}
                alt="Article cover 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">The Invisible Workload of Women</h3>
                <p className="text-gray-600 mt-2">
                  "Discover the unseen mental load that women often carry and how it impacts their daily lives."
                </p>
                <a 
                  href="https://susanhyatt.co/the-invisible-workload-of-women/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 inline-block mt-3 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden text-black">
              <img
                src={resource3}
                alt="Article cover 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">A Timely Reminder: 'Invisible Labor' is Still Work</h3>
                <p className="text-gray-600 mt-2">
                  "Explore how invisible labor continues to shape women's lives and remain unrecognized in society."
                </p>
                <a 
                  href="https://www.vogue.com/article/invisible-labor-is-still-work" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 inline-block mt-3 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden text-black">
              <img
                src={resource4}
                alt="Article cover 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Invisible Labor: Valuing the Unseen Contributions of Women</h3>
                <p className="text-gray-600 mt-2">
                  "Uncover the hidden emotional and physical labor that women contribute daily and why it's time to value it."
                </p>
                <a 
                  href="https://www.drjuliehanks.com/blog/invisible-labor-valuing-the-unseen-contributions-of-women" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 inline-block mt-3 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden text-black">
              <img
                src={resource5}
                alt="Article cover 5"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Breaking Away from the Invisible Load of Motherhood</h3>
                <p className="text-gray-600 mt-2">
                  "Learn how to break free from the invisible load of motherhood and prioritize your own well-being."
                </p>
                <a 
                  href="https://www.momwell.com/blog/breaking-away-from-the-invisible-load-of-motherhood" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 inline-block mt-3 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource
