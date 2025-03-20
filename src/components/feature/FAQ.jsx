import { useState } from "react";
import { FaArrowRight, FaChevronUp } from "react-icons/fa";

export default function FAQSection({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
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
    <section className={`py-16 px-6  `}>
     <div className="max-w-6xl mx-auto text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          03
        </h2>        <h2 className="text-xl md:text-3xl font-bold mb-6">FAQs</h2>

        <div className="p-6 rounded-lg mb-6 flex justify-between items-center cursor-pointer transition-transform hover:scale-105 duration-500 bg-[linear-gradient(45deg,_rgba(250,173,79,0.5)_14.61%,_rgba(221,42,123,0.5)_39.38%,_rgba(149,55,176,0.5)_58.49%,_rgba(81,91,212,0.5)_85.39%)] hover:shadow-lg">
        <div>
            <h3 className="text-lg font-semibold">
              What Is Included In The Website Design And Development Package?
            </h3>
            <p className="text-sm  mt-2">
              Our website package includes custom UI/UX design, responsive web
              development, up to 5 pages, and basic SEO optimization. Additional
              features can be added based on your needs.
            </p>
          </div>
          <FaArrowRight className="text-xl" />
        </div>

        {faqs.map((faq, index) => (
      <div
      key={index}
      className={`p-4 mb-2 rounded-lg cursor-pointer transition-all duration-500 transform hover:-translate-y-1 shadow-md ${
        darkMode
          ? "bg-[#232323] hover:bg-[linear-gradient(45deg,_rgba(250,173,79,0.5)_14.61%,_rgba(221,42,123,0.5)_39.38%,_rgba(149,55,176,0.5)_58.49%,_rgba(81,91,212,0.5)_85.39%)]"
          : "bg-gray-200 hover:bg-[linear-gradient(45deg,_rgba(250,173,79,0.5)_14.61%,_rgba(221,42,123,0.5)_39.38%,_rgba(149,55,176,0.5)_58.49%,_rgba(81,91,212,0.5)_85.39%)]"
      }`}
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{faq.question}</h3>
        <FaChevronUp
          className={`text-xl transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          openIndex === index ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
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
