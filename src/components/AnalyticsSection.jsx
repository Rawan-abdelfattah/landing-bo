import React from "react";

export const AnalyticsSection = () => {
  return (
    <section
      className="relative py-16 px-6 md:px-20 my-20">
      {/* bg-[#161616] */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <div className="  max-w-lg">
          <p className="text-sm  uppercase tracking-wide">03</p>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Analyze Your Audience And <br /> Keep Your Followers Engaged
          </h2>
          <p className=" mb-6">
            Boitr is your all-in-one digital hub — a single, shareable link that
            brings together your social media, websites, and content on a sleek,
            customizable page.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600   px-6 py-3 rounded-full text-sm font-bold inline-block transition-all duration-300 ease-in-out"
          >
            Discover Our Features →
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6">
            {[
              "snapchat",
              "tiktok",
              "discord",
              "facebook",
              "instagram",
              "twitter",
              "pinterest",
            ].map((icon, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-500 transition-all duration-300 ease-in-out rounded-full cursor-pointer"
              >
                <img
                  src={`/icons/${icon}.svg`} // Adjust based on actual image paths
                  alt={icon}
                  className="w-6 h-6"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] md:w-[450px]">
            <img
              src="./public/Frame4.png" // Replace with actual path
              alt="Main Dashboard"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="./public/Frame5.png" // Replace with actual path
              alt="Secondary Dashboard"
              className="absolute -bottom-8 -right-8 w-2/3 md:w-1/2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
