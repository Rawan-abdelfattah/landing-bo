import React from "react";
import { FaHeadset, FaEnvelope, FaBook } from "react-icons/fa";

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
    <section className="max-w-screen-xl mx-auto md:px-20 px-5">
      <div className="text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          }`}
        >
          01
        </h2>
        <h1 className="text-[36px] md:text-[38px] lg:text-4xl font-bold mt-2">
          We’re Here To Help You Every Step Of The Way
        </h1>
        <p className="mt-4 max-w-2xl">
          Got a question? Need a hand? Our support team is ready to make your
          Boitr experience smooth and stress-free.
        </p>
      </div>

      {/* Support Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col  align-left hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30  
          ${
            darkMode
              ? "bg-[#232323] hover:bg-gradient-to-r from-gray-700 to-gray-900"
              : "bg-gray-200 hover:bg-gradient-to-r from-gray-100 to-gray-300"
          } 
          p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500`}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4">
              <img src={option.icon} alt="icon" />
            </div>
            <h3 className="text-xl font-semibold">{option.title}</h3>

            <p className="mt-2 mb-5">{option.description}</p>

            <button
              className={`mt-auto  px-4 py-2 text-white ${
                darkMode
                  ? "bg-[#017CD4] hover:bg-[linear-gradient(90deg,rgba(56,155,233,0.5)_0%,rgba(177,63,188,0.5)_100%)]"
                  : "bg-[#2c1662] hover:bg-[#2c136f]"
              }  
            rounded-full transition-all duration-500 ${option.buttonColor}`}
            >
              {option.buttonLabel} ↗
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportOptions;
