import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextScroll from "../TextScroll";
import { FaFacebook, FaLinkedin, FaSnapchatGhost } from "react-icons/fa";
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoTiktok } from "react-icons/io5";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import { RiRedditFill, RiDiscordFill } from "react-icons/ri";

export const Analytics = ({ darkMode }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const cardData = [
    {
      id: 0,
      title: "Alice Johnson",
      user: "https://randomuser.me/api/portraits/women/44.jpg",
      pills: ["johnson@email.com", "+1 (555) 123-4567", "Marketing Manager"],
      circles: [<FaFacebook />, <IoLogoInstagram />, <CiTwitter />],
      animationDelay: "150ms",
      cardImageFront: "/1.png",
      cardImageBack: "/2.png",
      className:"text-gray-500"

    },
    {
      id: 1,
      title: "Michael Smith",
      user: "https://randomuser.me/api/portraits/men/32.jpg",
      pills: ["smith@email.com", "+1 (555) 987-6543", "Software Engineer"],
      circles: [<FaLinkedin />, <IoLogoWhatsapp />, <RiDiscordFill />],
      animationDelay: "200ms",
      cardImageFront: "/3.png",
      cardImageBack: "/4.png",
      className:"text-gray-900"
    },
    {
      id: 2,
      title: "Sophie Lee",
      user: "https://randomuser.me/api/portraits/women/21.jpg",
      pills: ["lee@email.com", "+44 7890 123456", "Graphic Designer"],
      circles: [<FaSnapchatGhost />, <IoLogoTiktok />, <CiYoutube />],
      animationDelay: "250ms",
      cardImageFront: "/5.png",
      cardImageBack: "/6.png",
      className:"text-white"

    },
    {
      id: 3,
      title: "James Anderson",
      user: "https://randomuser.me/api/portraits/men/56.jpg",
      pills: ["anderson@email.com", "+33 6 12 34 56 78", "Data Analyst"],
      circles: [<RiRedditFill />, <RiDiscordFill />, <FaFacebook />],
      animationDelay: "300ms",
      cardImageFront: "/1.png",
      cardImageBack: "/2.png",
      className:"text-gray-900"

    },
  ];
  
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const middlex = window.innerWidth / 2;
      const middley = window.innerHeight / 2;

      const pointx = (middlex - e.clientX) * -1;
      const pointy = middley - e.clientY;

      const percentx = (pointx / window.innerWidth) * 100;
      const percenty = (pointy / window.innerHeight) * 100;

      const plane = document.querySelector("#plane");
      if (plane) {
        plane.style.transform = `rotateX(${percenty / 2}deg) rotateY(${
          percentx / 2
        }deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Automatic selection change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-gray-100 relative overflow-hidden">
      {" "}
      <div className="relative z-0 w-full">
        <TextScroll
          darkMode={darkMode}
          className={"my-20"}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
      <section className="bg-[url('/dark-analysis-bg.png')] bg-cover  mx-auto md:px-20 px-5 rounded-3xl  max-w-screen-xl  ">
        <div
          className={`bg-cover bg-center 
            flex flex-col md:flex-row items-center justify-between gap-10`}
        >
          <div className=" text-center md:text-left ">
            <p
              className={
                darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
              }
            >
              03
            </p>
            <h2 className="text-3xl font-bold leading-tight mb-4">
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
              className="pt-15 max-w-[500px]"
            />
          </div>

          <div className="animate-contain">
            <div id="plane">
              {cardData.map((card, index) => (
                <section
                  key={card.id}
                  className={`card ${card.className ? card.className : ""}`}
                  data-index={card.id}
                  style={{
                    visibility: selectedIndex === index ? "visible" : "hidden",
                    "--local-scale": selectedIndex === index ? 1 : 0,
                    "--local-rotation":
                      selectedIndex === index ? "0deg" : "-180deg",
                  }}
                >
                  <div
                    data-animate
                    className={`phone ${
                      selectedIndex === index ? "fadein" : ""
                    }`}
                  >
                    <div
                      data-animate
                      style={{ animationDelay: "150ms" }}
                      className={`phone-circle ${
                        selectedIndex === index ? "fadein" : ""
                      }`}
                    >
                      <img
                        src={card.user}
                        className="rounded-full"
                        alt="user"
                      />
                    </div>
                    <h2
                      data-animate
                      style={{ animationDelay: "300ms" }}
                      className={` phone-title ${
                        selectedIndex === index ? "fadein" : ""
                      }`}
                    >
                      {card.title}
                    </h2>
                    <div className="phone-pill  mt-auto">
                      {card.pills[0]}
                    </div>
                    <div className="phone-pill  ">
                      {card.pills[1]}
                    </div>
                    <div className="phone-pill ">
                      {card.pills[2]}
                    </div>
                  </div>
                  <div
                    data-animate
                    style={{ animationDelay: "300ms" }}
                    className={`left-card ${
                      selectedIndex === index ? "fadein" : ""
                    }`}
                  >
                    <img
                      src={card.cardImageFront}
                      className="rounded-2xl"
                      alt="card img"
                    />
                  </div>
                  <div
                    data-animate
                    style={{ animationDelay: "450ms" }}
                    className={`right-card ${
                      selectedIndex === index ? "fadein" : ""
                    }`}
                  >
                    <img
                      src={card.cardImageBack}
                      className="rounded-2xl"
                      alt="card img"
                    />
                  </div>
                  <div className="circles">
                    {card.circles.map((circle, i) => (
                      <div
                        key={i}
                        data-animate
                        style={{ animationDelay: `${(i + 6) * 100}ms` }}
                        className={`circle text-white ${
                          selectedIndex === index ? "fadein" : ""
                        }`}
                      >
                        {circle}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
