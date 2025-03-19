import React from "react";
import { BsQuote } from "react-icons/bs";
 
export const UserSays = ({darkMode}) => {
  
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

  return (
    <section className=" py-16 px-6 md:px-20  ">
      <div className="max-w-6xl mx-auto">
        <p  className={
              darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
            }>04</p>
          <h2 className="text-3xl font-bold leading-tight mb-20 ">
          What Our Users Are Saying</h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
         <div
         key={testimonial.id}
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: index * 0.2 }}
         className={`relative p-6 rounded-xl shadow-lg transition duration-300 ${
          testimonial.highlighted
            ? darkMode
              ? "bg-gray-900 hover:bg-gray-800"
              : "bg-gray-300 hover:bg-gray-400"
            : darkMode
            ? "bg-transparent"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        
       >
        
              <div
                className={`absolute -top-5 left-4 p-2 bg-darkGray text-white rounded-xl ${
                  testimonial.highlighted ? " bg-gradient-to-r from-purple-500 to-pink-500 text" : "bg-blue-500"
                }`}
              >
                <BsQuote size={28} className=" " />
              </div>
 
              <p className=" -300 mb-4">{testimonial.text}</p>
 
              <div className="flex mb-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="  text-lg">★</span>
                ))}
              </div>
 
              <p className=" -400 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
