import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TextScroll from "../TextScroll";

export const Analytics = ({ darkMode }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Card data array
  const cardData = [
    {
      id: 0,
      title: 'Card #1',
      pills: ['111', '2222', '3333'],
      circles: ['7', '8', '9'],
      animationDelay: '150ms',
      className: 'text-red-900' // Adjusted class name format (no inline styles here)

    },
    {
      id: 1,
      title: 'Card #2',
      pills: ['1555', '266', '4443'],
      circles: ['7', '8', '9'],
      animationDelay: '150ms',
      className: 'text-gray-900' // Adjusted class name format (no inline styles here)
    },
    {
      id: 2,
      title: 'Card #3',
      pills: ['1', '2', '3'],
      circles: ['7', '8', '9'],
      animationDelay: '150ms',
    },
    {
      id: 3,
      title: 'Card #4',
      pills: ['1', '2', '3'],
      circles: ['7', '8', '9'],
      animationDelay: '150ms',
    }
  ];

  // Handle mouse movement for animation
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
        plane.style.transform = `rotateX(${percenty / 2}deg) rotateY(${percentx / 2}deg)`;
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
    <div className="relative overflow-hidden">    <div className="relative z-0 w-full">
          <TextScroll
            darkMode={darkMode}
            className={"my-20"}
            text="One Link To Rule Them All – Connect, Share."
          />
        </div>
      <section className=" container  m-auto ">
    
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
            className={`card ${card.className ? card.className : ''}`}
            data-index={card.id}
            style={{
              visibility: selectedIndex === index ? 'visible' : 'hidden',
              '--local-scale': selectedIndex === index ? 1 : 0,
              '--local-rotation': selectedIndex === index ? '0deg' : '-180deg',
            }}
          >
            <div data-animate className={`phone ${selectedIndex === index ? 'fadein' : ''}`}>
              <div data-animate style={{ animationDelay: '150ms' }} className={`phone-circle ${selectedIndex === index ? 'fadein' : ''}`}></div>
              <h2 data-animate style={{ animationDelay: '300ms' }} className={`phone-title ${selectedIndex === index ? 'fadein' : ''}`}>
                {card.title}
              </h2>
              <div className="phone-pill mt-auto"></div>
              <div className="phone-pill"></div>
              <div className="phone-pill"></div>
            </div>
            <div data-animate style={{ animationDelay: '300ms' }} className={`left-card ${selectedIndex === index ? 'fadein' : ''}`}>4</div>
            <div data-animate style={{ animationDelay: '450ms' }} className={`right-card ${selectedIndex === index ? 'fadein' : ''}`}>5</div>
            <div className="circles">
              {card.circles.map((circle, i) => (
                <div
                  key={i}
                  data-animate
                  style={{ animationDelay: `${(i + 6) * 100}ms` }}
                  className={`circle ${selectedIndex === index ? 'fadein' : ''}`}
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
