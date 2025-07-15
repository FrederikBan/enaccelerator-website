
import React from 'react';
import { motion } from 'framer-motion';

const ProgramSection = () => {
  return (
    <section id="program" className="bg-background relative">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="mb-6 sm:mb-8">
              About Our Program
            </h2>
            
            <div className="prose prose-lg sm:prose-xl max-w-none text-foreground/80">
              <motion.p 
                className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                EnAccelerator is more than just an incubator — it's a comprehensive 10-week journey that transforms ambitious students into confident founders. Through hands-on mentorship, intensive workshops, and a supportive cohort of fellow entrepreneurs, we provide everything you need to turn your innovative ideas into real, impactful startups.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                [Your additional program content will go here. This section is designed to accommodate longer text while maintaining readability and visual appeal. You can add multiple paragraphs describing your program features, methodology, success stories, or any other relevant information about EnAccelerator.]
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Ready to transform your ideas into reality? Join us for an experience that will change how you think about entrepreneurship and give you the tools to build the future.
              </motion.p>
            </div>
            
            {/* Simple accent line */}
            <motion.div 
              className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
