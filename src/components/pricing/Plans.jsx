import React from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Pro Plan",
    price: "$10 / Month",
    description: "For creators and entrepreneurs ready to grow.",
    features: [
      "Custom Domain",
      "Sell Digital Products",
      "Sell Coaching Calls",
      "Create Lead Magnets",
      "Social Media Sync Blocks",
      "Contact Form Block",
      "Send 25k Emails Per Month",
      "Publish Blog Posts",
      "Detailed Analytics",
      "3rd Party Integrations",
      "Remove Zaap Branding",
    ],
    gradient: "bg-gradient-to-r from-[#5F2866] to-[#2A4A74]",
  },
  {
    name: "Business Plan",
    price: "$25 / Month",
    description: "Built for brands and teams scaling their reach.",
    features: [
      "Everything in Pro, Plus:",
      "Invite Team Members",
      "Create Discount Codes",
      "Send 50k Emails Per Month",
      "Add Additional Emails Anytime",
      "1-on-1 Coaching",
      "Join Our Creator Community",
      "Early Access To New Features",
    ],
    gradient:
      "bg-gradient-to-tr from-[rgba(250,191,101,0.8)] via-[rgba(202,153,158,0.8)] to-[rgba(149,117,227,0.8)]",
  },
  {
    name: "Life Time",
    price: "$249 / One Time",
    description: "For creators and entrepreneurs ready to grow.",
    features: [
      "Every feature from Pro + Ultra",
      "For One Project",
      "Access Forever",
      "Enjoy future updates",
      "No Subscription",
    ],
    gradient:
      "bg-gradient-to-tr from-[#57487C] via-[#59387B] via-[#462B87] via-[#523560] to-[#3E2E64] bg-opacity-90",
  },
];

const Plans = ({ darkMode }) => {
  return (
    <section className="py-16 px-6 ">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          }`}
        >
          01
        </h2>
        <div className="md:flex justify-between font-bold mb-6 py-5">
          <h2 className="max-w-[588px] text-2xl md:text-4xl ">
            Choose The Perfect Plan For You
          </h2>
          <p className="max-w-[482px]">
            Whether you're just getting started or ready to take your digital
            presence to the next level, Boitr has a plan designed for your
            needs.
          </p>
        </div>
      </div>
      <div
        className={`max-w-6xl mx-auto rounded-2xl p-5 transition-all duration-500 overflow-hidden 
    bg-cover bg-center group relative
    ${darkMode ? "bg-[#161616]" : "bg-gray-100"} 
    hover:bg-[url('/pricing-hover-bg.png')] hover:bg-cover hover:bg-center`}
      >
        <p>Free Plan</p>
        <h2 className="font-bold text-2xl">$0 / Forever</h2>
        <p>Perfect for individuals exploring their digital presence.</p>

        {/* Expandable Content */}
        <div
          className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out 
      group-hover:max-h-60 group-hover:py-3"
        >
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-1">
              <li className="flex gap-2">
                <img src="/pricing-icon.svg" alt="icon" /> Unlimited Links
              </li>
              <li className="flex gap-2">
                <img src="/pricing-icon.svg" alt="icon" /> Social Icons
              </li>
              <li className="flex gap-2">
                <img src="/pricing-icon.svg" alt="icon" /> Email Collection
              </li>
            </ul>
            <ul className="space-y-1">
              <li className="flex gap-2">
                <img src="/pricing-icon.svg" alt="icon" /> Link Clicks Analytics
              </li>
              <li className="flex gap-2">
                <img src="/pricing-icon.svg" alt="icon" /> Custom Theme
              </li>
              <li className="flex gap-2">
                <img src="/pricing-icon.svg" alt="icon" /> Link Folders
              </li>
            </ul>
          </div>{" "}
          <div className="flex justify-end">
            <button className={`text-white ${darkMode ? 'bg-[#017CD4] hover:bg-[linear-gradient(90deg,rgba(56,155,233,0.5)_0%,rgba(177,63,188,0.5)_100%)]'  :'bg-[#2c1662] hover:bg-[#2c136f]'}  px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-500`}>
              Create Your Page Now For Free 
            </button>
          </div>
        </div> 
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border ${darkMode ? 'border-[#017CD4]  '  :'border-[#2c1662] '}  overflow-hidden flex flex-col`}
          >
            <div className={`p-6 text-white ${plan.gradient}`}>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-2xl font-bold">{plan.price}</p>
              <p className=" mt-1">{plan.description}</p>
            </div>

            <div className="p-6 flex-1 ">
              {plan.features.length > 0 ? (
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <img src="/pricing-icon.svg" alt="icon" />

                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Limited features</p>
              )}
            </div>

            <div className="p-4  text-center">
              <button className={`w-full ${darkMode ? 'bg-[#017CD4] hover:bg-[linear-gradient(90deg,rgba(56,155,233,0.5)_0%,rgba(177,63,188,0.5)_100%)]'  :'bg-[#2c1662] hover:bg-[#2c136f]'}  text-white font-semibold py-2 rounded-full transition-all duration-500`}>
                Get Started Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
