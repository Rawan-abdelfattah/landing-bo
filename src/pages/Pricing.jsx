import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Footer } from "../components/Footer";
import { Header } from "../components/pricing/Header";
import Plans from "../components/pricing/Plans";
import SocialMediaIcons from "../components/pricing/SocialMediaIcons";
import FAQ from "../components/pricing/FAQ ";
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

const Pricing = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet> 
        <title> Boitr Pro Pricing </title>
      </Helmet>
      <div className="flex-grow">

      <AnimatedSection>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </AnimatedSection>
       <AnimatedSection>
        <Plans darkMode={darkMode}   />
      </AnimatedSection> 
      {/* <AnimatedSection>
        <SocialMediaIcons darkMode={darkMode}   />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ darkMode={darkMode}   />
      </AnimatedSection>    */}
    </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Pricing;
