import { Link } from "react-router-dom";
import TextScroll from "../TextScroll";
import { Phone } from "./phone-effect/Phone";
import { BsArrowUpRight } from "react-icons/bs";

export const Analytics = ({ darkMode }) => {
  return (
    <div className="  relative overflow-hidden">
      <div className="relative z-0 w-full">
        <TextScroll
          darkMode={darkMode}
          className={"my-[80px]"}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
      <section className="relative mx-auto md:px-13 md:rounded-3xl max-w-screen-xl">
 <div
  className="absolute inset-0 w-[450px] h-[450px] rounded-full blur-[70px] opacity-50 pointer-events-none mx-auto"
  style={{
    background:' linear-gradient(225deg, rgba(250, 173, 79, 0.7) 14.61%, rgba(221, 42, 123, 0.7) 39.38%, rgba(149, 55, 176, 0.7) 58.49%, rgba(81, 91, 212, 0.7) 85.39%)'
    ,
  }}
></div>

 
  <div
    className={`relative z-10 bg-cover bg-center flex flex-col md:flex-row items-center justify-between gap-10`}
  >
    <div className="text-center md:text-left">
      <p className={darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"}>
        03
      </p>
      <h2 className="text-[36px] md:text-[38px] max-w-[550px] font-bold leading-[50px] mb-4 pb-[40px]">
        Analyze Your Audience And <br /> Keep Your Followers Engaged
      </h2>
      <p className="text-[18px] max-w-[520px] mb-6">
        Boitr is your all-in-one digital hub — a single, shareable link
        that brings together your social media, websites, and content on a
        sleek, customizable page.
      </p>
      <Link
        to="/feature"
        className={`text-white text-[16px] mb-[40px] ${
          darkMode
            ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
            : "bg-[#2c1662] hover:bg-[#2c136f]"
        }  px-[20px] py-[10px] rounded-full text-sm font-bold  inline-flex  items-center gap-2 transition-all duration-500 ease-in-out`}
      >
        Discover Our Features <BsArrowUpRight />
      </Link>
      {/* <img
        src="/social_media.gif"
        alt="icons"
        className="pt-5 md:min-w-[504px] w-full m-auto h-[90px]"
      /> */}
    </div>
<div className=" mr-10">

    <Phone />
</div>
  </div>
</section>

    </div>
  );
};
