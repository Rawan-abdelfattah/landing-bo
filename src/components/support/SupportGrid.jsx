import React from "react"; 

const sections = [
  {
    title: "Welcome To Boiter",
    items: [
      { label: "Welcome To Boiter", icon: "/support4.svg" },
      { label: "Concepts", icon: "/support5.svg" },
      { label: "Dashboard Guide", icon: "/support6.svg" },
      { label: "Support", icon: "/support7.svg" },
    ],
  },
  {
    title: "Design Your Page",
    items: [
      { label: "Profile", icon: "/support8.svg" },
      { label: "How To Change Font", icon: "/support8.svg"  },
      { label: "How To Use Sync Blocks", icon: "/support8.svg" },
      { label: "How To Change Link Thumbnails", icon: "/support8.svg"  },
      { label: "How To Add Email Signup  ", icon: "/support8.svg"  },
      { label: "How To Add Contact Form", icon: "/support8.svg"  },
      { label: "Change Your Page Language", icon: "/support8.svg"  },
      { label: "Use Boiter With TikTok", icon: "/support8.svg" },
      {
        label: "How To Use Boiter With YouTube", icon: "/support8.svg",
      },
      {
        label: "How To Connect Mailchimp To Boiter", icon: "/support8.svg",
      },
    ],
  },
];

const SupportGrid = ({ darkMode }) => {
  return (
    <section className="max-w-screen-xl mx-auto md:px-20 px-5     py-10">
      <div className="  text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          02
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          Your Boitr Journey Starts Here!
        </h1>

        {sections.map((section, index) => (
          <div key={index} className="mt-10">
            <h3 className="w-full py-4 text-lg font-semibold text-white px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 inline-block">
              {section.title}
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col   gap-3  hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 ${
                    darkMode
                      ? "bg-[#232323]  hover:bg-gradient-to-r from-gray-700 to-gray-900"
                      : "bg-gray-200 hover:bg-gradient-to-r from-gray-100 to-gray-300"
                  } p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
                  <div className="w-10 h-10 text-white flex  rounded-xl  ">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <span>{item.label}</span>
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
