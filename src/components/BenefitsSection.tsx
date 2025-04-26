
import React from 'react';

const benefits = [
  {
    title: "Expert Mentorship",
    description: "Gain guidance from experienced entrepreneurs and industry professionals who've been there before."
  },
  {
    title: "Funding Access",
    description: "Connect with potential investors and access seed funding opportunities to get your startup off the ground."
  },
  {
    title: "Skill Building",
    description: "Develop essential entrepreneurial skills through hands-on workshops and practical learning experiences."
  },
  {
    title: "Community",
    description: "Join a supportive network of like-minded student founders who understand your journey."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-brand-dark text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-white mb-6">
              Why Join <span className="text-brand-yellow">EnAccelerator</span>?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              We provide everything you need to transform your idea into a viable business, from expert guidance to funding opportunities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="reveal">
                  <h3 className="text-xl font-bold mb-2 text-brand-yellow">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:pl-12 relative">
            <div className="aspect-square relative z-10 reveal">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="bg-brand-yellow/20 rounded-lg h-full"></div>
                  <div className="bg-white/5 rounded-lg h-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg h-2/5"></div>
                  <div className="bg-brand-yellow/10 rounded-lg h-3/5"></div>
                </div>
              </div>
              
              {/* Accent elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-yellow rounded-md rotate-12 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-2 border-brand-yellow/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
