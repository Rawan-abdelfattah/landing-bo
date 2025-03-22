import React from "react"; 

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

  return (
    <section className=" max-w-screen-xl mx-auto   m-auto py-10">
         <div className="text-center md:text-left">
          {" "}
          <p
            className={
              darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
            }
          >
            04
          </p>
          <h2 className="text-3xl font-bold leading-tight mb-20 ">
            What Our Users Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-6 rounded-xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30  ${
                darkMode
                  ? " text-white hover:bg-[#232323]"
                  : " text-black hover:bg-bg-gray-200"
              }`}
            >
              <div className={` py-2  rounded-xl  `}>
                <img src="quate-iocn.svg" alt="icon" />{" "}
              </div>

              <p className=" -300 mb-4">{testimonial.text}</p>

              <div className="flex mb-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="  text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className=" -400 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div> 
    </section>
  );
};
