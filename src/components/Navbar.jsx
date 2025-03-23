import React, { useState } from "react";
import { FaSun, FaRegMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        darkMode ? "bg-[rgba(0,0,0,0.4)]" : "bg-white"
      } px-6 py-4 transition md:rounded-full rounded-xl`}
    >
      <div className="max-w-screen-xl mx-auto lg:px-20  flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <img
            src={darkMode ? "/logo.png" : "/dark-logo.png"}
            className="w-[100px]"
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex space-x-6 ">
            <Link to="/feature">
              Features
            </Link>
            <Link to="/pricing">
              Pricing
            </Link>
            <Link to="/gallery">
              Gallery
            </Link>
            <Link to="/support">
              Support
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full text-xl bg-transparent border border-gray-400 hover:bg-gray-600 transition"
          >
            {darkMode ? (
              <FaSun className="text-white" />
            ) : (
              <FaRegMoon className="text-gray-800" />
            )}
          </button>
          <Link
            to="https://user.boitr.com/"
            className="text-white bg-[#2c1662] hover:bg-[#2c136f] px-4 py-2 md:block hidden rounded-full text-sm font-bold transition"
          >
            Get Started Now →
          </Link>
          <button
            className="sm:hidden p-2 text-white focus:outline-none"
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
        <div className="sm:hidden mt-3 flex flex-col space-y-2 text-center py-4">
          <Link to="/feature">
            Features
          </Link>
          <Link to="/pricing">
            Pricing
          </Link>
          <Link to="/gallery">
            Gallery
          </Link>
          <Link to="/support">
            Support
          </Link>
          <Link
            to="https://user.boitr.com/"
            className="mt-3 inline-block text-white bg-[#2c1662] hover:bg-[#2c136f] px-4 py-2 rounded-full text-sm font-bold transition"
          >
            Get Started Now →
          </Link>
        </div>
      )}
    </nav>
  );
};
