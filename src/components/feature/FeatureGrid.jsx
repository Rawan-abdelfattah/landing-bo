import TextScroll from "../TextScroll";

export default function FeatureGrid({ darkMode }) {
  const features = [
    {
      title: "Unified Link-In-Bio Platform",
      description:
        "Links, content, and products — everything your audience needs in one sleek hub.",
      image: "/1.gif",
    },
    {
      title: "Custom Domain",
      description:
        "Make it official. Swap the generic URL for your own domain: 'yourname.com' never looked this good.",
      image: "/2.png",
    },
    {
      title: "Sell Digital Products Like A Pro",
      description:
        "E-books, courses, templates — whatever you create, sell it directly from your page with secure payments.",
      image: "/3.png",
    },
    {
      title: "Turn Visitors Into Superfans",
      description:
        "Capture emails, grow your list, and offer irresistible value with built-in lead magnet tools.",
      image: "4.png",
    },
    {
      title: "Blog, Share, Shine",
      description:
        "Blogging just got easy. Keep your audience engaged with updates, and stories all hosted on your page ",
      image: "/5.png",
    },
    {
      title: "Email Marketing? Simplified",
      description:
        "Blogging just got easy. Keep your audience engaged with updates, and stories all hosted on your page ",
      image: "/6.png",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className=" max-w-screen-xl mx-auto md:px-13 px-5    ">
        <div className="text-center lg:text-left">
          <h2
            className={`${
              darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
            } `}
          >
            01
          </h2>
          <div className="md:flex justify-between font-bold mb-6 py-5">
            <h2 className="text-[36px] leading-[50px] md:text-[38px] ">
              Turn Your Passion into Profit with These Our Features
            </h2>
            <h4>
              Simplify your digital world — connect, share, and grow with ease.
            </h4>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`   p-6 rounded-2xl shadow-lg text-left flex flex-col transition-all duration-500 transform
               ${
                 darkMode
                   ? "bg-[#232323] text-white hover:bg-gradient-to-r from-gray-700 to-gray-900"
                   : "bg-gray-200 text-black hover:bg-gradient-to-r from-gray-100 to-gray-300"
               }
               hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 flex-1`}
                style={{ minHeight: "100%" }} // Ensures equal height
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80 flex-grow">{feature.description}</p>

                <div className="  mt-auto">
                {feature.image.endsWith(".mp4") ? (
  <video
    src={feature.image}
    className="w-full mt-3 object-cover rounded-xl shadow-md"
    muted
    loop={false}
    onMouseEnter={(e) => e.target.play()}
    onMouseLeave={(e) => {
      e.target.pause();
      e.target.currentTime = 0;
    }}
  />
) : feature.image.endsWith(".gif") ? (
  <img
    src={feature.image.replace(".gif", ".png")} // Replace with a static version
    className="w-full mt-3 object-cover rounded-xl shadow-md"
    alt={feature.title}
    onMouseEnter={(e) => (e.target.src = feature.image)} // Show GIF on hover
    onMouseLeave={(e) =>
      (e.target.src = feature.image.replace(".gif", ".png"))
    } // Revert to static image
  />
) : (
  <img
    src={feature.image}
    className="w-full mt-3 object-cover rounded-xl shadow-md"
    alt={feature.title}
  />
)}


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative z-0 w-full">
        <TextScroll
          darkMode={darkMode}
          className={"py-30"}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
    </div>
  );
}
