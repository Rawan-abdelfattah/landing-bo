import React from "react";
import { Link } from "react-router-dom";
import TextScroll from "./TextScroll";
import { BsArrowUpRight } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoInstagramAlt } from "react-icons/bi";

export const Footer = ({ darkMode }) => {
  return (
    <footer
      className={` border relative overflow-hidden ${
        darkMode ? "  border-[#017CD4] " : "  border-[#2c1662]"
      }   bg-cover bg-center rounded-[40px] md:rounded-3xl m-[10px] md:m-[40px] py-10 md:px-13 px-5`}
    >
      <div className="bg-outer-container">
        <div
          className={`${darkMode ? "bg-dark  " : "bg-light"} 
        `}
        />
      </div>
      <div className="relative z-10 lg:flex lg:flex-row max-w-screen-xl mx-auto md:px-13 px-5 lg:text-left lg:justify-between md:flex md:flex-col md:items-center md:justify-center md:text-center text-center  justify-between mb-3">
        <div className="mb-8 md:mb-0 ">
          <Link to="/" className="text-2xl font-bold  mb-4 inline-block">
            <img
              src={darkMode ? "/logo.png" : "/dark-logo.png"}
              className="w-[158px]"
              alt="logo"
            />
          </Link>
          <p className="text-xs my-4 max-w-[460px] text-[18px] ">
            Boitr is collecting links and attractively displaying them, to
            manage products the services are easy, and will not be connected to
            a secure and effective payment gateway.
          </p>

          <Link
            to="https://user.boitr.com/"
            className={`transition-all duration-500  inline-flex  items-center gap-2 ${
              darkMode
                ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
            }  text-white px-4 py-2 rounded-full text-sm font-bold mt-2  text-[16px]`}
          > 
            Get Started Now <BsArrowUpRight />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
           <div>
            <h4 className="font-bold mb-4 text-[20px]">Pages</h4>
            <ul className="text-[18px]">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/feature">Features</Link>
              </li>
              <li className="mb-2">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="mb-2">
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-[20px]">Trust &amp; Legal</h4>
            <ul className="text-[18px]">
              <li className="mb-2 ">
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold mb-4 text-[20px]">
              Subscribe To Our Newsletter
            </h4>
            <div className=" border-b max-w-[285px] m-auto my-4 pb-5 justify-center">
              <input
                type="email"
                placeholder="Email Address"
                className={`border w-full  rounded-full px-4 py-2 text-sm w-48  text-[16px]  ${
                  darkMode ? "placeholder-white" : "placeholder-black"
                } `}
              />
              <Link
                href="#"
                className={`transition-all duration-300 ease-in-out w-full flex items-center gap-2 justify-center ${
                  darkMode
                    ? "bg-[#017CD4] hover:bg-gradient-to-r from-[#389BE9]/50 to-[#B13FBC]/50"
                    : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
                }
    text-white px-6 py-2 rounded-full text-sm font-[500] mt-2 shadow-md hover:shadow-lg text-[16px]`}
              >
                {" "}
                Subscribe <BsArrowUpRight />
              </Link>
            </div>
            <div className=" max-w-[285px] m-auto border-b my-4 flex md:justify-start justify-center gap-2  pb-5 ">
              <MdLanguage className="w-6 h-6" /> Arabic
            </div>
            <div className="flex md:justify-start justify-center gap-5 mt-6">
              <FaLinkedin  className="w-5 h-5"  />
              <FaFacebook  className="w-5 h-5"  />
              <RiWhatsappFill  className="w-6 h-6"  />
              <BiLogoInstagramAlt  
                className="w-6 h-6 rounded-full"
                
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl md:mx-13 relative overflow-hidden">
        <TextScroll
          darkMode={darkMode}
          text="One Link To Rule Them All – Connect, Share. One Link To Rule Them All – Connect, Share.One Link To Rule Them All – Connect, Share."
        />
      </div>
      <div className="relative z-10 text-center text-xs pt-6 border-t text-[18px] ">
        Boitr © Copyright 2025. All rights reserved
      </div>
    </footer>
  );
};
