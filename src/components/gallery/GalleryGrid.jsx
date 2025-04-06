import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const GalleryGridCard = ({
  name,
  followers,
  profileImg,
  mainImg,
  darkMode,
}) => {
  return (
    <div className="group h-[446px] relative  rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl w-[270px]">
      <div
        className={` rounded-t-2xl ${
          darkMode ? "bg-[#232323] text-white  " : "bg-[#F1F1F1] text-black "
        } p-4 flex items-center`}
      >
        <img
          src={profileImg}
          className="w-10 h-10 rounded-full mr-3"
          alt="GalleryGrid"
        />
        <div>
          <h3 className="text-[20px] leading-[25px] font-[700]  ">{name}</h3>
          <p className="text-[14px] font-[500] ">{followers}</p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <img
          src={mainImg}
          className="w-full h-full object-cover transform transition-all -transform duration-500 group-hover:-translate-y-1/3"
          alt="Main"
        />
      </div>
    </div>
  );
};

const GalleryGrid = ({ darkMode }) => {
  const profiles = [
    {
      name: "Emma Clarke",
      role: "Digital Marketer",
      profileImg: "/profile1-user.png",
      mainImg: "/profile1.png",
      followers: "150K Follower",
    },
    {
      name: "Sophia Lane",
      role: "Content Creator",
      profileImg: "/profile2-user.png",
      mainImg: "/profile2.png",
      followers: "150K Follower",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/profile3-user.png",
      mainImg: "/profile3.png",
      followers: "150K Follower",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/profile4-user.png",
      mainImg: "/profile4.png",
      followers: "150K Follower",
    },
    {
      name: "Emma Clarke",
      role: "Digital Marketer",
      profileImg: "/profile5-user.png",
      mainImg: "/profile5.png",
      followers: "150K Follower",
    },
    {
      name: "Sophia Lane",
      role: "Content Creator",
      profileImg: "/profile6-user.png",
      mainImg: "/profile6.png",
      followers: "150K Follower",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/profile7-user.png",
      mainImg: "/profile7.png",
      followers: "150K Follower",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/profile8-user.png",
      mainImg: "/profile8.png",
      followers: "150K Follower",
    },
  ];

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
          <h2 className="text-[36px] leading-[50px] font-[700] md:text-[38px]  ">
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
                  : "bg-[#2c1662] hover:bg-[#2c136f]"
              }   text-white px-[20px] py-[10px] rounded-full text-sm font-bold   inline-flex  items-center gap-2 transition-all duration-500`}
            >
              Join Us Now <BsArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 xl:justify-between  justify-center py-10">
          {profiles.map((profile, index) => (
            <GalleryGridCard darkMode={darkMode} key={index} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryGrid;
