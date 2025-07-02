
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "The program's pretty great, and is quite unique to anything in university I've done before so I really love it. For me, I've enjoyed how the program is structured to be hands-on and I can't wait to continue working with my group.",
    name: "Prem Titus",
    role: "Student Founder",
    batch: "2024 Semester 2 Cohort"
  },
  {
    quote: "EnAccelerator was transformative! It's the perfect introduction to the entrepreneurial space, connected me with inspiring individuals, and empowered me to build something meaningful.",
    name: "Erik Schober",
    role: "Founder of RegulaMind",
    batch: "2025 Semester 1 Cohort"
  },
  {
    quote: "[EnAccelerator] has been a highly rewarding experience in terms of the structural development of the foundations for building a startup. I came in with no experience and by the end of the 10-week programme, came out with a startup I intend to hold onto for a long time.",
    name: "Trishton Lee",
    role: "Founder of PocketDry",
    batch: "2025 Semester 1 Cohort"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay]);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleManualNavigation = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlay(false); // Stop auto-play when user manually navigates
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };
  
  const handleArrowClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      prevTestimonial();
    } else {
      nextTestimonial();
    }
    setIsAutoPlay(false);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };
  
  return (
    <section id="testimonials" className="bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 text-center">
          <h2 className="mb-4 sm:mb-6">Success <span className="text-brand-yellow">Stories</span></h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
            Hear from student founders who transformed their ideas into startups through our program.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="border-brand-yellow/20 hover:border-brand-yellow/40 transition-all duration-500 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <svg className="w-16 h-16 text-brand-yellow/20 mb-6 transition-all duration-300" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.737 21.948c1.002 0 1.814-.807 1.814-1.801s-.812-1.801-1.814-1.801c-1.001 0-1.813.807-1.813 1.801s.812 1.801 1.813 1.801zm0-6.776c1.001 0 1.814-.807 1.814-1.801s-.812-1.801-1.814-1.801c-1.001 0-1.813.807-1.813 1.801s.812 1.801 1.813 1.801z" />
                  <path d="M22.924 21.948c1.001 0 1.813-.807 1.813-1.801s-.812-1.801-1.813-1.801-1.813.807-1.813 1.801.812 1.801 1.813 1.801zm0-6.776c1.001 0 1.813-.807 1.813-1.801s-.812-1.801-1.813-1.801-1.813.807-1.813 1.801.812 1.801 1.813 1.801z" />
                  <path d="M9.831 28c-2.128-4.042-3.31-8.434-3.31-12.336 0-6.498 2.962-11.664 8.74-11.664.86 0 1.66.174 2.437.521-1.31-2.362-4.065-3.521-7.376-3.521-5.777 0-8.74 5.166-8.74 11.664 0 3.902 1.183 8.294 3.31 12.336.442.843 1.3 1.336 2.191 1.336h3.367c-.447-1.664-.468-2.394-.618-1.664z" />
                  <path d="M25.169 28c-2.128-4.042-3.31-8.434-3.31-12.336 0-6.498 2.962-11.664 8.74-11.664.86 0 1.66.174 2.437.521-1.31-2.362-4.065-3.521-7.376-3.521-5.777 0-8.74 5.166-8.74 11.664 0 3.902 1.183 8.294 3.31 12.336.442.843 1.3 1.336 2.191 1.336h3.367c-.447-1.664-.468-2.394-.618-1.664z" />
                </svg>
                
                <div className="relative min-h-[120px] flex items-center">
                  <p 
                    key={activeIndex} 
                    className="text-xl md:text-2xl leading-relaxed mb-10 animate-fade-in transition-all duration-500"
                  >
                    {testimonials[activeIndex].quote}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 animate-fade-in">
                  <div 
                    className="h-12 w-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-lg font-bold text-brand-yellow transition-all duration-300 hover:bg-brand-yellow/30"
                  >
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold transition-all duration-300">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-foreground/70 transition-all duration-300">{testimonials[activeIndex].role} • {testimonials[activeIndex].batch}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-110 ${
                    activeIndex === index 
                      ? 'bg-brand-yellow shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>
            
            {/* Arrow navigation - moved further away from the card */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-20">
              <button 
                onClick={() => handleArrowClick('prev')}
                className="h-12 w-12 rounded-full flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-0.5 transition-transform duration-200">
                  <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 md:-right-20">
              <button 
                onClick={() => handleArrowClick('next')}
                className="h-12 w-12 rounded-full flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86514 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86514 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
