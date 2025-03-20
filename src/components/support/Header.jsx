import React from "react";
import { Navbar } from "../Navbar";

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="border-[#00B7EF] border relative overflow-hidden bg-darkGray from-gray-900 via-purple-900 to-black rounded-3xl mx-5 my-5 px-6 pt-6">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex flex-col gap-5 pl-5 pt-10 pb-20" ><h3>Home / Support</h3>
      <h1 className="head-line">Support</h1></div>
      
    </header>
  );
};
