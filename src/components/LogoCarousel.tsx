
import React from 'react';
import { motion } from 'framer-motion';

const PLACEHOLDER_LOGOS = [
  { name: 'University of Melbourne', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=100&fit=crop&crop=center' },
  { name: 'Startup Victoria', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&crop=center' },
  { name: 'Innovation Hub', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&crop=center' },
  { name: 'TechLaunch Partners', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=100&fit=crop&crop=center' },
  { name: 'Founders Institute', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=100&fit=crop&crop=center' },
  { name: 'Venture Capital Fund', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=100&fit=crop&crop=center' },
  { name: 'Tech Accelerator', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&crop=center' },
  { name: 'Business Incubator', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&crop=center' },
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
