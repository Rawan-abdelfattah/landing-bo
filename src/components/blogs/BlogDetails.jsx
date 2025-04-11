import { useNavigate, useParams } from "react-router-dom";
import { blogsData } from "./blogsData";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const BlogDetails = ({ darkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = blogsData.findIndex((b) => b.id === parseInt(id));
  const blog = blogsData[currentIndex];

  if (!blog) return <p className="text-center mt-20">Blog not found</p>;

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/blog/${blogsData[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < blogsData.length - 1) {
      navigate(`/blog/${blogsData[currentIndex + 1].id}`);
    }
  };
 
    console.log(blog.tags);
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto md:px-13 px-5 py-[40px]">
      {blog.category && (
        <span
          className={`${
            darkMode ? "bg-[#017CD4]" : "bg-[#2c1662]"
          } text-[13px] font-[700] px-[10px] py-[10px] rounded-full text-xs z-10 text-white`}
        >
          {blog.category}
        </span>
      )}

      {blog.title && (
        <h1 className="text-[38px] font-[700] leading-[50px] mt-[8px]">
          {blog.title}
        </h1>
      )}

      {(blog.date || blog.author || blog.role) && (
        <p className="text-[14px] font-[500] mt-2">
          {blog.date && `${blog.date}`}
          {blog.author && ` | By ${blog.author}`}
          {blog.role && ` - ${blog.role}`}
        </p>
      )}

      {blog.img && (
        <img
          src={blog.img}
          alt={blog.title || "Blog image"}
          className="w-[1200px] h-[400px] mt-8 rounded-lg object-cover"
        />
      )}

      {blog.text && blog.text.length > 0 && (
        <div className="space-y-6 mt-[24px]">
          {blog.text.map((ele, index) => (
            <p key={index} className="text-[17px] leading-[30px]">
              {ele}
            </p>
          ))}
        </div>
      )}

      {blog.imgs && blog.imgs.length > 0 && (
        <div className="flex gap-6 ">
          {blog.imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Blog Image ${index + 1}`}
              className="w-full h-[400px] mt-8 rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      {blog.paragraph && blog.paragraph.length > 0 && (
        <div className="space-y-8 mt-6">
          {blog.paragraph.map((para, index) => (
            <div key={index}>
              {para.title && (
                <h3 className="text-[32px] font-[700] leading-[40px]  mb-2">
                  {para.title}
                </h3>
              )}
              {para.content && (
                <p className="text-[17px] leading-[30px] ">
                  {para.content}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {blog.tags && blog.tags.length > 0 &&(
        <div className="flex justify-between mt-[40px]">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[14px] font-[500] border px-[20px] py-[10px] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4 text-xl">
            <FaLinkedinIn className="cursor-pointer transition duration-300" />
            <FaFacebookF className="cursor-pointer transition duration-300" />
            <FaInstagram className="cursor-pointer transition duration-300" />
            <FaWhatsapp className="cursor-pointer transition duration-300" />
          </div>
        </div>
      )}

      <div className="flex justify-between mt-6 text-sm border-t border-gray-700 pt-3">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`hover:underline ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          PREV
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === blogsData.length - 1}
          className={`hover:underline ${
            currentIndex === blogsData.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
