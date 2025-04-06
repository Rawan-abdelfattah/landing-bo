import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiGrid, FiSettings, FiBarChart, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Unified Presence",
    description: "Combine all your links in one sleek, organized space.",
    icon: "/show-case.svg",
  },
  {
    title: "Fully Customizable",
    description: "Personalize your Boitr page to reflect your unique style.",
    icon: "/show-case2.svg",
  },
  {
    title: "Smart Insights",
    description:
      "Track clicks and engagement to know what your audience loves.",
    icon: "/show-case3.svg",
  },
  {
    title: "Easy & Fast Setup",
    description: "Create and share your Boitr page in just a few minutes.",
    icon: "/show-case4.svg",
  },
];

export const Showcase = ({ darkMode }) => {
  return (
    <section className={` ${darkMode ? "bg-[#161616]" : ""}`}>
      <div className=" max-w-screen-xl mx-auto md:px-15 px-5 pt-20 text-center lg:text-left">
        <span
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          02
        </span>
        <div className="md:flex justify-between font-bold mb-[20px] py-5">
          <span className="max-w-[550px] text-[36px] leading-[50px] md:text-[38px] font-[700] ">
            Your All-In-One Digital Showcase
          </span>
          <div className="mt-6 md:mt-0 max-w-[482px] ">
            <p className="text-[18px]  mb-4">
              Boitr is your all-in-one digital hub — a single, shareable link
              that brings together your social media, websites, and content on a
              sleek, customizable page.
            </p>
            <Link
              to="/support"
              className={`text-[16px] ${
                darkMode
                  ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                  : "bg-[#2c1662] hover:bg-[#2c136f]"
              }  text-white px-[20px] py-[10px] rounded-full text-sm font-bold inline-flex  items-center gap-2 transition-all duration-500`}
            >
              Contact Us Now <BsArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`  p-6 rounded-xl transition-all duration-500 `}
            >
              <div className="relative inline-block mb-4">
                <div
                  className="absolute inset-0 w-[70px] h-[70px] rounded-full blur-[10px]  opacity-40"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(250, 173, 79, 1) 14.61%, rgba(221, 42, 123, 1) 39.38%, rgba(149, 55, 176, 1) 58.49%, rgba(81, 91, 212, 1) 85.39%)",
                  }}
                ></div>

                <div className="relative  w-[55px] h-[55px] flex items-center left-[35px] top-[15px] justify-center rounded-xl">
                  <img
                    src={feature.icon}
                    alt="icon"
                    className="text-white text-4xl"
                  />
                </div>
              </div>

              <h3 className="text-[22px] font-[700] mt-7">
                {feature.title}
              </h3>
              <p className="  text-[16px] mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="sm:flex sm:flex-row hidden gap-5 pt-10">
          {[
            "profile11.png",
            "profile22.png",
            "profile33.png",
            "profile44.png",
          ].map((src, index) => (
            <div
              key={index}
              className="group h-[195px] sm:h-[220px] md:h-[215px] relative shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl w-full mb-4 sm:mb-0"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={src}
                  className="w-full h-full object-cover transform transition-all -transform duration-500 group-hover:-translate-y-1/3"
                  alt="Profile"
                />
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      <img
        src="/show-case.png"
        className=" w-full flex sm:hidden bg-cover bg-center"
        alt="show case"
      />
    </section>
  );
};
