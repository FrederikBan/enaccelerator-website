
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Real People, Real Experts",
    description: "Gain guidance from experienced entrepreneurs and industry professionals who've been there before."
  },
  {
    title: "Authentic Connections",
    description: "EnAccelerator has an emphasis on in-person interactions and bonding; no more learning over online workshops."
  },
  {
    title: "Skill Building",
    description: "Develop essential entrepreneurial skills through hands-on workshops and practical learning experiences."
  },
  {
    title: "Community",
    description: "Join a supportive network of like-minded student founders who understand your journey and have the same goals as you."
  }
];

const BenefitsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="benefits" className="bg-brand-dark text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#222,#000)] opacity-50 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 120%, #222, #000)",
            "radial-gradient(circle at 30% 100%, #333, #000)",
            "radial-gradient(circle at 70% 90%, #222, #000)",
            "radial-gradient(circle at 50% 120%, #222, #000)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand-yellow/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-4 sm:mb-6">
              Why Join <motion.span 
                className="text-brand-yellow"
                animate={{ 
                  textShadow: ["0 0 0px #FFC222", "0 0 8px #FFC22250", "0 0 0px #FFC222"],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >EnAccelerator</motion.span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed">
              We provide everything you need to transform your idea into a your very own start-up.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-brand-yellow flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="inline-block mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span> 
                    {benefit.title}
                  </motion.h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:pl-8 xl:pl-12 relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square relative z-10 max-w-md mx-auto lg:max-w-none">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                <motion.div 
                  className="space-y-4"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-brand-yellow/20 backdrop-blur-sm rounded-lg h-full p-2 sm:p-4 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="images/stock_images/workshop-1.png"
                      alt="Person presenting workshop"
                      className="object-cover w-full h-full rounded-md"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm rounded-lg h-full p-2 sm:p-4 overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="images/stock_images/workshop-2.png"
                      alt="Group of people posing for photo"
                      className="object-cover w-full h-full rounded-md"
                    />
                    <p className="text-white/80 text-xs sm:text-sm absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-black/60 p-1.5 sm:p-2 rounded">Join a community of founders driven by innovation</p>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="space-y-4"
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="bg-white/5 backdrop-blur-sm rounded-lg h-2/5 p-2 sm:p-4 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="images/stock_images/demoday-2.jpg"
                      alt="Three people posing for photo"
                      className="object-cover w-full h-full rounded-md"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="bg-brand-yellow/10 backdrop-blur-sm rounded-lg h-3/5 p-2 sm:p-4 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src="images/stock_images/demoday-1.jpg"
                      alt="People chatting"
                      className="object-cover w-full h-full rounded-md"
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Accent elements */}
              <motion.div 
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-brand-yellow rounded-md z-0"
                animate={{ 
                  rotate: [0, 12, 0], 
                  scale: [1, 1.05, 1] 
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-20 h-20 sm:w-32 sm:h-32 border-2 border-brand-yellow/30 rounded-full z-0"
                animate={{ 
                  rotate: [0, 360], 
                  scale: [1, 1.1, 1] 
                }}
                transition={{ duration: 20, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
