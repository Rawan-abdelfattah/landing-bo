import { FaInstagram, FaDribbble, FaGithub } from "react-icons/fa";
import { Navbar } from "../Navbar";
import TextScroll from "../TextScroll";
import { Link } from "react-router-dom";
import { FaBehance } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";

export const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <header
    className={`relative ${
      darkMode ? "border-[#017CD4]" : "border-[#2c1662]"
    } overflow-hidden rounded-3xl m-[40px] px-6 pt-6 border`}
  >
    <div className="bg-outer-container">
      <div className={`${darkMode ? "bg-dark" : "bg-light"}`} />
    </div>
    <div className="relative z-10">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
  
      <div className="max-w-screen-xl mx-auto md:px-13 px-2 flex flex-col md:flex-row justify-between items-center md:items-center text-center md:text-left pt-12 lg:pt-1">
        <div className="max-w-[608px] md:mb-30 lg:mb-40 mb-5 mx-auto md:mx-0">
          <span className="text-[36px] leading-[65px] md:text-[52px] font-bold ">
            Your Digital Identity, One Smart Link!
          </span>
          <div className="flex gap-4 my-5 justify-center md:justify-start">
            <span className="border p-2 rounded-full">
              <FaInstagram className="cursor-pointer w-[15px]" />
            </span>
            <span className="border p-2 rounded-full">
              <FaDribbble className="cursor-pointer w-[15px]" />
            </span>
            <span className="border p-2 rounded-full">
              <FaBehance className="cursor-pointer w-[15px]" />
            </span>
            <span className="border p-2 rounded-full">
              <FaGithub className="cursor-pointer w-[15px]" />
            </span>
          </div>
        </div>
  
        <div className="z-10 md:hidden xl:flex flex flex-col items-center order-last md:order-none min-h-[300px]">
          <div className="w-full h-[400px] md:h-[510px]">
            <img
              src="/hand.png"
              alt="Robot hand pointing"
              className="absolute bottom-[-13px] left-1/2 -translate-x-1/2 w-[440px] transition-all duration-1000 ease-in-out hover:translate-y-1 hover:-rotate-[25deg] origin-bottom"
            />
          </div>
        </div>
  
        <div className="max-w-[440px] space-y-4 md:mb-25 lg:mb-25 mb-5 mx-auto md:mx-0">
          <p className="text-[16px]">
          Take control of your digital presence with Boitr — the ultimate platform to showcase everything that makes you, you. Bring all your social media, content, and links together in one beautiful, customizable page. 
          </p>
          <Link
            to="https://user.boitr.com/"
            className={`transition-all duration-500 ${
              darkMode
                ? "bg-[#017CD4] hover:bg-[linear-gradient(90deg,rgba(56,155,233,0.5)_0%,rgba(177,63,188,0.5)_100%)]"
                : "bg-[#2c1662] hover:bg-[#2c136f]"
            } text-white px-4 py-2 rounded-full text-[16px] font-bold  inline-flex  items-center gap-2`}
          >
            Create Your Boitr Now <BsArrowUpRight />
          </Link>
          <img
            src="/users.png"
            className="w-[110px] mt-4 mb-3  mx-auto md:mx-0"
            alt="users"
          />
          <p className="text-[18px]">We have 18k+ customers worldwide</p>
        </div>
      </div>
  
      <TextScroll
        className="absolute"
        darkMode={darkMode}
        text="One Link To Rule Them All – Connect, Share."
      />
    </div>
  </header>
  );
};
