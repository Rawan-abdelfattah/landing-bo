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
    <header className="border-[#00B7EF] border relative overflow-hidden bg-darkGray from-gray-900 via-purple-900 to-black rounded-3xl mx-5 my-5 px-6 pt-6">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className=" md:mb-20 mb-0 xl:mb-0 relative z-10 flex flex-col md:flex-row justify-between items-center px-6 pt-12 lg:pt-2">
        <div className="max-w-lg mb-8 md:mb-0 md:pb-[150px] ">
          <h1 className="text-5xl font-bold mb-6">
            Your Digital Identity, One Smart Link!
          </h1>
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
          <div className="z-20 transition-transform duration-500 ease-in-out hover:-translate-x-2 hover:-translate-y-1 hover:-rotate-20">
            <img
              src="/hand.png"
              alt="Robot hand pointing"
              className=" block xl:block md:hidden w-[300px] sm:w-[400px] md:w-[461px]"
            />
          </div>
        </div>

        <div className="max-w-lg mb-8 md:mb-0 z-10 space-y-4 md:pb-[90px]">
          <p className="leading-relaxed ">
            Take control of your digital presence with Boitr — the ultimate
            platform to showcase everything that makes you, you. Bring all your
            social media, content, and links together in one beautiful,
            customizable page.
          </p>
          <Link
            to="https://user.boitr.com/"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-bold inline-block transition"
          >
            Create Your Boitr Now →
          </Link>          <img src="/users.png" className="w-[110px]" alt="users" />

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
