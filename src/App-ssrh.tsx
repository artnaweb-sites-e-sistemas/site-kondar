import React from 'react';
import { motion } from 'framer-motion';
import NavbarSSRH from './components/Navbar-ssrh';
import HeroSSRH from './components/Hero-ssrh';
import BenefitsSSRH from './components/Benefits-ssrh';
import HowItWorks from './components/HowItWorks';
import TestimonialsSSRH from './components/Testimonials-ssrh';
import AuthoritySSRH from './components/Authority-ssrh';
import FAQ from './components/FAQ';
import FinalCTASSRH from './components/FinalCTA-ssrh';
import FooterSSRH from './components/Footer-ssrh';

function AppSSRH() {
  return (
    <div className="min-h-screen bg-white font-sans text-primary">
      <NavbarSSRH />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSSRH />
          <BenefitsSSRH />
          <HowItWorks />
          <TestimonialsSSRH />
          <AuthoritySSRH />
          <FAQ />
          <FinalCTASSRH />
        </motion.div>
      </main>
      <FooterSSRH />
    </div>
  );
}

export default AppSSRH;