"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import resource1 from "../../assets/resource_1.png";
import resource2 from "../../assets/resource_2.png";
import resource3 from "../../assets/resource_3.png";
import resource4 from "../../assets/resource_4.png";
import resource5 from "../../assets/resource_5.png";
import illustration from "../../assets/p6.png"
import book from "../../assets/book.png";
import NavigationBar from "../Navigation/NavigationBar";

const documentationLink = "/documentation";

const heroLink = "https://news.harvard.edu/gazette/story/2023/03/counting-invisible-work-in-household-division-of-labor/";

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

const videos = [
  {
    title: "Invisible labor can negatively impact well-being in mothers",
    link: "https://www.youtube.com/watch?v=WRGzjNshvGs",
    videoEmbed: "https://www.youtube.com/embed/WRGzjNshvGs?autoplay=1&mute=1",
    thumbnail: "https://img.youtube.com/vi/WRGzjNshvGs/0.jpg",
  },
  {
    title: "Invisible Labor and Reducing Mental Load",
    link: "https://www.youtube.com/watch?v=7LYKcNl8bu0",
    videoEmbed: "https://www.youtube.com/embed/7LYKcNl8bu0?autoplay=1&mute=1",
    thumbnail: "https://img.youtube.com/vi/7LYKcNl8bu0/0.jpg",
  },
  {
    title: "Emotional labor and the myth of 'women's work' | TEDxFolsom",
    link: "https://www.youtube.com/watch?v=bJLawgDbn_E",
    videoEmbed: "https://www.youtube.com/embed/bJLawgDbn_E?autoplay=1&mute=1",
    thumbnail: "https://img.youtube.com/vi/bJLawgDbn_E/0.jpg",
  },
  {
    title: "Why Moms Are Miserable | TEDxWilmingtonWomen",
    link: "https://www.youtube.com/watch?v=MwvctN3Uejg",
    videoEmbed: "https://www.youtube.com/embed/MwvctN3Uejg?autoplay=1&mute=1",
    thumbnail: "https://img.youtube.com/vi/MwvctN3Uejg/0.jpg",
  },
];

const Resource = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#002B5C] text-white">
      <NavigationBar />

      <div className="w-full max-w-screen-xl mx-auto p-6">
        {/* Hero Section */}
        <div 
          className="relative w-full h-96 bg-gray-200 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => window.open(heroLink, "_blank")}
        >
          <img src={resource1} alt="Top Journal Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 hover:bg-opacity-40 transition duration-300">
            <h1 className="text-white text-center text-3xl md:text-5xl font-bold max-w-3xl">
              Dad’s clueless, Mom’s fried. Talking about Invisible work, maybe there’s a better way.
            </h1>
          </div>
        </div>
        {/* Guide Section */}
        <div className="mt-24">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Self-assessment Overview</h2>
          <div 
            className="bg-white rounded-xl overflow-hidden text-black transition-transform duration-300 hover:scale-105 cursor-pointer p-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            onClick={() => navigate(documentationLink)}
          >
            <div className="text-center md:text-left w-full md:w-1/2">
              <h3 className="text-2xl font-semibold">
                Self-Assessment Guide: Understanding Your Household Labor 
              </h3>
              <p className="text-gray-600 mt-2">
                Click here to view the full guide and learn more about our self-assessment process.
              </p>
            </div>

            <img 
              src={illustration}
              alt="Documentation Illustration"
              className="w-full md:w-1/2 max-w-xs md:max-w-sm object-contain rounded-lg border-none shadow-none outline-none ring-0"
            />
          </div>
        </div>

        {/* Articles Section */}
        <div className="mt-24">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Recommended Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div 
                key={index} 
                className="bg-white shadow-sm rounded-xl overflow-hidden text-black transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => window.open(article.link, "_blank")}
              >
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="text-gray-600 mt-2">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mt-24 w-full max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Recommended Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-xl overflow-hidden text-black transition-transform duration-300 hover:scale-105 cursor-pointer relative w-full"
                onClick={() => window.open(video.link, "_blank")}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index ? (
                  <iframe
                    className="w-full aspect-video"
                    src={video.videoEmbed}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Section */}
        <div className="mt-24">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Recommended Research</h2>
          <div className="overflow-x-auto overflow-visible">
            <div className="overflow-x-auto snap-x flex space-x-6 px-4 pb-4 relative">
              {researchItems.map((research, index) => (
                <a 
                  key={index} 
                  href={research.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group flex-shrink-0 w-64 bg-white rounded-2xl overflow-visible transform transition duration-300 hover:scale-110 active:scale-110 snap-mandatory"
                  onTouchStart={(e) => e.currentTarget.classList.add("hover-effect")}
                  onTouchEnd={(e) => setTimeout(() => e.currentTarget.classList.remove("hover-effect"), 500)}
                >
                  <div className="absolute -z-10 inset-0 rounded-2xl shadow-2xl group-hover:scale-110 transition duration-300"></div>

                  <img
                    src={research.image}
                    alt={research.title}
                    className="w-full h-48 object-cover transition duration-300 group-hover:opacity-80 mix-blend-multiply rounded-t-2xl"
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100 transition duration-300 rounded-2xl">
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