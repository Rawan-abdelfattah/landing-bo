import TextScroll from "../TextScroll";

export default function FeatureGrid({ darkMode }) {
  const features = [
    {
      title: "Unified Link-In-Bio Platform",
      description:
        "Links, content, and products — everything your audience needs in one sleek hub.",
      image: "1.png",
    },
    {
      title: "Custom Domain",
      description:
        "Make it official. Swap the generic URL for your own domain: 'yourname.com' never looked this good.",
      image: "2.png",
    },
    {
      title: "Sell Digital Products Like A Pro",
      description:
        "E-books, courses, templates — whatever you create, sell it directly from your page with secure payments.",
      image: "3.png",
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
        "Blogging just got easy. Keep your audience engaged with updates, and stories all hosted on your page.",
      image: "5.png",
    },
    {
      title: "Email Marketing? Simplified",
      description:
        "Send campaigns and nurture your community, all in one place.",
      image: "6.png",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 px-6">
      <div className="max-w-6xl mx-auto text-center lg:text-left">
        <h2
          className={`${
            darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
          } `}
        >
          01
        </h2>
        <div className="md:flex justify-between font-bold mb-6 py-5">
          <h2 className="text-2xl md:text-4xl ">Simplify your digital world</h2>
          <h4> connect, share, and grow with ease.</h4>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg text-left flex flex-col items-start transition-all duration-500 transform
                ${
                  darkMode
                    ? "bg-[#232323] text-white hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    : "bg-gray-200 text-black hover:bg-gradient-to-r from-gray-100 to-gray-300"
                }
                hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30`}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
              <img src={feature.image} className="pt-10" alt={feature.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-0 w-full">
        <TextScroll
          darkMode={darkMode}
          className={"py-30"}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
    </section>
  );
}
