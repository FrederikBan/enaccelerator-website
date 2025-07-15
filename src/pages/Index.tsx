
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import TimelineSection from '@/components/TimelineSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import SignupSection from '@/components/SignupSection';
import LogoCarousel from '@/components/LogoCarousel';
import Footer from '@/components/Footer';
import { initScrollReveal } from '@/utils/scrollReveal';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animation
    initScrollReveal();
    
    // Set page title
    document.title = "EnAccelerator | Student Startup Incubator";
  }, []);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <main>
          <HeroSection />
          <LogoCarousel />
          <ProgramSection />
          
          {/* Culture Collage Image */}
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
              >
                <img 
                  src="/images/stock_images/Collage.png" 
                  alt="EnAccelerator Program Culture Collage" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </section>
          
          <TimelineSection />
          <BenefitsSection />
          <TeamSection />
          <TestimonialsSection />
          {/* <SignupSection /> */}
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
