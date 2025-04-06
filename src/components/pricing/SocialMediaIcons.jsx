import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const SocialMediaIcons = ({ darkMode }) => {
  return (
           <section className={`py-12 px-6 ${darkMode ? "bg-[#161616]" : ""}`}>

      <div className="max-w-4xl mx-auto text-center">
      <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          }`}
        >02</h2>
        <h2 className="text-[36px] leading-[50px] md:text-[38px] font-[700] font-bold mb-4">
          Ready To Elevate Your Brand? Join Boitr Today!
        </h2>
        <p className="text-[18px] font-[500] leading-[22px]   max-w-2xl mx-auto mb-6">
          Discover the ultimate platform built for creators and brands who want
          to grow smarter and faster. Track your audience, boost engagement, and
          maximize your revenue — all in one place.
        </p>
        <button className={`text-[16px] font-[500] leading-[22px] inline-flex  items-center gap-2 ${darkMode ? 'bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]'  :'bg-[#2c1662] hover:bg-[#2c136f]'}  text-white py-3 px-6 rounded-full transition duration-500`}>
          Create Your Page Now <BsArrowUpRight />
        </button>     <img
          src={  "social_media.gif"}
          alt="icons"
          className="w-[600px] m-auto  pt-15"
        />  
    
      </div>
    </section>
  );
};

export default SocialMediaIcons;
