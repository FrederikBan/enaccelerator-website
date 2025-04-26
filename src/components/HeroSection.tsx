
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 h-64 w-64 bg-brand-yellow/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 h-96 w-96 bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="inline-block py-1.5 px-4 bg-brand-yellow/20 text-sm font-medium rounded-full mb-6">
              By Enactus Melbourne
            </span>
            
            <h1 className="mb-6">
              Transform Your Ideas Into <br />
              <span className="text-brand-yellow">Impactful Startups</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              EnAccelerator is the premier student startup incubator at the University of Melbourne, 
              helping ambitious students turn innovative ideas into sustainable businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-brand-yellow text-black hover:bg-brand-yellow/90 min-w-[180px]">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="min-w-[180px]">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-20 pt-10 border-t">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="text-4xl font-bold text-brand-yellow">12+</p>
              <p className="text-sm text-foreground/70">Startups Launched</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-4xl font-bold text-brand-yellow">80%</p>
              <p className="text-sm text-foreground/70">Success Rate</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-4xl font-bold text-brand-yellow">15+</p>
              <p className="text-sm text-foreground/70">Industry Mentors</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-4xl font-bold text-brand-yellow">$50K</p>
              <p className="text-sm text-foreground/70">Funding Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
