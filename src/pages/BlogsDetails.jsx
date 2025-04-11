import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Footer } from "../components/Footer";
import { Header } from "../components/blogs/Header";
import BlogsGrid from "../components/blogs/BlogsGrid";
import { Helmet } from "react-helmet";
import BlogDetails from "../components/blogs/BlogDetails";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="opacity-0"
    >
      {children}
    </motion.section>
  );
};

const BlogsDetails = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Made With Boitr | Best Bio Link Examples </title>
      </Helmet>
      <div className="flex-grow">
        <AnimatedSection>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </AnimatedSection>
        <AnimatedSection>
          <BlogDetails darkMode={darkMode} />
        </AnimatedSection>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default BlogsDetails;
