import React from "react";
import { FaHeadset, FaEnvelope, FaBook } from "react-icons/fa";

const supportOptions = [
  {
    title: "Instant Support",
    description:
      "Join our community Discord to get support from the Boitr founders and team.",
    buttonLabel: "Join Our Community",
    icon: <FaHeadset size={30} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-pink-500 to-orange-500",
  },
  {
    title: "Email",
    description:
      "Email us the team for support. For live support join our Discord.",
    buttonLabel: "Email Us",
    icon: <FaEnvelope size={30} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-purple-500 to-blue-500",
  },
  {
    title: "Support Articles",
    description:
      "Having an issue or need a tutorial? Read through our support articles.",
    buttonLabel: "Read Tutorials",
    icon: <FaBook size={30} className="text-white" />,
    bgGradient: "bg-gradient-to-r from-yellow-500 to-pink-500",
  },
];

const SupportOptions = ({ darkMode }) => {
  return (
    <section className="max-w-screen-xl mx-auto   m-auto">
      <div className="  text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          01
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2">
          We’re Here To Help You Every Step Of The Way
        </h1>
        <p className="  mt-4 max-w-2xl">
          Got a question? Need a hand? Our support team is ready to make your
          Boitr experience smooth and stress-free.
        </p>
      </div>

      {/* Support Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {supportOptions.map((option, index) => (
          <div
            key={index}
            className={` hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30  ${
              darkMode
                ? "bg-[#232323]  hover:bg-gradient-to-r from-gray-700 to-gray-900"
                : "bg-gray-200  hover:bg-gradient-to-r from-gray-100 to-gray-300"
            } p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg ${option.bgGradient} mb-4`}
            >
              {option.icon}
            </div>
            <h3 className="text-xl font-semibold">{option.title}</h3>
            <p className="  mt-2">{option.description}</p>
            <button
              className={`mt-4 px-4 py-2  text-white bg-[#2c1662] hover:bg-[#2c136f] rounded-lg transition-all duration-300 ${option.buttonColor}`}
            >
              {option.buttonLabel} →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportOptions;
