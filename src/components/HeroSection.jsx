import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
export const HeroSection = () => {
  return (
    <header className="bg-darkGray from-gray-900 via-purple-900 to-black rounded-3xl mx-5 my-5 px-6 pt-6">
      {/* Navbar */}
      <div className="flex bg-[rgba(0,0,0,0.4)] flex-col md:flex-row justify-between items-center px-6 py-5 rounded-full">
        <a href="#" className="text-2xl font-bold text-white">
          Boltr
        </a>
        <div className="flex gap-8 mt-4 md:mt-0 text-gray-300">
          <a href="#" className="text-sm hover:text-white transition">
            Features
          </a>
          <a href="#" className="text-sm hover:text-white transition">
            Pricing
          </a>
          <a href="#" className="text-sm hover:text-white transition">
            Gallery
          </a>
          <a href="#" className="text-sm hover:text-white transition">
            Support
          </a>
        </div>
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mt-4 md:mt-0 transition"
        >
          Get Started Now →
        </a>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 pt-12">
        {/* Left Side */}
        <div className="max-w-lg mb-8 md:mb-0 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Your Digital Identity, One Smart Link!
          </h1>
          {/* Social Icons */}
          <div className="flex gap-4 my-5">
            <FaXTwitter className="text-2xl cursor-pointer hover:text-gray-400 transition" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400 transition" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-gray-400 transition" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-400 transition" />
          </div>
          <p className="text-base mb-6 text-gray-300">
            Take control of your digital presence with Boltr — the ultimate
            platform to showcase everything that makes you, you. Bring all your
            social media, content, and links together in one beautiful,
            customizable page.
          </p>
        </div>

        <div className="max-w-sm">
          <img
            src="https://s3-alpha-sig.figma.com/img/4469/9bcf/5a27735fbcd25afea2f865f52078ddd0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NL50GLgwgAJ5SO3VAGl013wydv9PSWzWwWjWU2AGs6JAzrtzaDlsaLT4WesfF~0-3K2PRe189Si7AByUHhnqSoT5-kvQxxPuVxv8~Ctu3hI~~rr2dqsmnGP2hf2RKy~gVakjzqGHe751euq7iKyWscx9Y6YT0DhcErRnGemjRwoI09qilQ~7l5G1NDcii1pcft~rixNMuhV-wPQ8ZGIGbJNI8F1nqXT8YJVIlqzLab76eGY3v1MTyjcCXEh0HK3hSd2Z3H3nNaFzIhM8a80PyWkr~MfMDiXJ1qOVks8TtuGjQqeHSGn6UY-umUpM5TmDYFNozqBUInLlI1L2KjDOxA__"
            alt="Robot hand pointing"
            className="w-full"
          />
        </div>
        <div className="max-w-lg mb-8 p-6 md:mb-0 text-white space-y-4">
          <p className="leading-relaxed">
            Take control of your digital presence with Boitr — the ultimate
            platform to showcase everything that makes you, you. Bring all your
            social media, content, and links together in one beautiful,
            customizable page.
          </p>

          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold inline-block transition"
          >
            Create Your Boltr Now →
          </a>

          <p className="text-xs text-gray-400 mt-4">
            We have 100k+ customers worldwide
          </p>
        </div>
      </div>
    </header>
  );
};
