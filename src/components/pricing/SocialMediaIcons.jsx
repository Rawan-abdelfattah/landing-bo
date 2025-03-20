import React from "react";

const SocialMediaIcons = ({ darkMode }) => {
  return (
    <section className="  py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
      <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          }`}
        >02</h2>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Ready To Elevate Your Brand? Join Boitr Today!
        </h2>
        <p className="  max-w-2xl mx-auto mb-6">
          Discover the ultimate platform built for creators and brands who want
          to grow smarter and faster. Track your audience, boost engagement, and
          maximize your revenue — all in one place.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
          Create Your Page Now →
        </button>
        <img
          src={darkMode ? "/dark-icons.png" : "/light-icons.png"}
          alt="icons"
          className="pt-15"
        />{" "}
      </div>
    </section>
  );
};

export default SocialMediaIcons;
