import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { plansData } from "./plansData";


const Plans = ({ darkMode }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      setIsMobileOpen((prev) => !prev);
    }
  };
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          }`}
        >
          01
        </h2>
        <div className="md:flex justify-between font-bold mb-6 py-5">
          <h2 className="max-w-[588px] text-[32px] leading-[50px] md:text-[38px] font-[700] ">
            Choose The Perfect Plan For You
          </h2>
          <p className="max-w-[482px] text-[18px] font-[500] leading-[22px]">
            Whether you're just getting started or ready to take your digital
            presence to the next level, Boitr has a plan designed for your
            needs.
          </p>
        </div>
      </div>
      <div
      onClick={handleToggle}
      className={`max-w-6xl mx-auto rounded-[16px] p-5 transition-all duration-500 overflow-hidden 
        bg-cover bg-center group relative cursor-pointer
        ${isMobileOpen && "bg-[url('/pricing-hover-bg.png')]" }
        ${darkMode ? "bg-[#161616]" : "bg-gray-100"} 
        hover:bg-[url('/pricing-hover-bg.png')] hover:bg-cover hover:bg-center`}
    >
      <p className="text-[16px] font-[500] leading-[22px]">Free Plan</p>
      <h2 className="text-[32px] font-[700] leading-[40px] my-5">$0 / Forever</h2>
      <p className="text-[18px] font-[500] leading-[22px]">
        Perfect for individuals exploring their digital presence.
      </p>

      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out 
          ${isMobileOpen ? "max-h-60 py-3" : "max-h-0"}
          group-hover:max-h-60 group-hover:py-3`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            ["Unlimited Links", "Social Icons", "Email Collection"],
            ["Link Clicks Analytics", "Custom Theme", "Link Folders"],
          ].map((column, colIdx) => (
            <ul key={colIdx} className="space-y-1">
              {column.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex text-[18px] font-[500] leading-[22px] gap-2"
                >
                  <img src="/pricing-icon.svg" alt="icon" /> {feature}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            className={`text-white text-[16px] font-[500] leading-[22px]  ${
              darkMode
                ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
            }  px-[20px] py-[10px] mt-5 rounded-full hover:bg-blue-600 transition-all duration-500`}
          >
            Create Your Page Now For Free
          </button>
        </div>
      </div>
    </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className={`rounded-[16px] shadow-lg hover:shadow-xl transition-all duration-500 border ${
              darkMode ? "border-[#017CD4]  " : "border-[#2c1662] "
            }  overflow-hidden flex flex-col`}
          >
            <div className={`p-6 text-white ${plan.gradient}`}>
              <h3 className="text-[16px] font-[500] leading-[22px] mb-3">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-[32px] font-[700] leading-[40px] ">
                {plan.price}
              </p>
              <p className=" mt-1 text-[16px] font-[500] leading-[22px] ">
                {plan.description}
              </p>
            </div>

            <div className="p-6 flex-1 ">
              {plan.features.length > 0 ? (
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[18px] font-[500] leading-[22px] "
                    >
                      <img src="/pricing-icon.svg" alt="icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Limited features</p>
              )}
            </div>

            <div className="p-4  text-center">
              <button
                className={`text-[16px] font-[500] leading-[22px]  w-full flex justify-center items-center gap-2 transition duration-300 ease-in-out  ${
                  darkMode
                    ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                    : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
                }  text-white font-[700] py-2 rounded-full transition-all duration-500`}
              >
                Get Started Now <BsArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
