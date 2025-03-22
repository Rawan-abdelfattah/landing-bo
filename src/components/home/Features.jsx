import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

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

export const Features = ({ darkMode }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredImg, setHoveredImg] = useState(false);

  return (
    <section className="container  m-auto relative">
      <div className="   text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          01
        </h2>
        <div className=" md:flex justify-between font-bold mb-6 py-5">
          <h2 className="max-w-[588px] text-2xl md:text-4xl pr-5">
            {" "}
            Powerful Features To Elevate Your Digital Presence
          </h2>
          <div className="  space-y-4">
            <p className="max-w-[482px] leading-relaxed">
              Take control of your digital presence with Boitr — the ultimate
              platform to showcase everything that makes you, you.
            </p>

            <Link
              to="/feature"
              className="bg-[#2c1662] hover:bg-[#2c136f] text-white px-4 py-2 rounded-full text-sm font-bold inline-block transition"
            >
              Discover Our Features →
            </Link>
          </div>
        </div>
      </div>
      <div>
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`relative border-b border-gray-700 p-4 py-10 my-10 cursor-pointer transition-all duration-700
       hover:text-white hover:border-[#2c1662] hover:rounded-2xl hover:border ease-in-out bg-transparent bg-cover bg-center
       ${
         hoveredFeature === feature.id
           ? "bg-[url('/dark-faq.png')]"
           : "bg-[url('/light-faq.png')]  "
       }`}
            onMouseEnter={() => setHoveredFeature(feature.id)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="flex items-center justify-between relative">
              <h1 className="text-xl font-semibold">
                <span
                  className={`${
                    darkMode ? "text-outline-dark-h2" : "text-outline-light-h2"
                  } text-xl font-bold px-1`}
                >
                  {feature.id}
                </span>
                <br />
                {feature.title}
              </h1>
              <p
                className={`w-[400px] text-sm leading-relaxed max-w-lg transition-opacity duration-500 ease-in-out  ${
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
                  className={`hidden md:block w-[18%] rounded-lg shadow-lg transition-transform duration-700 ease-in-out ${
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
    </section>
  );
};
