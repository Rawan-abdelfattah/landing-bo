import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { profilesData } from "./profilesData";

const GalleryGridCard = ({
  name,
  followers,
  profileImg,
  mainImg,
  darkMode,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    if (window.innerWidth <= 768) {
      setIsClicked(true); 
      setTimeout(() => {
        setIsClicked(false);
      }, 1500);
    }
  };

  return (
    <div className="group md:h-[446px] h-[546px] relative rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl md:w-[270px]">
      <div
        className={`rounded-t-2xl ${
          darkMode ? "bg-[#232323] text-white" : "bg-[#F1F1F1] text-black"
        } p-4 flex items-center`}
      >
        <img
          src={profileImg}
          className="w-10 h-10 rounded-full mr-3"
          alt="GalleryGrid"
        />
        <div>
          <h3 className="text-[20px] leading-[25px] font-[700]">{name}</h3>
          <p className="text-[14px] font-[500]">{followers}</p>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onClick={handleImageClick}
      >
        <img
          src={mainImg}
          className={`w-full h-full object-cover transform transition-all duration-500
            ${isClicked ? "-translate-y-1/3" : ""}
            group-hover:-translate-y-1/3`}
          alt="Main"
        />
      </div>
    </div>
  );
};
const GalleryGrid = ({ darkMode }) => {

  return (
    <div className="max-w-screen-xl mx-auto md:px-13 px-5    ">
      <div className=" text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          01
        </h2>
        <div className="md:flex justify-between font-bold mb-6 py-X5">
          <h2 className="text-[32px] leading-[50px] font-[700] md:text-[38px]  ">
            See How Others Shine
          </h2>
          <div className="mt-6 md:mt-0 md:max-w-xl ">
            <p className=" text-[18px] leading-[22px] font-[500] max-w-[490px] mb-4">
              Discover how creators, brands, and businesses are using our
              platform to shine. Get inspired by real-world creativity and
              style.
            </p>
            <Link
              to="https://user.boitr.com/"
              className={`text-[16px] font-[500] leading-[22px] ${
                darkMode
                  ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                  : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
              }   text-white px-[20px] py-[10px] rounded-full text-sm font-bold   inline-flex  items-center gap-2 transition-all duration-500`}
            >
              Join Us Now <BsArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap md:gap-3 gap-5 xl:justify-between  justify-center py-[40px]">
          {profilesData.map((profile, index) => (
            <GalleryGridCard darkMode={darkMode} key={index} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
