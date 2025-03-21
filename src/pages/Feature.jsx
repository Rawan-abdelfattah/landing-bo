import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Footer } from "../components/Footer";
import { Header } from "../components/feature/Header";
import FeatureGrid from "../components/feature/FeatureGrid";
import FAQ from "../components/feature/FAQ";
import { Showcase } from "../components/feature/ShowCase";
import { UserSays } from "../components/feature/UserSays";

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
    <div>
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
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Feature;
