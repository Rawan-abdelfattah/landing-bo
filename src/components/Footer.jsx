import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-darkGray rounded-3xl mx-5 my-5 py-10 px-6">
      <div className="flex flex-col md:flex-row justify-between mb-12">
        <div className="max-w-md mb-8 md:mb-0">
          <a href="#" className="text-2xl font-bold  mb-4 inline-block">
            Boltr
          </a>
          <p className="text-xs  my-4">
            Boltr is collecting links and effortlessly displaying them, to
            enhance presence, fix growth, and stay, and get the word out. Get
            started today!
          </p>
          <a
            href="#"
            className="bg-primary   px-4 py-2 rounded-full text-sm font-bold mt-2 inline-block"
          >
            Get Started Now →
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h4 className="font-bold mb-4">Pages</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">Features</a>
              </li>
              <li className="mb-2">
                <a href="#">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#">Gallery</a>
              </li>
              <li className="mb-2">
                <a href="#">Support</a>
              </li>
              <li className="mb-2">
                <a href="#">Blog</a>
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
          <div>
            <h4 className="font-bold mb-4">Subscribe To Our Newsletter</h4>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-800 rounded-l-full px-4 py-2 text-sm w-48"
              />
              <button className="bg-primary rounded-r-full px-4">
                Subscribe →
              </button>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
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
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
              >
                f
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
              >
                X
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs pt-6 border-t border-gray-800">
        Boltr © Copyright 2025. All rights reserved
      </div>
    </footer>
  );
};
