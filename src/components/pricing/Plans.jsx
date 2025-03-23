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
    gradient: "bg-gradient-to-r from-purple-500 to-blue-500",
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
    gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
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
    gradient: "bg-gradient-to-r from-purple-600 to-pink-500",
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
          <h2 className="text-2xl md:text-4xl ">
              
            Choose The Perfect Plan For You  
          </h2>
          <h4 >
            Whether you're just getting started or ready to take your digital
            presence to the next level, Boitr has a plan designed for your
            needs.
          </h4>
        </div>
      </div> 
      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2c1662] overflow-hidden flex flex-col"
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
                      <FaCheck className=" border  text-green-400 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Limited features</p>
              )}
            </div>

            <div className="p-4  text-center">
              <button className="w-full bg-[#2c1662] hover:bg-[#2c136f] text-white font-semibold py-2 rounded-full transition-all duration-300">
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
