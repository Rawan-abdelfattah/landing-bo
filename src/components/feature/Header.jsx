import React from "react";
import { Navbar } from "../Navbar";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`border-[#2c1662] border bg-cover bg-center ${
        darkMode
          ? "bg-[url('/dark-pages-bg.png')]"
          : "bg-[url('/light-pages-bg.png')]"
      }   rounded-3xl mx-5 my-5 px-6 pt-6  `}
    >
        
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-screen-xl mx-auto md:px-20 px-5     flex flex-col gap-5 pt-10 pb-20">
        <h3>Home / Feature</h3>
        <h1 className="head-line">Feature</h1>
      </div>
    </header>
  );
};
