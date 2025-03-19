import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import TextScroll from "./TextScroll";

export const HeroSection = ({ darkMode, setDarkMode }) => {
  return (
    <header className="relative overflow-hidden bg-darkGray from-gray-900 via-purple-900 to-black rounded-3xl mx-5 my-5 px-6 pt-6">
      <div
        className={`flex flex-col md:flex-row justify-between items-center px-6 py-5 rounded-full transition ${
          darkMode ? "bg-[rgba(0,0,0,0.4)]" : "bg-[rgba(255,255,255,0.4)]"
        }`}
      >
        <a href="#" className="text-2xl font-bold">
          <img
            src={darkMode ? "/logo.png" : "/dark-logo.png"}
            className="w-[100px]"
            alt="logo"
          />
        </a>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="text-sm transition">
            Features
          </a>
          <a href="#" className="text-sm transition">
            Pricing
          </a>
          <a href="#" className="text-sm transition">
            Gallery
          </a>
          <a href="#" className="text-sm transition">
            Support
          </a>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
          <a
            href="#"
            className="text-white bg-blue-500 hover:bg-blue-600   px-4 py-2 rounded-full text-sm font-bold transition"
          >
            Get Started Now →
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 pt-12 lg:pt-2">
        {/* Left Content */}
        <div className="max-w-lg mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6">
            Your Digital Identity, One Smart Link!
          </h1>
          <div className="flex gap-4 my-5">
            <FaXTwitter className="text-2xl cursor-pointer hover: transition" />
            <FaLinkedin className="text-2xl cursor-pointer hover: transition" />
            <FaFacebook className="text-2xl cursor-pointer hover: transition" />
            <FaInstagram className="text-2xl cursor-pointer hover: transition" />
          </div>
          <p className="text-base mb-6 ">
            Take control of your digital presence with Boitr — the ultimate
            platform to showcase everything that makes you, you. Bring all your
            social media, content, and links together in one beautiful,
            customizable page.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-full order-last md:order-none">
          <div className="z-20 transition-transform duration-500 ease-in-out hover:-translate-x-2 hover:-translate-y-1 hover:-rotate-20">
            <img
              src="/hand.png"
              alt="Robot hand pointing"
              className="w-[300px] sm:w-[400px] md:w-[461px]"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-lg mb-8 p-6 md:mb-0 z-10 space-y-4">
          <p className="leading-relaxed ">
            Take control of your digital presence with Boitr — the ultimate
            platform to showcase everything that makes you, you. Bring all your
            social media, content, and links together in one beautiful,
            customizable page.
          </p>
          <img src="/users.png" className="w-[110px]" alt="users" />
          <a
            href="#"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-bold inline-block transition"
          >
            Create Your Boitr Now →
          </a>
          <p className="text-xs  mt-4">We have 100k+ customers worldwide</p>
        </div>
      </div>

      {/* Text Scroll (Ensured it's always below) */}
      <div className="absolute z-0 w-full">
        <TextScroll
        className='absolute'
          darkMode={darkMode}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
    </header>
  );
};
