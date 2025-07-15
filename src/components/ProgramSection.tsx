
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
                Over a semester, you will be part of a dedicated cohort of like-minded individuals supported through a meticulously designed program, taking you from ideation all the way to your MVP.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                As part of the Enactus Melbourne committee, you will be apart of a close-knit community of other students and gain access to social events and opportunities to learn new skills.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Supported by real founders and start-up professionals, EnAccelerator supports you through your first steps on your start-up journey.
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
