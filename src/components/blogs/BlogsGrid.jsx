import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogsGridCard = ({ darkMode, title, date, img }) => {

  
  return (
    <div
      className={`${
        darkMode ? "bg-[#232323] text-white" : "bg-[#F1F1F1] text-black"
      } p-[10px] flex flex-col justify-between rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl w-full h-full`}
    >
      <div className="p-2 relative flex flex-col h-full">
        {/* Tag with hover gradient background fix */}
        <span
          className={`absolute ${
            darkMode ? "bg-[#017CD4]" : "bg-[#2c1662]"
          }  top-3 left-3 text-sm px-[10px] py-[5px] rounded-full text-xs z-10 text-white`}
        >
          Technology
        </span>

        {/* Image */}
        <img src={img} className="w-full rounded-md" />

        {/* Content */}
        <div className="mt-[10px] flex flex-col justify-between flex-1">
        <p className={`text-[14px] font-[500] ${darkMode ? 'text-[#FFFFFF]' : 'text-[#1a1a1a]'}`}>{date}</p>
        <h4 className="text-[22px] font-[700] leading-[30px] mb-2">
            {title}
          </h4>

          {/* Link with gradient text on hover */}
          <Link
            to="#"
            className={`text-[16px]  ${
              darkMode
                ? "text-[#017CD4] hover:text-[#005fa3]"
                : "text-[#2c1662] hover:text-[#1a0e44]"
            } font-[700] leading-[22px] mt-[8px] flex items-center gap-1`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogsGrid = ({ darkMode }) => {
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially

  const blogs = [
    {
      title: "Turn Your Link Page Into A Business",
      date: "March 21, 2024",
      author: "Sarah Lin",
      img: "/blog.png",
      role: "Marketing Lead",
    },
    {
      title: "Boost Engagement With Better UI/UX",
      date: "March 23, 2024",
      author: "David Clark",
      img: "/blog2.png",

      role: "Content Strategist",
    },
    {
      title: "Why Performance Matters for SEO",
      date: "March 24, 2024",
      img: "/blog3.png",

      author: "Emily Zhao",
      role: "Tech Writer",
    },
    {
      title: "How To Monetize With Link Pages",
      date: "March 25, 2024",
      author: "James Ko",
      img: "/blog.png",

      role: "Digital Marketer",
    },
    {
      title: "Learn from Top Creators' Strategies",
      date: "March 26, 2024",
      author: "Nina Ford",
      img: "/blog2.png",
      role: "Growth Expert",
    },
    {
      title: "Top 5 Tools for Your Business Stack",
      date: "March 27, 2024",
      author: "Leo Chan",
      role: "Startup Coach",
      img: "/blog3.png",
    },
    {
      title: "Build Your Brand in 5 Easy Steps",
      date: "March 28, 2024",
      author: "Lena Ray",
      role: "Brand Designer",
      img: "/blog.png",
    },
    {
      title: "Creator Economy in 2024",
      date: "March 29, 2024",
      author: "Ali Youssef",
      img: "/blog2.png",
      role: "Influencer Manager",
    },
    {
      title: "Beginner’s Guide to Analytics",
      date: "March 30, 2024",
      author: "Ava Gomez",
      img: "/blog3.png",

      role: "Data Analyst",
    },
  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // Show 3 more on each click
  };

  return (
    <div className="max-w-screen-xl mx-auto md:px-13 px-5 py-[40px]">
      <div className="text-center lg:text-left">
        <span
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          01
        </span>
        <div className="md:flex justify-between font-bold mb-6 ">
          <h2 className="text-[32px] leading-[50px] font-[700] md:text-[38px]">
            Insights, Tips & Growth Stories
          </h2>
          <div className="mt-6 md:mt-0 md:max-w-xl">
            <p className="text-[18px] leading-[22px] font-[500] max-w-[490px] mb-4">
              Explore powerful strategies, product updates, and creator stories
              to help you build and grow with Boiter.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-[40px]">
          {blogs.slice(0, visibleCount).map((profile, index) => (
            <BlogsGridCard darkMode={darkMode} key={index} {...profile} />
          ))}
        </div>

        {visibleCount < blogs.length && (
          <div className="flex justify-center">
            <button
              onClick={handleShowMore}
              className={`transition-all duration-500  inline-flex  items-center gap-2 ${
                darkMode
                  ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                  : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
              }  text-white px-[20px] py-[10px] rounded-full text-sm font-bold mt-2  text-[16px]`}
            >
              Show More <BsArrowUpRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsGrid;
