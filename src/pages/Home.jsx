import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {Hero}  from "../components/home/Hero";
import { Features } from "../components/home/Features";
import { Showcase } from "../components/home/Showcase";
import { Analytics } from "../components/home/Analytics";
import { Footer } from "../components/Footer";
import { UserSays } from "../components/home/UserSays";
 
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

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <AnimatedSection>
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
      </AnimatedSection>

      <AnimatedSection>
        <Features />
      </AnimatedSection>

      <AnimatedSection>
        <Showcase darkMode={darkMode} />
      </AnimatedSection>
      <AnimatedSection>
        <Analytics darkMode={darkMode} />
      </AnimatedSection>
      
      <AnimatedSection>
        <UserSays darkMode={darkMode} />
      </AnimatedSection>   
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
