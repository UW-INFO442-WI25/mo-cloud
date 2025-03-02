"use client";

import React from "react";
import resource1 from "../../assets/resource_1.png";
import resource2 from "../../assets/resource_2.png";
import resource3 from "../../assets/resource_3.png";
import resource4 from "../../assets/resource_4.png";
import resource5 from "../../assets/resource_5.png";
import book from "../../assets/book.png";
import NavigationBar from "../Navigation/NavigationBar";

const articles = [
  {
    title: "The Invisible Workload of Women",
    image: resource2,
    description: "Discover the unseen mental load that women often carry and how it impacts their daily lives.",
    link: "https://susanhyatt.co/the-invisible-workload-of-women/",
  },
  {
    title: "A Timely Reminder: 'Invisible Labor' is Still Work",
    image: resource3,
    description: "Explore how invisible labor continues to shape women's lives and remain unrecognized in society.",
    link: "https://www.vogue.com/article/invisible-labor-is-still-work",
  },
  {
    title: "Invisible Labor: Valuing the Unseen Contributions of Women",
    image: resource4,
    description: "Uncover the hidden emotional and physical labor that women contribute daily and why it's time to value it.",
    link: "https://www.drjuliehanks.com/blog/invisible-labor-valuing-the-unseen-contributions-of-women",
  },
  {
    title: "Breaking Away from the Invisible Load of Motherhood",
    image: resource5,
    description: "Learn how to break free from the invisible load of motherhood and prioritize your own well-being.",
    link: "https://www.momwell.com/blog/breaking-away-from-the-invisible-load-of-motherhood",
  },
];

const researchItems = [
  {
    title: "Invisible Work",
    image: book,
    link: "https://www.jstor.org/stable/800538?seq=6",
  },
  {
    title: "Unequal Care, Unequal Work: Toward a more Comprehensive Understanding of Gender Inequality in Post-Reform Urban China",
    image: book,
    link: "https://link.springer.com/article/10.1007/s11199-017-0751-1",
  },
  {
    title: "When I Iron My Son’s Shirt, I Feel My Maternal Role: Making Women’s Invisible Work Visible",
    image: book,
    link: "https://journals.sagepub.com/doi/10.1177/0192513X19894351",
  },
  {
    title: "Husbands' and Wives' Time Spent on Housework: A Comparison of Measures",
    image: book,
    link: "https://www.jstor.org/stable/3600272?seq=1",
  },
  {
    title: "Women more than men adjust their careers for family life",
    image: book,
    link: "https://www.jstor.org/stable/3600272?seq=1",
  },
  {
    title: "Research on Household Labor: Modeling and Measuring the Social Embeddedness of Routine Family Work",
    image: book,
    link: "https://www.jstor.org/stable/3600272?seq=1",
  },
  {
    title: "Invisible Household Labor and Ramifications for Adjustment: Mothers as Captains of Households",
    image: book,
    link: "https://www.jstor.org/stable/3600272?seq=1",
  },
  {
    title: "The Cognitive Dimension of Household Labor",
    image: book,
    link: "https://journals.sagepub.com/doi/10.1177/0003122419859007",
  },
];

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

        {/* Articles Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Recommended Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white shadow-sm rounded-xl overflow-hidden text-black">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="text-gray-600 mt-2">{article.description}</p>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 inline-block mt-3 hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Recommended Research</h2>
  
          <div className="overflow-x-auto overflow-visible">
            <div className="flex space-x-6 px-4 pb-4 relative">
              {researchItems.map((research, index) => (
                <a 
                  key={index} 
                  href={research.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group flex-shrink-0 w-64 bg-white rounded-2xl overflow-visible transform transition duration-300 hover:scale-110"
                >
                  <div className="absolute -z-10 inset-0 rounded-2xl shadow-2xl group-hover:scale-110 transition duration-300"></div>

                  <img
                    src={research.image}
                    alt={research.title}
                    className="w-full h-48 object-cover transition duration-300 group-hover:opacity-80 mix-blend-multiply rounded-t-2xl"
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl">
                    <h3 className="text-white text-lg font-semibold text-center px-4">
                      {research.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource