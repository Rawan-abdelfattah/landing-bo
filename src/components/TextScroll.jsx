import React, { useRef, useEffect } from "react";

const TextScroll = ({ text, darkMode, className }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerHTML = `
      @keyframes seamlessScroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div
      className={`overflow-hidden w-full text-white ${className} py-5 bottom-0 left-0`}
    >
      <div
        ref={scrollRef}
        className={`flex whitespace-nowrap animate-scroll ${
          darkMode ? "text-dark-outline" : "text-light-outline"
        } text-3xl font-bold`}
        style={{
          animation: `seamlessScroll 20s linear infinite`,
        }}
      >
        <span className="pr-20">{text}</span>
        <span className="pr-20">{text}</span>
        <span className="pr-20">{text}</span>
        <span className="pr-20">{text}</span>
      </div>
    </div>
  );
};

export default TextScroll;
