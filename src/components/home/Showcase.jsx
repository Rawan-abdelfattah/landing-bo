import React from "react";
import { FiGrid, FiSettings, FiBarChart, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Unified Presence",
    description: "Combine all your links in one sleek, organized space.",
    icon: FiGrid,
  },
  {
    title: "Fully Customizable",
    description: "Personalize your Boitr page to reflect your unique style.",
    icon: FiSettings,
  },
  {
    title: "Smart Insights",
    description:
      "Track clicks and engagement to know what your audience loves.",
    icon: FiBarChart,
  },
  {
    title: "Easy & Fast Setup",
    description: "Create and share your Boitr page in just a few minutes.",
    icon: FiZap,
  },
];

export const Showcase = ({ darkMode }) => {
  return (
    <section
      className={` ${darkMode ? "bg-[#161616]" : ""}`}
    >
      <div className=" max-w-screen-xl mx-auto md:px-20 px-5     pt-10 text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          02
        </h2>
        <div className="md:flex justify-between font-bold mb-6 py-5">
          <h2 className="max-w-[550px] text-2xl md:text-4xl ">
              
            Your All-In-One Digital Showcase
          </h2>
          <div className="mt-6 md:mt-0 max-w-[482px] ">
            <p className="  mb-4">
              Boitr is your all-in-one digital hub — a single, shareable link
              that brings together your social media, websites, and content on a
              sleek, customizable page.
            </p>
            <Link
              to="/support"
              className="bg-[#2c1662] hover:bg-[#2c136f]  text-white px-[20px] py-[10px] rounded-full text-sm font-bold inline-block transition duration-300"
            >
              Contact Us Now →
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`  p-6 rounded-xl transition duration-300 `}
            >
              <div className="relative inline-block mb-4">
                <div
                  className="absolute inset-0 blur-xl opacity-100 transition duration-300 group-hover:opacity-50"
                  style={{
                    background:
                      " linear-gradient(45deg, rgba(250, 173, 79, 0.8) 14.61%, rgba(221, 42, 123, 0.8) 39.38%, rgba(149, 55, 176, 0.8) 58.49%, rgba(81, 91, 212, 0.8) 85.39%)",
                  }}
                ></div>
                <feature.icon className="text-4xl mx-auto   relative z-10" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="  text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
  {["profile1.png", "profile2.png", "profile3.png", "profile4.png"].map((src, index) => (
    <div
      key={index}
      className="group h-[180px] sm:h-[220px] md:h-[250px] relative rounded-t sm:rounded-t-3xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl w-full mb-4 sm:mb-0"
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={src}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:-translate-y-1/3"
          alt="Profile"
        />
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};
