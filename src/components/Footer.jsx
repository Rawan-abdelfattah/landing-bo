import React from "react";
 import { Link } from "react-router-dom";
import TextScroll from "./TextScroll";

export const Footer = ({ darkMode }) => {
  return (
    <footer className="border-[#00B7EF] border relative overflow-hidden  bg-darkGray rounded-3xl mx-5 my-5 py-10 px-6">
      <div className=" lg:flex lg:flex-row  lg:text-left lg:justify-between md:flex md:flex-col md:items-center md:justify-center md:text-center text-center  justify-between mb-3">
        <div className="mb-8 md:mb-0 ">
          <Link to="/" className="text-2xl font-bold  mb-4 inline-block">
            <img src={darkMode ?"/logo.png" :"/dark-logo.png"} className="w-[158px]" alt="logo" />
          </Link>
          <p className="text-xs my-4 w-full lg:w-auto">
            Boitr is collecting links and effortlessly displaying them, to
            enhance presence, fix growth, and stay, and get the word out. Get
            started today!
          </p>

          <Link
            to="https://user.boitr.com/"
            className="bg-blue-500 hover:bg-blue-600  text-white px-4 py-2 rounded-full text-sm font-bold mt-2 inline-block"
          >
            Get Started Now →
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h4 className="font-bold mb-4">Pages</h4>
            <ul>
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
            <h4 className="font-bold mb-4">Trust &amp; Legal</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold mb-4">Subscribe To Our Newsletter</h4>
            <div className=" mt-4   justify-center">
              <input
                type="email"
                placeholder="Email Address"
                className={`bg-white w-full  rounded-full px-4 py-2 text-sm w-48 placeholder-gray-500`}
              />
              <a
                href="#"
                className="w-full bg-blue-500 hover:bg-blue-600  text-white px-4 py-2 rounded-full text-sm font-bold mt-2 inline-block"
              >
                Subscribe →{" "}
              </a>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <a
                href="#"
                className={` ${darkMode ? 'bg-black':'bg-white'} w-8 h-8  rounded-full flex items-center justify-center`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className={` ${darkMode ? 'bg-black':'bg-white'} w-8 h-8  rounded-full flex items-center justify-center`}
              >
                f
              </a>
              <a
                href="#"
                className={` ${darkMode ? 'bg-black':'bg-white'} w-8 h-8  rounded-full flex items-center justify-center`}
              >
                X
              </a>
              <a
                href="#"
                className={` ${darkMode ? 'bg-black':'bg-white'} w-8 h-8  rounded-full flex items-center justify-center`}
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 w-full">
        <TextScroll
          darkMode={darkMode}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
      <div className="text-center text-xs pt-6 border-t  ">
        Boitr © Copyright 2025. All rights reserved
      </div>
    </footer>
  );
};
