import React from "react";
import { Link } from "react-router-dom";

const GalleryGridCard = ({ name, role, profileImg, mainImg, darkMode }) => {
  return (
    <div className="group h-[446px] relative  rounded-lg shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl w-72">
      <div
        className={` rounded-t-2xl ${
          darkMode
            ? "bg-[#232323] text-white hover:bg-gradient-to-r from-gray-700 to-gray-900"
            : "bg-gray-200 text-black hover:bg-gradient-to-r from-gray-100 to-gray-300"
        } p-4 flex items-center`}
      >
        <img
          src={profileImg}
          className="w-10 h-10 rounded-full mr-3"
          alt="GalleryGrid"
        />
        <div>
          <h3 className="font-semibold ">{name}</h3>
          <p className="text-sm ">{role}</p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <img
          src={mainImg}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:-translate-y-1/3"
          alt="Main"
        />
      </div>
    </div>
  );
};

const GalleryGridSection = ({ darkMode }) => {
  const profiles = [
    {
      name: "Emma Clarke",
      role: "Digital Marketer",
      profileImg: "/user.jpg",
      mainImg: "/profile1.png",
      followers: "15K",
    },
    {
      name: "Sophia Lane",
      role: "Content Creator",
      profileImg: "/user.jpg",
      mainImg: "/profile2.png",
      followers: "12K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile3.png",
      followers: "20K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile4.png",
      followers: "20K",
    },
    {
      name: "Emma Clarke",
      role: "Digital Marketer",
      profileImg: "/user.jpg",
      mainImg: "/profile1.png",
      followers: "15K",
    },
    {
      name: "Sophia Lane",
      role: "Content Creator",
      profileImg: "/user.jpg",
      mainImg: "/profile2.png",
      followers: "12K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile3.png",
      followers: "20K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile4.png",
      followers: "20K",
    },
    {
      name: "Emma Clarke",
      role: "Digital Marketer",
      profileImg: "/user.jpg",
      mainImg: "/profile1.png",
      followers: "15K",
    },
    {
      name: "Sophia Lane",
      role: "Content Creator",
      profileImg: "/user.jpg",
      mainImg: "/profile2.png",
      followers: "12K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile3.png",
      followers: "20K",
    },
    {
      name: "Liam Carter",
      role: "Fitness Coach",
      profileImg: "/user.jpg",
      mainImg: "/profile4.png",
      followers: "20K",
    },
  ];

  return (
    <div className="  px-6 md:px-34 pt-5 text-center lg:text-left">
      <h2
        className={`${
          darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
        } `}
      >
        01
      </h2>
      <div className="md:flex justify-between font-bold mb-6 py-5">
        <h2 className="text-2xl md:text-4xl ">See How Others Shine</h2>
        <div className="mt-6 md:mt-0 md:max-w-md ">
          <p className="  mb-4">
            Discover how creators, brands, and businesses are using our platform
            to shine. Get inspired by real-world creativity and style.
          </p>
          <Link
            to="https://user.boitr.com/"
            className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-3 rounded-full text-sm font-bold inline-block transition duration-300"
          >
            Join Us Now →
          </Link>
        </div>
      </div>{" "}
      <div className="flex flex-wrap gap-6 justify-center shadow py-10">
        {profiles.map((profile, index) => (
          <GalleryGridCard darkMode={darkMode} key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default GalleryGridSection;
