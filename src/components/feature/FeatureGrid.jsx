import { Link } from "react-router-dom";
import TextScroll from "../TextScroll";
import { BsArrowUpRight } from "react-icons/bs";

export default function FeatureGrid({ darkMode }) {
  const features = [
    {
      title: "Unified Link-in-Bio Platform",
      description:
        "Links, content, and products — everything your audience needs in one sleek hub.",
      image: "/1.gif",
    },
    {
      title: "Custom Domain",
      description:
        "Make it official. Swap the generic URL for your own domain: 'yourname.com' never looked this good.",
      image: "/3.gif",
    },
    {
      title: "Sell Digital Products Like A Pro",
      description:
        "E-books, courses, templates — whatever you create, sell it directly from your page with secure payments.",
      image: "/4.png",
    },
    {
      title: "Turn Visitors Into Superfans",
      description:
        "Capture emails, grow your list, and offer irresistible value with built-in lead magnet tools.",
      image: "2.png",
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
        "Send campaigns and nurture your community, all in one place.",
      image: "/6.png",
    },
  ];

  return (
    <div className="relative overflow-hidden py-[40px]">
      <section className=" max-w-screen-xl mx-auto md:px-13 px-5    ">
        <div className="text-center lg:text-left">
          <span
            className={`${
              darkMode ? "text-outline-dark-h1" : "text-outline-light-h1"
            } `}
          >
            01
          </span>
          <div className="md:flex justify-between font-bold mb-6 py-5">
            <span className="md:max-w-[588px] text-[32px] leading-[50px] md:text-[38px] font-[700] ">
              Turn Your Passion into Profit with These Our Features
            </span>
            <div>
              <Link
                to="https://user.boitr.com/"
                className={`transition-all duration-500  inline-flex  items-center gap-2 ${
                  darkMode
                    ? "bg-[#017CD4] hover:bg-[#017CD4] hover:bg-[linear-gradient(90deg,_#389BE9_0%,_#B13FBC_100%)]"
                    : "bg-[#2c1662] hover:bg-[#2c1662] hover:bg-[linear-gradient(90deg,_#2c1662_0%,_#B13FBC_100%)]"
                }  text-white px-[20px] py-[10px] rounded-full text-sm font-bold mt-2  text-[16px]`}
              >
                Join Us Now <BsArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg text-left flex flex-col transition-all duration-500 transform
               ${
                 darkMode
                   ? "bg-[#232323] text-white "
                   : "bg-[#F1F1F1] text-black "
               }
               hover:-translate-y-2 hover:shadow-lg hover:shadow-black/30 flex-1`}
                style={{ minHeight: "100%" }} 
              >
                <h3 className="text-xl text-[22px] leading-[30px] font-[700]  mb-2">{feature.title}</h3>
                <p className=" text-[16px] leading-[20px] font-[500] flex-grow">{feature.description}</p>

                <div className=" mt-auto  translate-y-9">
                  {feature.image.endsWith(".mp4") ? (
                    <video
                      src={feature.image}
                      className="w-full h-[290px]  mt-3 object-cover rounded-xl shadow-md"
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
                      src={feature.image.replace(".gif", ".png")}
                      className="w-full  h-[290px] mt-3 object-cover rounded-xl shadow-md"
                      alt={feature.title}
                      onMouseEnter={(e) => (e.target.src = feature.image)}
                      onMouseLeave={(e) =>
                        (e.target.src = feature.image.replace(".gif", ".png"))
                      }
                    />
                  ) : (
                    <img
                      src={feature.image}
                      className="w-full  h-[290px] mt-3 object-cover rounded-xl shadow-md"
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
          className={"py-[80px]"}
          text="One Link To Rule Them All – Connect, Share."
        />
      </div>
    </div>
  );
}
