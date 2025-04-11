import React from "react";
import {
  Account,
  Design,
  Integrations,
  Marketing,
  Misc,
  Selling,
  Welcome,
} from "./supportData";

const SupportGrid = ({ darkMode }) => {
  return (
    <section className="max-w-screen-xl mx-auto md:px-13 px-5     py-10">
      <div className="  text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          02
        </h2>
        <h1 className="text-[32px] leading-[50px] md:text-[38px] font-[700] lg:text-4xl font-bold mt-2">
          Your Boitr Journey Starts Here!
        </h1>

        {Welcome.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <img
                    src={item.icon}
                    className="w-[50px] h-[50px]"
                    alt="icon"
                  />

                  <span className=" md:text-[22px] md:leading-[30px]  text-[20px] leading-[27px] font-[700] ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Design.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <img
                    src={item.icon}
                    className="w-[50px] h-[50px]"
                    alt="icon"
                  />

                  <span className=" md:text-[22px] md:leading-[30px]  text-[20px] leading-[27px] font-[700] ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Selling.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <img
                    src={item.icon}
                    className="w-[50px] h-[50px]"
                    alt="icon"
                  />

                  <span className=" md:text-[22px] md:leading-[30px]  text-[20px] leading-[27px] font-[700] ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Marketing.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <img
                    src={item.icon}
                    className="w-[50px] h-[50px]"
                    alt="icon"
                  />

                  <span className=" md:text-[22px] md:leading-[30px]  text-[20px] leading-[27px] font-[700] ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Integrations.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <img
                    src={item.icon}
                    className="w-[50px] h-[50px]"
                    alt="icon"
                  />

                  <span className=" md:text-[22px] md:leading-[30px]  text-[20px] leading-[27px] font-[700] ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Account.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <img
                    src={item.icon}
                    className="w-[50px] h-[50px]"
                    alt="icon"
                  />

                  <span className=" md:text-[22px] md:leading-[30px]  text-[20px] leading-[27px] font-[700] ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Misc.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <img
                    src={item.icon}
                    className="w-[50px] h-[50px]"
                    alt="icon"
                  />

                  <span className=" md:text-[22px] md:leading-[30px]  text-[20px] leading-[27px] font-[700] ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportGrid;
