import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { AnalyticsSection } from '../components/AnalyticsSection';
import { UserSays } from '../components/UserSays';
import { Footer } from '../components/Footer';

// Animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Section Wrapper with Scroll Animation
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className="opacity-0"
    >
      {children}
    </motion.section>
  );
};

const HomePage = () => {
  return (
    <div> 
      
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>

      <AnimatedSection>
        <ShowcaseSection />
      </AnimatedSection>

      <AnimatedSection>
        <AnalyticsSection />
      </AnimatedSection>

      <AnimatedSection>
        <UserSays />
      </AnimatedSection>

      {/* Footer (No animation needed) */}
      <Footer />
    </div>
  );
};

export default HomePage;
