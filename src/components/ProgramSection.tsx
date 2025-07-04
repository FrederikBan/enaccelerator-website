
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Hands-on Mentorship",
    description: "Work with experienced founders and industry professionals who guide you through every step of your startup journey."
  },
  {
    title: "Workshop Series",
    description: "Weekly skill-building sessions covering all parts of the startup incubation phase."
  },
  {
    title: "Dedicated Cohort",
    description: "Work with a cohort of 16 student founders, with the same drive and passion to build as you."
  },
  {
    title: "Open To All Skill Levels",
    description: "Never built a startup before? No problem - learn everything you need to know about building a startup."
  },
  {
    title: "Network Building",
    description: "Connect with Melbourne's vibrant startup ecosystem and build valuable industry relationships."
  },
  {
    title: "Demo Day",
    description: "Showcase your startup to other startup founders, industry leaders, and the university community."
  }
];

const ProgramSection = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="program" className="bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-brand-yellow/10 to-transparent rounded-bl-full -z-0 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-brand-yellow/10 to-transparent rounded-tr-full -z-0 blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 sm:mb-6">
            A <motion.span 
                className="text-brand-yellow"
                animate={{ 
                  textShadow: ["0 0 0px #FFC222", "0 0 8px #FFC22250", "0 0 0px #FFC222"],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >Comprehensive</motion.span> Program <br className="hidden sm:block"/>For Future Founders
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            EnAccelerator provides a structured 10-week journey from idea to startup launch, with all the resources you need to succeed.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border backdrop-blur-sm border-border/50 hover:border-brand-yellow/50 hover:shadow-lg transition-all duration-300 group overflow-hidden h-full">
                <CardContent className="p-4 sm:p-6">
                  <motion.div 
                    className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-brand-yellow/10 rounded-lg text-brand-yellow mb-4 sm:mb-5 group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-lg sm:text-xl font-bold">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
