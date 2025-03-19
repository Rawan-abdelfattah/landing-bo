import React, { useEffect, useRef } from "react";

const TextScroll = ({ text, darkMode, className }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scrollWidth = scrollElement.scrollWidth;
    const animationDuration = scrollWidth * 0.02; // Adjust speed as needed

    const keyframes = `
      @keyframes scrollText {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${scrollWidth}px); }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    scrollElement.style.animation = `scrollText ${animationDuration}s linear infinite`;

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className={`text-white ${className} py-5  bottom-0 left-0`}>
      <div
        ref={scrollRef}
        className={`whitespace-nowrap ${
          darkMode ? "text-dark-outline " : "text-light-outline"
        }  text-3xl font-bold`}
        style={{
          willChange: "transform",
          display: "inline-block",
        }}
      >
        {text} {/* Repeat text to ensure continuous scroll */}
        <span className="pl-20">{text}</span>
        <span className="pl-20">{text}</span>
      </div>
    </div>
  );
};

export default TextScroll;
