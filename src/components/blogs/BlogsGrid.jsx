import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { blogs } from "./blogs";

const BlogsGridCard = ({ darkMode, title, date, id, img }) => {
  
  return (
    <div
      className={`${
        darkMode ? "bg-[#232323] text-white" : "bg-[#F1F1F1] text-black"
      } p-[10px] flex flex-col justify-between rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl w-full h-full`}
    >
      <div className="p-2 relative flex flex-col h-full">
        <span
          className={`absolute ${
            darkMode ? "bg-[#017CD4]" : "bg-[#2c1662]"
          }  top-3 left-3 text-sm px-[10px] py-[10px] rounded-full text-xs z-10 text-white`}
        >
          Technology
        </span>

        <img src={img} className="w-full rounded-md" />

        <div className="mt-[10px] flex flex-col justify-between flex-1">
          <p className={`text-[14px] font-[500] `}>{date}</p>
          <h4 className="text-[22px] font-[700] leading-[30px] mb-2">
            {title}
          </h4>

          <Link
            to={`/blog/${id}`}
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
