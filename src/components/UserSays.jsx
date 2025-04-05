import React, { useState } from "react";

export const UserSays = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      text: "Boitr changed the game for me! Instead of juggling multiple links, I now have one sleek page that showcases everything I do.",
      name: "Mike David",
      rating: 5,
      highlighted: true,
    },
    {
      id: 2,
      text: "Boitr changed the game for me! Instead of juggling multiple links, I now have one sleek page that showcases everything I do.",
      name: "Mike David",
      rating: 5,
      highlighted: false,
    },
    {
      id: 3,
      text: "Boitr changed the game for me! Instead of juggling multiple links, I now have one sleek page that showcases everything I do.",
      name: "Mike David",
      rating: 5,
      highlighted: false,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="max-w-screen-xl mx-auto md:px-13 px-5 py-[40px]">
      <div className="text-center md:text-left pb-[40px]">
        <p
          className={
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          }
        >
          04
        </p>
        <span className="text-[36px] leading-[50px] md:text-[38px] font-[700] font-bold  mb-20">
          What Our Users Are Saying
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => { 
          const isHovered =
            hoveredIndex === index || (hoveredIndex === null && index === 0);

          return (
            <div
              key={testimonial.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-6 rounded-xl shadow-lg transition-all duration-500 ${
                isHovered
                  ? "hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30"
                  : ""
              } ${
                darkMode
                  ? isHovered
                    ? "bg-[#232323] text-white"
                    : "text-white"
                  : isHovered
                  ? "bg-gray-200 text-black"
                  : "text-black"
              }`}
            >
              <div className="py-2 rounded-xl">
                <img src="quate-iocn.svg" alt="icon" />
              </div>

              <p className=" mb-4">{testimonial.text}</p>

              <div className="flex mb-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className={`${darkMode ? '   text-[#017CD4] ': ' text-[#2c1662]'} text-xl`}>
                    ★
                  </span>
                ))}
              </div>

              <p className=" font-semibold">{testimonial.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
