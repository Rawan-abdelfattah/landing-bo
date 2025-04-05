import { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function FAQS({ darkMode }) {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const faqs = [
    {
      id: 1,
      title: "Can I Customize My Boitr Page?",
      description:
        "Yes, you can fully customize your page with various themes, fonts, and layouts.",
    },
    {
      id: 2,
      title: "How Does The Auto-Sync Feature Work?",
      description:
        "The auto-sync feature ensures your content updates in real-time across devices.",
    },
    {
      id: 3,
      title: "Can I Sell Products Or Services On Boitr?",
      description:
        "Absolutely! You can list and sell your digital or physical products directly.",
    },
    {
      id: 4,
      title: "Do I Need Technical Skills To Set Up My Boitr Page?",
      description:
        "No, our platform is designed to be user-friendly with drag-and-drop customization.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto md:px-13 px-5 py-20 relative">
      <div>
        {faqs.map((faq, index) => {
          const isHovered =
            hoveredFeature === faq.id ||
            (hoveredFeature === null && index === 0);

          return (
            <div key={faq.id}>
              <div
                className={`
          relative rounded-2xl border-gray-700 p-4 my-4 cursor-pointer transition-all duration-700
          hover:text-white
          ${darkMode ? "hover:border-[#0163A8]" : "hover:border-[#2c136f]"}
          bg-transparent bg-cover bg-center ease-in-out
          ${
            isHovered
              ? "bg-[url('/dark-faq.png')] border py-10 my-6"
              : "bg-[url('/light-faq.png')]"
          }
        `}
                onMouseEnter={() => setHoveredFeature(faq.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <span className="flex text-[26px] font-[700] items-center">
                  {faq.title}
                  <div className={`ml-auto flex items-center relative`}>
                    <FaArrowUpLong
                      className={`
                md:flex hidden transition-all duration-500 ease-in-out
                w-[37px] h-[25px]
                ${isHovered ? "rotate-90 absolute top-[20px] left-[-40px]" : ""}
              `}
                    />
                  </div>
                </span>

                <p
                  className={`
            lg:w-[500px] text-[16px] font-[500] mt-2 transition-all duration-500 ease-in-out
            ${isHovered ? "flex" : "hidden"}
          `}
                >
                  {faq.description}
                </p>
              </div>

              {index !== faqs.length - 1 && <hr />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
