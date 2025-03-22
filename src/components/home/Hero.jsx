import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSun,
  FaRegMoon,
} from "react-icons/fa6";
import TextScroll from "../TextScroll";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";

export const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`relative border border-[#2c1662] overflow-hidden 
    ${darkMode ? "bg-[url('/dark-bg.png')]" : "bg-[url('/light-bg.png')]"}  
    bg-cover bg-center rounded-3xl mx-5 my-5 px-6 pt-6`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="container m-auto md:mb-20 mb-0 xl:mb-0 relative z-10 flex flex-col md:flex-row justify-between items-center  pt-12 lg:pt-12">
        <div className="max-w-[511px] mb-8   ">
          <h1 className="text-5xl font-bold mb-6">
          Your Digital Identity, One Smart Link!          </h1>
          <div className="flex gap-4 my-5">
            <span className="border p-2 rounded-full">
              <FaXTwitter className="text-2xl cursor-pointer hover: transition" />
            </span>
            <span className="border p-2 rounded-full">
              <FaLinkedin className="text-2xl cursor-pointer hover: transition" />
            </span>
            <span className="border p-2 rounded-full">
              <FaFacebook className="text-2xl cursor-pointer hover: transition" />
            </span>
            <span className="border p-2 rounded-full">
              <FaInstagram className="text-2xl cursor-pointer hover: transition" />
            </span>
          </div>
        </div>

        <div className="relative xl:mt-30 z-10 flex flex-col items-center max-w-full order-last md:order-none">
          <div className="z-20 transition-transform duration-500 ease-in-out hover:-translate-x-2 hover:-translate-y-1 hover:-rotate-50">
            <img
              src="/hand.png"
              alt="Robot hand pointing"
              className=" block xl:block md:hidden w-[300px] sm:w-[400px] md:w-[600px]"
            />
          </div>
        </div>

        <div className="max-w-[458px]  mb-8 md:mb-0 z-10 space-y-4  ">
          <p className="leading-relaxed ">
            Take control of your digital presence with Boitr — the ultimate
            platform to showcase everything that makes you, you. Bring all your
            social media, content, and links together in one beautiful,
            customizable page.
          </p>
          <Link
            to="https://user.boitr.com/"
            className="text-white bg-[#2c1662] hover:bg-[#2c136f] px-4 py-2 rounded-full text-sm font-bold inline-block transition"
          >
            Create Your Boitr Now →
          </Link>{" "}
          <img src="/users.png" className="w-[110px]" alt="users" />
          <p className="text-xs  mt-4">We have 100k+ customers worldwide</p>
        </div>
      </div>

      <div className="absolute z-0w-full">
        <TextScroll
          className="absolute  "
          darkMode={darkMode}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
    </header>
  );
};
