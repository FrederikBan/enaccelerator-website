
import React from 'react';
import { motion } from 'framer-motion';

const PLACEHOLDER_LOGOS = [
  { name: 'Melbourne Accelerator Program', image: 'images/partners/map.png' },
  { name: 'LaunchVic', image: 'images/partners/launchvic.png' },
  { name: 'Notion', image: 'images/partners/notion.png' },
  { name: 'Boab', image: 'images/partners/boab.png' }
];

const LogoCarousel: React.FC = () => {
  // Duplicate the logos array to create seamless loop
  const duplicatedLogos = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="container">
        <motion.h3 
          className="text-center text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          In association with
        </motion.h3>
        
        <div className="relative">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -100 * PLACEHOLDER_LOGOS.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ width: `${200 * duplicatedLogos.length}px` }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-border flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full h-full object-cover rounded-md opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
