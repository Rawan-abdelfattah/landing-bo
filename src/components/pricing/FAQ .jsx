import { useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What Is Included In The Website Design And Development Package?",
    answer:
      "Our website package includes custom UI/UX design, responsive web development, up to 5 pages, and basic SEO optimization. Additional features can be added based on your needs.",
  },
  {
    question: "Can I Customize My Boitr Page?",
    answer:
      "Yes, you can fully customize your Boitr page to match your branding and preferences.",
  },
  {
    question: "How Does The Auto-Sync Feature Work?",
    answer:
      "The Auto-Sync feature allows you to connect external services and keep data updated automatically.",
  },
  {
    question: "Can I Sell Products Or Services On Boitr?",
    answer:
      "Yes, Boitr supports e-commerce functionality, allowing you to sell digital or physical products.",
  },
  {
    question: "Do I Need Technical Skills To Set Up My Boitr Page?",
    answer:
      "No, Boitr is designed for ease of use. You don’t need any technical skills to set up your page.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-outline-light-h1 mb-2">04</h2>
        <h2 className="text-2xl md:text-4xl font-bold mb-8">FAQs</h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl transition-all duration-500 border cursor-pointer ${
                openIndex === index
                  ? "border-none bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                  : "border-gray-700 hover:border-gray-500"
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <motion.div
                  className="flex items-center justify-center w-6 h-6" // Ensures the arrow stays centered
                  animate={{
                    rotate: openIndex === index ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight
                    className={`transition-all ${
                      openIndex === index ? "text-white" : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </div> 
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-gray-200">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
