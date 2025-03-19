import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const features = [
  {
    id: "01",
    title: "AUTO-SYNC",
    description:
      "Keep your content always fresh and up-to-date without the extra effort. Boitr automatically syncs with your social media and platforms so your audience always sees the latest.",
    img: "1.png",
  },
  {
    id: "02",
    title: "Organize With Folders",
    description:
      "Easily manage and categorize your content by using folders, making it simpler to organize your links.",
    img: "2.png",
  },
];

export const FeaturesSection = ({darkMode}) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredImg, setHoveredImg] = useState(false);

  return (
    <section className="mx-auto max-w-6xl py-10 relative">


<div className="  lg:flex lg:flex-row  lg:text-left lg:justify-between md:flex md:flex-col md:items-center md:justify-center md:text-center text-center">        
<div className="max-w-lg p-6 space-y-4">
        <span className={`${darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"} `}> 01</span>
          <h2 className="text-3xl font-bold">
            Powerful Features To Elevate Your Digital Presence
          </h2>
        </div>
        <div className="max-w-lg p-6 space-y-4">
          <p className="leading-relaxed">
            Take control of your digital presence with Boitr — the ultimate
            platform to showcase everything that makes you, you.
          </p>

          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block transition"
          >
            Discover Our Features →
          </a>
        </div>
      </div>

      <div>
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative border-b border-gray-700 p-4 py-10 my-10 cursor-pointer transition-all duration-700
            hover:text-white hover:border-[#00B7EF] hover:rounded-lg hover:border ease-in-out bg-transparent"
            style={{
              background:
                hoveredFeature === feature.id
                  ? "linear-gradient(45deg, rgba(250, 173, 79, 0.7) 14.61%, rgba(221, 42, 123, 0.7) 39.38%, rgba(149, 55, 176, 0.7) 58.49%, rgba(81, 91, 212, 0.7) 85.39%)"
                  : "transparent",
            }}
            onMouseEnter={() => setHoveredFeature(feature.id)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="flex items-center justify-between relative">
              <h1 className="text-xl font-semibold">
                <span   className={`${darkMode ? "text-outline-dark-h2" : 'text-outline-light-h2'} text-xl font-bold px-2`}>
                  {feature.id}
                </span>
                {feature.title}
              </h1>
              <p
                className={`w-[400px] text-sm leading-relaxed max-w-lg transition-opacity duration-500 ease-in-out ${
                  hoveredFeature === feature.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {feature.description}
              </p>
              <FaArrowUpLong 
                className={`transition-transform duration-500 ease-in-out ${
                  hoveredFeature === feature.id ? "rotate-90" : ""
                }`}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-end items-center w-full p-5">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className={`w-[30%] md:w-[25%] rounded-lg shadow-lg transition-transform duration-700 ease-in-out ${
                    hoveredFeature === feature.id ? "opacity-100" : "opacity-0"
                  }`}
                  onMouseEnter={() => setHoveredImg(true)}
                  onMouseLeave={() => setHoveredImg(false)}
                  style={{
                    animation: hoveredImg
                      ? "vibrate 0.3s ease-in-out infinite"
                      : "none",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0); }
            25% { transform: translate(-1px, 1px); }
            50% { transform: translate(1px, -1px); }
            75% { transform: translate(-1px, 1px); }
            100% { transform: translate(0); }
          }
        `}
      </style>
    </section>
  );
};
