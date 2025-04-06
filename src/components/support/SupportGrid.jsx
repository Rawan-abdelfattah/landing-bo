import React from "react";

const Welcome = [
  {
    title: "Welcome To Boiter",
    items: [
      { label: "Welcome To Boiter", icon: "/support4.svg" },
      { label: "Concepts", icon: "/support5.svg" },
      { label: "Dashboard Guide", icon: "/support6.svg" },
      { label: "Support", icon: "/support7.svg" },
    ],
  },
];
const Design = [
  {
    title: "Design Your Page",
    items: [
      { label: "Profile", icon: "/support8.svg" },
      { label: "How To Change Font", icon: "/support8.svg" },
      { label: "How To Use Sync Blocks", icon: "/support8.svg" },
      { label: "How To Change Link Thumbnails", icon: "/support8.svg" },
      {
        label: "How To Add Email Signup To Your Boiter Page",
        icon: "/support8.svg",
      },
      { label: "How To Add Contact Form", icon: "/support8.svg" },
      { label: "Change Your Page Language", icon: "/support8.svg" },
      { label: "Use Boiter With TikTok", icon: "/support8.svg" },
      { label: "How To Use Boiter With YouTube", icon: "/support8.svg" },
      { label: "How To Connect Mailchimp To Boiter", icon: "/support8.svg" },
    ],
  },
];
const Selling = [
  {
    title: "Selling Products",
    items: [
      { label: "Start Selling: Creating A Product", icon: "/support9.svg" },
      { label: "Unpublish Or Delete A Product", icon: "/support9.svg" },
      { label: "Does Boiter Take A Fee?", icon: "/support9.svg" },
      {
        label: "How To Connect Your Stripe Account To Boiter",
        icon: "/support9.svg",
      },
      { label: "How To Connect Your Paypal Account", icon: "/support9.svg" },
      { label: "Use Boiter With Twitch", icon: "/support9.svg" },
      { label: "Use Boiter With Twitter", icon: "/support9.svg" },
      { label: "Use Boiter With TikTok", icon: "/support9.svg" },
      { label: "How To Use Boiter With YouTube", icon: "/support9.svg" },
      { label: "How To Connect Mailchimp To Boiter", icon: "/support9.svg" },
    ],
  },
];
const Marketing = [
  {
    title: "Marketing",
    items: [
      { label: "How To Use Boiter Analytics", icon: "/support10.svg" },
      { label: "Connect Your Own Domain", icon: "/support10.svg" },
      { label: "Publish Posts", icon: "/support10.svg" },
    ],
  },
];
const Integrations = [
  {
    title: "Integrations",
    items: [
      {
        label: "How To Connect Google Analytics To Boiter",
        icon: "/support11.svg",
      },
      { label: "How To Connect Boiter To Facebook", icon: "/support11.svg" },
      { label: "Use Boiter With Facebook", icon: "/support11.svg" },
      { label: "Use Boiter With Discord", icon: "/support11.svg" },
      { label: "Use Boiter With Instagram", icon: "/support11.svg" },
      { label: "Use Boiter With Twitter", icon: "/support11.svg" },
      { label: "Use Boiter With TikTok", icon: "/support11.svg" },
      { label: "How To Use Boiter With YouTube", icon: "/support11.svg" },
      { label: "How To Connect Mailchimp To Boiter", icon: "/support11.svg" },
      { label: "Use Boiter With Twitch", icon: "/support11.svg" },
    ],
  },
];
const Account = [
  {
    title: "Account",
    items: [
      { label: "How To Invite Team Members", icon: "/support12.svg" },
      { label: "How To Cancel Boiter Pro", icon: "/support12.svg" },
      { label: "Boiter Community Standards", icon: "/support12.svg" },
      { label: "How To Update Your Login Information", icon: "/support12.svg" },
      {
        label: "I Think My Account Has Been Compromised",
        icon: "/support12.svg",
      },
      { label: "Update Your Billing Information", icon: "/support12.svg" },
    ],
  },
];
const Misc = [
  {
    title: "Misc",
    items: [
      { label: "How To Become A Boiter Affiliate", icon: "/support13.svg" },
      { label: "How To Fix Black Images On Boiter", icon: "/support13.svg" },
      { label: "Can I Use Boiter Brand Assets?", icon: "/support13.svg" },
      {
        label: "Why Customer Payments Fails On Boiter",
        icon: "/support13.svg",
      },
      { label: "How To Remove The Boiter Branding", icon: "/support13.svg" },
      { label: "Boiter Image Dimensions", icon: "/support13.svg" },
    ],
  },
];

const SupportGrid = ({ darkMode }) => {
  return (
    <section className="max-w-screen-xl mx-auto md:px-13 px-5     py-10">
      <div className="  text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          02
        </h2>
        <h1 className="text-[36px] leading-[50px] md:text-[38px] font-[700] lg:text-4xl font-bold mt-2">
          Your Boitr Journey Starts Here!
        </h1>

        {Welcome.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex  rounded-xl  ">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <span className=" text-[22px] leading-[30px] font-[700]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Design.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex  rounded-xl  ">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <span className=" text-[22px] leading-[30px] font-[700]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Selling.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex  rounded-xl  ">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <span className=" text-[22px] leading-[30px] font-[700]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Marketing.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex  rounded-xl  ">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <span className=" text-[22px] leading-[30px] font-[700]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Integrations.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex  rounded-xl  ">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <span className=" text-[22px] leading-[30px] font-[700]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Account.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex  rounded-xl  ">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <span className=" text-[22px] leading-[30px] font-[700]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {Misc.map((section, index) => (
          <div key={index} className="mt-10">
            <h3
              className={`w-full px-4 py-4 text-[26px] font-[700] text-white rounded-xl 
    ${
      darkMode
        ? "[background:linear-gradient(270deg,#5F2866_0%,#2A4A74_100%)]"
        : "[background:linear-gradient(90deg,#389BE9_0%,#B13FBC_100%)]"
    }`}
            >
              {section.title}
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-col lg:items-start  items-center  gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode ? "bg-[#232323]" : "bg-[#F1F1F1]"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex  rounded-xl  ">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <span className=" text-[22px] leading-[30px] font-[700]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportGrid;
