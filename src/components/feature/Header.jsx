import React from "react";
import { Navbar } from "../Navbar";

export const Header = ({ darkMode, setDarkMode }) => {
  return ( 
    <header
      className={` border bg-cover bg-center ${
        darkMode
          ? "bg-[url('/dark-pages-bg.png')] border-[#017CD4]"
          : "bg-[url('/light-pages-bg.png')] border-[#2c1662]"
      }   rounded-3xl px-8 m-[40px] pt-6`}
    >
        
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-screen-xl mx-auto md:px-13 px-5     flex flex-col gap-5 pt-10 pb-20">
        <h3>Home / Feature</h3>
        <h1 className="head-line">Feature</h1>
      </div>
    </header>
  );
};
