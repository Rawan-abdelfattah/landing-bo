import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ShowcaseSection } from "../components/ShowcaseSection";
import { AnalyticsSection } from "../components/AnalyticsSection";
import { Footer } from "../components/Footer";
import { UserSays } from "../components/UserSays";
 
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

const HomePage = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <AnimatedSection>
        <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
      </AnimatedSection>

      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>

      <AnimatedSection>
        <ShowcaseSection darkMode={darkMode} />
      </AnimatedSection>
      <AnimatedSection>
        <AnalyticsSection darkMode={darkMode} />
      </AnimatedSection>
      
      <AnimatedSection>
        <UserSays darkMode={darkMode} />
      </AnimatedSection>   
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default HomePage;
