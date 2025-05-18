
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: ""The program's pretty great, and is quite unique to anything in university I've done before so I really love it. For me, I've enjoyed how the program is structured to be hands-on and I can't wait to continue working with my group." ",
    name: "Prem Titus",
    role: "Student Founder",
    batch: "2024 Semester 2 Cohort"
  }
  // More testimonials can be added here
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0
      };
    }
  };

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-gradient-to-br from-white to-gray-50">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <motion.div 
        className="container relative z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6">
            Success <motion.span 
              className="text-brand-yellow"
              animate={{ 
                textShadow: ["0 0 0px #FFC222", "0 0 8px #FFC22250", "0 0 0px #FFC222"],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >Stories</motion.span>
          </h2>
          <p className="text-lg text-foreground/70">
            Hear from student founders who transformed their ideas into startups through our program.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                custom={activeIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
              >
                <Card className="border-brand-yellow/20 hover:border-brand-yellow/40 transition-all duration-300 backdrop-blur-sm bg-white/80">
                  <CardContent className="p-8 md:p-12">
                    <motion.svg 
                      className="w-16 h-16 text-brand-yellow/20 mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                      fill="currentColor" 
                      viewBox="0 0 32 32" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.737 21.948c1.002 0 1.814-.807 1.814-1.801s-.812-1.801-1.814-1.801c-1.001 0-1.813.807-1.813 1.801s.812 1.801 1.813 1.801zm0-6.776c1.001 0 1.814-.807 1.814-1.801s-.812-1.801-1.814-1.801c-1.001 0-1.813.807-1.813 1.801s.812 1.801 1.813 1.801z M22.924 21.948c1.001 0 1.813-.807 1.813-1.801s-.812-1.801-1.813-1.801-1.813.807-1.813 1.801.812 1.801 1.813 1.801zm0-6.776c1.001 0 1.813-.807 1.813-1.801s-.812-1.801-1.813-1.801-1.813.807-1.813 1.801.812 1.801 1.813 1.801z M9.831 28c-2.128-4.042-3.31-8.434-3.31-12.336 0-6.498 2.962-11.664 8.74-11.664.86 0 1.66.174 2.437.521-1.31-2.362-4.065-3.521-7.376-3.521-5.777 0-8.74 5.166-8.74 11.664 0 3.902 1.183 8.294 3.31 12.336.442.843 1.3 1.336 2.191 1.336h3.367C10.002 28 9.98 27.27 9.831 28z M25.169 28c-2.128-4.042-3.31-8.434-3.31-12.336 0-6.498 2.962-11.664 8.74-11.664.86 0 1.66.174 2.437.521C31.725 2.16 28.97 1 25.659 1c-5.777 0-8.74 5.166-8.74 11.664 0 3.902 1.183 8.294 3.31 12.336.442.843 1.3 1.336 2.191 1.336h3.367c-.447-1.664-.468-2.394-.618-1.664z"></path>
                    </motion.svg>
                    
                    <motion.p 
                      className="text-xl md:text-2xl leading-relaxed mb-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {testimonials[activeIndex].quote}
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <div className="h-12 w-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-lg font-bold text-brand-yellow">
                        {testimonials[activeIndex].name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{testimonials[activeIndex].name}</p>
                        <p className="text-sm text-foreground/70">{testimonials[activeIndex].role} • {testimonials[activeIndex].batch}</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? 'bg-brand-yellow' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.button>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button 
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg hover:bg-brand-yellow hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </button>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button 
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg hover:bg-brand-yellow hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86514 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86514 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
