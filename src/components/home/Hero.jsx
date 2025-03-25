import { FaInstagram, FaDribbble, FaGithub } from "react-icons/fa";

import { Navbar } from "../Navbar";
import TextScroll from "../TextScroll";
import { Link } from "react-router-dom";

export const Hero = ({ darkMode, setDarkMode }) => {
  return ( 
    <header
      className={`relative bg-darkG ray border  overflow-hidden 
  ${darkMode ? "bg-[url('/dark-bg.png')] border-[#017CD4]" : "bg-[url('/light-bg.png')] border-[#2c1662]"}  
  bg-cover bg-center rounded-3xl mx-5 my-5 px-6 pt-6`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className=" max-w-screen-xl mx-auto md:px-20 px-5 flex flex-col md:flex-row justify-between items-center pt-12">
        <div className=" max-w-[458px]  md:mb-30 mb-5">
          <h1 className="text-4xl font-bold ">
            Your Digital Identity, One Smart Link!
          </h1>
          <div className="flex gap-4 my-5">
            <span className="border p-2 rounded-full ">
              <FaInstagram className="text-2xl cursor-pointer" />
            </span>
            <span className="border p-2 rounded-full ">
              <FaDribbble className="text-2xl cursor-pointer" />
            </span>
            <span className="border p-2 rounded-full ">
              <FaGithub className="text-2xl cursor-pointer" />
            </span>
          </div>
        </div>

        <div className="relative xl:mt-30 z-10 flex flex-col items-center max-w-full order-last md:order-none">
          <div className="z-20 transition-all -transform duration-500 ease-in-out hover:-translate-x-2 hover:-translate-y-1 hover:-rotate-50">
            <img
              src="/hand.png"
              alt="Robot hand pointing"
              className=" block xl:block md:hidden w-[300px] sm:w-[400px] md:w-[600px]"
            />
          </div>
        </div>

        <div className=" max-w-[408px]   space-y-4 md:mb-25 lg:mb-15 mb-5">
          <p>
            Take control of your digital presence with Boitr — the ultimate
            platform to showcase everything that makes you, you.
          </p>
          <Link
            to="https://user.boitr.com/"
            className={` transition-all duration-500 ${darkMode ? 'bg-[#017CD4] hover:bg-[linear-gradient(90deg,rgba(56,155,233,0.5)_0%,rgba(177,63,188,0.5)_100%)]'  :'bg-[#2c1662] hover:bg-[#2c136f]'}  text-white   px-4 py-2 rounded-full text-sm font-bold inline-block transition-all`}
          >
            Create Your Boitr Now →
          </Link>{" "}
          <img src="/users.png" className="w-[110px]" alt="users" />
          <p className="text-xs">We have 18k+ customers worldwide</p>
        </div>
      </div>

      <div className="absolute w-full text-center  text-2xl font-bold">
        One Link To Rule Them All – Connect, Share.
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
