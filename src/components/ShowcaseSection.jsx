import React from "react";
import { FiGrid, FiSettings, FiBarChart, FiZap } from "react-icons/fi";

export const ShowcaseSection = () => {
  return (
    <section
       className=" pt-12 px-6 md:px-16"
    >
      {/* bg-[#161616] */}
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="  text-sm uppercase tracking-wide">02</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Your All-In-One Digital Showcase
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md">
            <p className="  mb-4">
              Boitr is your all-in-one digital hub — a single, shareable link
              that brings together your social media, websites, and content on a
              sleek, customizable page.
            </p>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600   px-6 py-3 rounded-full text-sm font-bold inline-block transition duration-300"
            >
              Contact Us Now →
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-gray-900 p-6 rounded-xl transition duration-300 hover:bg-gray-800"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-xl opacity-30 transition duration-300 group-hover:opacity-50"></div>
                <feature.icon className="text-4xl mx-auto   relative z-10" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="  text-sm mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Profile Cards */}
        <div className="pt-20">
          <img src="./public/Frame.png" alt="" />
        </div>
      </div>
    </section>
  );
};

// Features Data
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
