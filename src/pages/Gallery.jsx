import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Footer } from "../components/Footer";
import { Header } from "../components/gallery/Header";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { Helmet } from "react-helmet";

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

const Gallery = ({ darkMode, setDarkMode }) => {
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
          <GalleryGrid darkMode={darkMode} />
        </AnimatedSection>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Gallery;
