import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Footer } from "../components/Footer";
import { Header } from "../components/feature/Header";
import FeatureGrid from "../components/feature/FeatureGrid";
import FAQ from "../components/feature/FAQ";
import { Helmet } from "react-helmet";
import { UserSays } from "../components/UserSays";
import { Showcase } from "../components/Showcase";

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

const Feature = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Link In Bio Tool Features | Boitr </title>
      </Helmet>
      <div className="flex-grow">
        <AnimatedSection>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </AnimatedSection>

        <AnimatedSection>
          <FeatureGrid darkMode={darkMode} />
        </AnimatedSection>

        <AnimatedSection>
          <Showcase darkMode={darkMode} setDarkMode={setDarkMode} />
        </AnimatedSection>
        <AnimatedSection>
          <FAQ darkMode={darkMode} />
        </AnimatedSection>

        <AnimatedSection>
          <UserSays darkMode={darkMode} />
        </AnimatedSection>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Feature;
