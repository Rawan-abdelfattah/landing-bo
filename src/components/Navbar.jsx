import React, { useState } from "react";
import { FaSun, FaRegMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${darkMode ? "bg-[rgba(0,0,0,0.4)]" : "bg-white"} 
        rounded-full
    ${  menuOpen ? "rounded-t-2xl rounded-b-2xl" : "  rounded-full" } py-4 md:w-[95%] m-auto transition-all duration-500 `}
    >
      <div className="mx-auto lg:md:px-[40px] px-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <img
            src={darkMode ? "/logo.png" : "/dark-logo.png"}
            className="w-[100px]"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-6 pl-15">
          <div className="hidden lg:flex space-x-6">
            <Link to="/feature">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex items-center h-6 rounded-full w-12 transition-colors duration-500 focus:outline-none"
            style={{
              backgroundColor: darkMode ? "#3B82F6" : "#D1D5DB",
            }}
          >
            <span
              className="absolute transform transition-all duration-500"
              style={{
                left: darkMode ? "calc(100% - 1.25rem)" : "0.25rem",
                right: darkMode ? "0.25rem" : "calc(100% - 1.25rem)",
              }}
            >
              {darkMode ? (
                <FaSun className="text-yellow-300 text-sm" />
              ) : (
                <FaRegMoon className="text-gray-600 text-sm" />
              )}
            </span>
            <span className="sr-only">Toggle dark mode</span>
          </button>

          <Link
            to="https://user.boitr.com/"
            className={`text-white lg:flex hidden ${
              darkMode
                ? "bg-[#017CD4] hover:bg-[linear-gradient(90deg,rgba(56,155,233,0.5)_0%,rgba(177,63,188,0.5)_100%)]"
                : "bg-[#2c1662] hover:bg-[#2c136f]"
            } px-4 py-2  rounded-full text-sm font-bold transition-all duration-500`}
          >
            Get Started Now ↗
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
        <div className="lg:hidden mt-3 flex flex-col space-y-2 text-center py-4">
          <Link to="/feature">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/support">Support</Link>
          <Link
            to="https://user.boitr.com/"
            className={`mt-3 mx-2 inline-block text-white ${
              darkMode
                ? "bg-[#017CD4] hover:bg-[linear-gradient(90deg,rgba(56,155,233,0.5)_0%,rgba(177,63,188,0.5)_100%)]"
                : "bg-[#2c1662] hover:bg-[#2c136f]"
            } px-4 py-2 rounded-full text-sm font-bold transition-all duration-500`}
          >
            Get Started Now ↗
          </Link>
        </div>
      )}
    </nav>
  );
};
