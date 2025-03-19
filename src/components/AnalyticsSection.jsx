import React from "react";
import TextScroll from "./TextScroll";

export const AnalyticsSection = ({ darkMode }) => {
  return (
    <> <section className="relative overflow-hidden py-16 px-6 md:px-20 my-20"> 
    <div className="relative z-0 w-full">
    <TextScroll 
      darkMode={darkMode}
      className={'mb-30'}
      text="One Link To Rule Them All – Connect, Share."
    />
  </div>  
       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="  max-w-lg">
          <p
            className={
              darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
            }
          >
            03
          </p>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Analyze Your Audience And <br /> Keep Your Followers Engaged
          </h2>
          <p className=" mb-6">
            Boitr is your all-in-one digital hub — a single, shareable link that
            brings together your social media, websites, and content on a sleek,
            customizable page.
          </p>
          <a
            href="#"
            className="text-white bg-blue-500 hover:bg-blue-600   px-6 py-3 rounded-full text-sm font-bold inline-block transition-all duration-300 ease-in-out"
          >
            Discover Our Features →
          </a>
          <img
            src={darkMode ? "/dark-icons.png" : "/light-icons.png"}
            alt="icons"
            className="pt-15"
          />
        </div>

        {/* Right Side - Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] md:w-[450px]">
            {/* Main Image */}
            <img
              src="/Frame4.png" // Replace with actual path
              alt="Main Dashboard"
              className="w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10"
            />
            {/* Secondary Image */}
            <img
              src="/Frame5.png" // Replace with actual path
              alt="Secondary Dashboard"
              className="absolute -bottom-8 -right-8 w-2/3 md:w-1/2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  
  );
};
