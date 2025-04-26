
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgramSection from '@/components/ProgramSection';
import TimelineSection from '@/components/TimelineSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SignupSection from '@/components/SignupSection';
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
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProgramSection />
        <TimelineSection />
        <BenefitsSection />
        <TestimonialsSection />
        <SignupSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
