import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaHeadset, FaEnvelope, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const supportOptions = [
  {
    title: "Instant Support",
    description:
      "Join our community Discord to get support from the Boitr founders and team.",
    buttonLabel: "Join Our Community",
    icon: "/support1.svg",
  },
  {
    title: "Email",
    description:
      "Email us the team for support. For live support join our Discord.",
    buttonLabel: "Email Us",
    icon: "/support2.svg",
  },
  {
    title: "Support Articles",
    description:
      "Having an issue or need a tutorial? Read through our support articles.",
    buttonLabel: "Read Tutorials",
    icon: "/support3.svg",
  },
];

const SupportOptions = ({ darkMode }) => {
  return (
    <section className="max-w-screen-xl mx-auto md:px-13 px-5">
      <div className="text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          }`}
        >
          01
        </h2>
        <div className="md:flex justify-between font-bold mb-6 py-X5">
               <h1 className="max-w-[588px] text-[32px] leading-[50px] md:text-[38px] font-[700] font-bold mt-2">
          We’re Here To Help You Every Step Of The Way
        </h1>
        <p className="mt-4 max-w-[490px] text-[18px] leading-[22px] font-[500]">
          Got a question? Need a hand? Our support team is ready to make your
          Boitr experience smooth and stress-free.
        </p>
        </div>
   
      </div> 
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col  align-left hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30  
          ${
            darkMode
              ? "bg-[#232323]"
              : "bg-[#F1F1F1]"
          } 
          p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500`}
          >
               <img src={option.icon} className='w-[50px] h-[50px] mb-4' alt="icon" />
            <span className="text-[22px] leading-[30px] font-[700]">{option.title}</span>

            <span className="mt-2 mb-5 text-[16px] leading-[20px] font-[500]">{option.description}</span>

            <Link
              className={`mt-auto inline-flex  items-center gap-2 px-[20px] py-[10px] text-white text-[16px] leading-[20px] font-[500] ${
                darkMode
                  ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                  : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
              }  
            rounded-full w-fit transition-all duration-500 `}
            >
              {option.buttonLabel} <BsArrowUpRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportOptions;
