import React from "react";
import { BsQuote } from "react-icons/bs";
 
export const UserSays = () => {
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
    <section className=" py-16 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-400 uppercase tracking-wide">02</p>
        <h2 className="text-3xl font-bold mb-8">What Our Users Are Saying</h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-6 rounded-xl shadow-lg ${
                testimonial.highlighted ? "bg-gray-800" : "bg-transparent"
              }`}
            >
              {/* Quote Icon */}
              <div
                className={`absolute -top-5 left-4 p-2 rounded-full ${
                  testimonial.highlighted ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-blue-500"
                }`}
              >
                <BsQuote size={28} className="text-white" />
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-300 mb-4">{testimonial.text}</p>

              {/* Rating Stars */}
              <div className="flex mb-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* User Name */}
              <p className="text-gray-400 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
