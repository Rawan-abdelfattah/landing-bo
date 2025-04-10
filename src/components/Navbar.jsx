import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCircle, FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? `${darkMode ? "" : ""}` : "";

  return (
    <nav
      className={`${
        darkMode ? "bg-[rgba(0,0,0,0.4)]" : "bg-white"
      } rounded-[45px] py-4 md:w-[90%] m-auto transition-all duration-500`}
    >
      <div className="mx-auto lg:md:px-[40px] px-5 flex items-center justify-between">
        <Link to="/">
          <img
            src={darkMode ? "/logo.png" : "/dark-logo.png"}
            className="w-[100px]"
            alt="logo"
          />
        </Link>

        <div className="flex items-center gap-6 pl-15">
          <div className="hidden lg:flex text-[18px] space-x-6">
            <Link to="/feature" className={isActive("/feature")}>
              Features
            </Link>
            <Link to="/pricing" className={isActive("/pricing")}>
              Pricing
            </Link>
            <Link to="/gallery" className={isActive("/gallery")}>
              Gallery
            </Link>
            <Link to="/blogs" className={isActive("/blogs")}>
              Blogs
            </Link>
            <Link to="/support" className={isActive("/support")}>
              Support
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex items-center h-6 rounded-full w-12 transition-colors duration-500 focus:outline-none"
            style={{
              backgroundColor: darkMode ? "white" : "black",
            }}
          >
            <span
              className="absolute transform transition-all duration-500"
              style={{
                left: darkMode ? "0.25rem" : "calc(100% - 1.25rem)",
                right: darkMode ? "calc(100% - 1.25rem)" : "0.25rem",
              }}
            >
              {darkMode ? (
                <FaCircle className="text-[#0091F8] text-lg" />
              ) : (
                <FaMoon className="text-[#0091F8] rotate-230 text-lg" />
              )}
            </span>
            <span className="sr-only">Toggle dark mode</span>
          </button>

          <Link
            to="https://user.boitr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white lg:flex items-center gap-2 hidden ${
              darkMode
                ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
            } px-[20px] py-[10px] rounded-full text-[16px] font-bold transition-all duration-500`}
          >
            Get Started Now
            <BsArrowUpRight />
          </Link>

          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-3 flex flex-col space-y-5 text-center text-[18px] py-4">
          <Link to="/feature" className={isActive("/feature")}>
            Features
          </Link>
          <Link to="/pricing" className={isActive("/pricing")}>
            Pricing
          </Link>
          <Link to="/gallery" className={isActive("/gallery")}>
            Gallery
          </Link>
          <Link to="/blogs" className={isActive("/blogs")}>
            Blogs
          </Link>
          <Link to="/support" className={isActive("/support")}>
            Support
          </Link>
          <div className="flex justify-center  ">
            <Link
              to="https://user.boitr.com/"
              className={`mt-3 mx-2 flex items-center gap-2 w-fit m-auto text-white ${
                darkMode
                  ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                  : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
              } px-[20px] py-[10px] rounded-full text-[16px] font-bold transition-all duration-500`}
            >
              Get Started Now <BsArrowUpRight />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
