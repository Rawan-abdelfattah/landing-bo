import React from "react";
import { Navbar } from "../Navbar";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`relative ${
        darkMode ? "border-[#017CD4]" : "border-[#2c1662]"
      } overflow-hidden rounded-[40px] md:rounded-3xl  m-[10px] md:m-[40px] px-6 pt-6 border`}
    >
      <div className="bg-outer-container">
        <div className={`${darkMode ? "bg-section-dark" : "bg-light"}`} />
      </div>
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="max-w-screen-xl mx-auto md:px-13 px-5     flex flex-col gap-5  pt-10 pb-20">
          <h3>Home / Gallery</h3>
          <h1 className="head-line">Gallery</h1>
        </div>
      </div>
    </header>
  );
};
