import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function FAQS({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ is open by default
  const [hoverIndex, setHoverIndex] = useState(null);

  const faqs = [
    {
      question:
        "What Is Included In The Website Design And Development Package?",
      answer:
        "Our website package includes custom UI/UX design, responsive web development, up to 5 pages, and basic SEO optimization. Additional features can be added based on your needs.",
    },
    {
      question: "Can I Customize My Boitr Page?",
      answer:
        "Yes, you can fully customize your page with various themes, fonts, and layouts.",
    },
    {
      question: "How Does The Auto-Sync Feature Work?",
      answer:
        "The auto-sync feature ensures your content updates in real-time across devices.",
    },
    {
      question: "Can I Sell Products Or Services On Boitr?",
      answer:
        "Absolutely! You can list and sell your digital or physical products directly.",
    },
    {
      question: "Do I Need Technical Skills To Set Up My Boitr Page?",
      answer:
        "No, our platform is designed to be user-friendly with drag-and-drop customization.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto md:px-13 px-5 py-[40px]">
      <div className="text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          }`}
        >
          03
        </h2>
        <h2 className="text-[36px] leading-[50px] md:text-[38px] font-[700] font-bold mb-6">FAQs</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 my-3 rounded-xl bg-center bg-cover cursor-pointer transition-all duration-500 transform shadow-md ${
              openIndex === index
                ? darkMode
                  ? "bg-[url('/dark-faq.png')]"
                  : "bg-[url('/light-faq.png')]"
                : darkMode
                ? "bg-[#232323]"
                : "bg-gray-200"
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <FaArrowUp
                className={`text-xl transition-all duration-500 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-40 mt-2 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
