import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const features = [
  {
    id: "01",
    title: "AUTO-SYNC",
    description:
      "Keep your content always fresh and up-to-date without the extra effort. Boitr automatically syncs with your social media and platforms so your audience always sees the latest.",
    img: "1.gif",
  },
  {
    id: "02",
    title: "Organize With Folders",
    description:
      "Easily manage and categorize your content by using folders, making it simpler to organize your links.",
    img: "2.png",
  },
  {
    id: "03",
    title: "Publish Blog Posts",
    description:
      "Easily manage and categorize your content by using folders, making it simpler to organize your links.",
    img: "3.png",
  },
  {
    id: "04",
    title: "Ditch the Boring Links",
    description:
      "Easily manage and categorize your content by using folders, making it simpler to organize your links.",
    img: "4.png",
  },
  {
    id: "05",
    title: "Start Building Your Email List",
    description: "Easily manage and categorize your content by using folders ",
    img: "5.png",
  },
  {
    id: "06",
    title: "Make Yours Custom Domain",
    description:
      "Easily manage and categorize your content by using folders, making it simpler to organize your links.",
    img: "6.png",
  },
];

export const Features = ({ darkMode }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredImg, setHoveredImg] = useState(false);

  return (
    <section className="max-w-screen-xl mx-auto md:px-13 px-5 py-20 relative">
      <div className="   text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          01
        </h2>
        <div className=" md:flex justify-between font-bold mb-6 py-5">
          <h2 className="max-w-[588px]  text-[34px] leading-[50px] md:text-[38px] font-[700] pr-5">
            Powerful Features To Elevate Your Digital Presence
          </h2>
          <div className="  space-y-4">
            <p className="max-w-[482px]  text-[18px] font-[500]">
              Boitr isn’t just a link — it’s a complete platform designed to
              help you showcase, organize, and grow your online world.
            </p>

            <Link
              to="/feature"
              className={`${
                darkMode
                  ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                  : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
              }  text-white px-4 py-2 rounded-full text-sm font-bold  inline-flex  items-center gap-2 transition-all duration-500`}
            >
              Discover Our Features
            </Link>
          </div>
        </div>
      </div>
      <div>
        {features.map((feature, index) => {
          const isHovered =
            hoveredFeature === feature.id ||
            (hoveredFeature === null && index === 0);

          return (
            <>
              <React.Fragment key={feature.id}>
                <div
                  className={`
    relative rounded-2xl p-4 my-2 cursor-pointer transition-all duration-700 ease-in-out
    bg-cover bg-center
    ${
      darkMode
        ? "hover:border-[#0163A8] hover:text-white"
        : "hover:border-[#2c136f]"
    }
    hover:border hover:rounded-2xl
    ${
      isHovered
        ? `${
            darkMode
              ? "bg-[url('/dark-faq.png')] border border-[#0163A8]"
              : "bg-[url('/light-faq.png')] border border-[#2c136f]"
          } py-10 my-6`
        : "bg-transparent "
    }
  `}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center  relative gap-4">
                    <span className="text-[26px] font-[700]">
                      <span
                        className={`${
                          darkMode
                            ? "text-outline-dark-h2"
                            : "text-outline-light-h2"
                        } text-xl font-bold px-1`}
                      >
                        {feature.id}
                      </span>
                      <br />
                      {feature.title}
                    </span>
                    <p
                      className={`lg:w-[500px] md:ml-[70px] text-[16px] font-[500] max-w-lg transition-all duration-500 ease-in-out ${
                        isHovered ? "flex" : "hidden"
                      }`}
                    >
                      {feature.description}
                    </p>
                    <div className="ml-auto flex items-center">
                      <FaArrowUpLong
                        className={`md:flex hidden transition-all w-[37px] h-[25px] duration-500 ease-in-out ${
                          isHovered ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    <div className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex justify-end items-center w-full p-5">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className={`hidden xl:block w-[210px] h-[200px] rounded-xl shadow-lg transition-all duration-700 ease-in-out ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                        onMouseEnter={() => setHoveredImg(true)}
                        onMouseLeave={() => setHoveredImg(false)}
                        style={{
                          animation: hoveredImg
                            ? "vibrate 0.3s ease-in-out infinite"
                            : "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Only show <hr /> if it's not the last item */}
                {index !== features.length - 1 && <hr />}
              </React.Fragment>
            </>
          );
        })}
      </div>
    </section>
  );
};
