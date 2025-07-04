
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProgramSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const words = [
    "EnAccelerator", "is", "more", "than", "just", "an", "incubator", "—", "it's", "a", 
    "comprehensive", "10-week", "journey", "that", "transforms", "ambitious", "students", 
    "into", "confident", "founders.", "Through", "hands-on", "mentorship,", "intensive", 
    "workshops,", "and", "a", "supportive", "cohort", "of", "fellow", "entrepreneurs,", 
    "we", "provide", "everything", "you", "need", "to", "turn", "your", "innovative", 
    "ideas", "into", "real,", "impactful", "startups."
  ];

  return (
    <section id="program" className="bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
        style={{ y: backgroundY }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"
        style={{ y: backgroundY }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-8 sm:space-y-12"
          style={{ y: textY }}
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              About Our Program
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Interactive text content */}
          <motion.div
            className="relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground/90 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={textVariants}
                  className="inline-block mr-2 sm:mr-3"
                  whileHover={{ 
                    scale: 1.05,
                    color: "hsl(var(--primary))",
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Interactive highlight overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.95 
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Call to action hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="pt-8"
          >
            <motion.p 
              className="text-sm sm:text-base text-foreground/60 font-medium"
              animate={{ 
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Ready to transform your ideas into reality?
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;
