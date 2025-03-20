import React from "react";
import {
  FaRegLightbulb,
  FaClipboardList,
  FaLifeRing,
  FaCogs,
  FaFont,
  FaSync,
  FaImage,
  FaEnvelope,
  FaWpforms,
  FaGlobe,
  FaTiktok,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";

const sections = [
  {
    title: "Welcome To Boiter",
    items: [
      { label: "Welcome To Boiter", icon: <FaClipboardList size={24} /> },
      { label: "Concepts", icon: <FaRegLightbulb size={24} /> },
      { label: "Dashboard Guide", icon: <FaCogs size={24} /> },
      { label: "Support", icon: <FaLifeRing size={24} /> },
    ],
  },
  {
    title: "Design Your Page",
    items: [
      { label: "Profile", icon: <FaClipboardList size={24} /> },
      { label: "How To Change Font", icon: <FaFont size={24} /> },
      { label: "How To Use Sync Blocks", icon: <FaSync size={24} /> },
      { label: "How To Change Link Thumbnails", icon: <FaImage size={24} /> },
      {
        label: "How To Add Email Signup  ",
        icon: <FaEnvelope size={24} />,
      },
      { label: "How To Add Contact Form", icon: <FaWpforms size={24} /> },
      { label: "Change Your Page Language", icon: <FaGlobe size={24} /> },
      { label: "Use Boiter With TikTok", icon: <FaTiktok size={24} /> },
      {
        label: "How To Use Boiter With YouTube",
        icon: <FaYoutube size={24} />,
      },
      {
        label: "How To Connect Mailchimp To Boiter",
        icon: <FaMailBulk size={24} />,
      },
    ],
  },
];

const SupportGrid = ({ darkMode }) => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          02
        </h2>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2">
          Your Boitr Journey Starts Here!
        </h1>

        {sections.map((section, index) => (
          <div key={index} className="mt-10">
            <h3 className="w-full py-4 text-lg font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 inline-block">
              {section.title}
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode
                      ? "bg-[#232323]  hover:bg-gradient-to-r from-gray-700 to-gray-900"
                      : "bg-gray-200 hover:bg-gradient-to-r from-gray-100 to-gray-300"
                  } p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-orange-500">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
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
