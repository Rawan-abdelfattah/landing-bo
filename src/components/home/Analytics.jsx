import { Link } from "react-router-dom";
import TextScroll from "../TextScroll";
import { Phone } from "./phone-effect/Phone";

export const Analytics = ({ darkMode }) => {
  return (
    <div className="text-gray-100 relative overflow-hidden">
      <div className="relative z-0 w-full">
        <TextScroll
          darkMode={darkMode}
          className={"my-20"}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
      <section className="bg-[url('/dark-analysis-bg.png')] bg-cover  mx-auto md:px-20  md:rounded-3xl  max-w-screen-xl  ">
        <div
          className={`bg-cover bg-center 
            flex flex-col md:flex-row items-center justify-between gap-10`}
        >
          <div className=" text-center md:text-left">
            <p
              className={
                darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
              }
            >
              03
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
              Analyze Your Audience And <br /> Keep Your Followers Engaged
            </h2>
            <p className=" max-w-[520px] mb-6">
              Boitr is your all-in-one digital hub — a single, shareable link
              that brings together your social media, websites, and content on a
              sleek, customizable page.
            </p>
            <Link
              to="/feature"
              className="text-white bg-[#2c1662] hover:bg-[#2c136f]   px-[20px] py-[10px] rounded-full text-sm font-bold inline-block transition-all duration-300 ease-in-out"
            >
              Discover Our Features →
            </Link>
            <img
              src={darkMode ? "/dark-icons.png" : "/light-icons.png"}
              alt="icons"
              className="pt-15 max-w-[400px]"
            />
          </div>
          <Phone />
        </div>
      </section>
    </div>
  );
};
