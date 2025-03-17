import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const features = [
  {
    id: "01",
    title: "AUTO-SYNC",
    description:
      "Keep your content always fresh and up-to-date without the extra effort. Boltr automatically syncs with your social media and platforms so your audience always sees the latest.",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: "02",
    title: "Organize With Folders",
    description:
      "Easily manage and categorize your content by using folders, making it simpler to organize your links.",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
];

export const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (id) => {
    setHoveredFeature(id);
    setRandomPosition({
      x: Math.random() * 40 - 20, // Smaller movement for subtle effect
      y: Math.random() * 40 - 20,
    });
  };

  return (
    <section className="mx-auto max-w-6xl py-10 relative">
      <div className="flex justify-between flex-col md:flex-row gap-6">
        <div className="max-w-lg p-6 space-y-4">
          <h2 className="text-3xl font-bold">
            Powerful Features To Elevate Your Digital Presence
          </h2>
        </div>
        <div className="max-w-lg p-6 space-y-4">
          <p className="leading-relaxed">
            Take control of your digital presence with Boltr — the ultimate
            platform to showcase everything that makes you, you.
          </p>

          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-bold inline-block transition"
          >
            Create Your Boltr Now →
          </a>
          <p className="text-xs mt-4">We have 100k+ customers worldwide</p>
        </div>
      </div>

      <div>
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative border border-gray-700 rounded-lg p-4 py-10 my-10 cursor-pointer overflow-visible transition-all duration-700 ease-in-out hover:bg-gradient-to-r from-indigo-700 to-pink-500"
            onMouseEnter={() => handleMouseEnter(feature.id)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="flex items-center justify-between relative">
              <h3 className="text-lg font-semibold">
                <span className="text-lg font-bold px-2">{feature.id}</span>
                {feature.title}
              </h3>

              {/* Smooth fade-in text */}
              <p
                className={`text-sm leading-relaxed w-full max-w-lg transition-opacity duration-500 ease-in-out ${
                  hoveredFeature === feature.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {feature.description}
              </p>

              {/* Arrow rotation on hover */}
              <FaArrowUp
                className={`transition-transform duration-500 ease-in-out ${
                  hoveredFeature === feature.id ? "rotate-180" : ""
                }`}
              />

              {/* Smooth floating image effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-end items-center w-full">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className={`w-[50%] md:w-[25%] rounded-lg shadow-lg transition-transform duration-700 ease-in-out ${
                    hoveredFeature === feature.id
                      ? "scale-100 opacity-100 translate-x-0 translate-y-0"
                      : "scale-95 opacity-0 translate-x-10"
                  }`}
                  style={{
                    transform:
                      hoveredFeature === feature.id
                        ? `translate(${randomPosition.x}px, ${randomPosition.y}px)`
                        : "translateX(10px)",
                    zIndex: 10,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
