import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaSnapchatGhost } from "react-icons/fa";
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoTiktok } from "react-icons/io5";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import { RiRedditFill, RiDiscordFill } from "react-icons/ri";
import './phone.css'
export const Phone = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const cardData = [
      {
        id: 0,
        title: "Alice Johnson",
        user: "https://randomuser.me/api/portraits/women/44.jpg",
        pills: ["johnson@email.com", "+1 (555) 123-4567", "Marketing Manager"],
        circles: [<FaFacebook />, <IoLogoInstagram />, <CiTwitter />],
        animationDelay: "150ms",
        bg:'/profile11.png',
        cardImageBack: "/design2.png",
        cardImageBackCss: "w-[820px] h-[220px]",

        cardImageFront: "/design1.png",
        className:"text-gray-900"
  
      },
      {
        id: 1,
        title: "Michael Smith",
        user: "https://randomuser.me/api/portraits/men/32.jpg",
        pills: ["smith@email.com", "+1 (555) 987-6543", "Software Engineer"],
        circles: [<FaLinkedin />, <IoLogoWhatsapp />, <RiDiscordFill />],
        animationDelay: "200ms",
        bg:'/profile22.png',
        cardImageBack: "/interial1.png",
        cardImageFront: "/interial2.png",
        className:"text-gray-900"
      },
      {
        id: 2,
        title: "Sophie Lee",
        user: "https://randomuser.me/api/portraits/women/21.jpg",
        pills: ["lee@email.com", "+44 7890 123456", "Graphic Designer"],
        circles: [<FaSnapchatGhost />, <IoLogoTiktok />, <CiYoutube />],
        bg:'/profile33.png',
        animationDelay: "250ms",
        cardImageBack: "/fitness2.png",
        cardImageFront: "/fitness1.png",
        className:"text-white"
  
      },
      {
        id: 3,
        title: "James Anderson",
        user: "https://randomuser.me/api/portraits/men/56.jpg",
        pills: ["anderson@email.com", "+33 6 12 34 56 78", "Data Analyst"],
        circles: [<RiRedditFill />, <RiDiscordFill />, <FaFacebook />],
        animationDelay: "300ms",
        bg:'/profile44.png',
        cardImageBack: "/marketing1.png",
        cardImageFront: "/marketing2.png",
        cardImageBackCss: "w-[700px] h-[100%]",
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
   
    useEffect(() => {
      const interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  return (
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
                    style={{backgroundImage: `url(${card.bg})`}}
                    className={`phone  bg-cover bg-center ${
                      selectedIndex === index ? "fadein" : ""
                    }`}
                  > 
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
                      className=  {`rounded-2xl w-[300px] ${card.cardImageBackCss}   `}
                      alt="card img"
                    />
                  </div>
                  <div className="circles">
                    {card.circles.map((circle, i) => (
                      <div
                        key={i}
                        data-animate
                        style={{ animationDelay: `${(i + 6) * 100}ms` }}
                        className={`circle text-white md:text-2xl md:text-lg ${
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
  )
}
