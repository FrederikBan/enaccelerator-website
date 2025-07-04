import React, { useState } from 'react';
import { motion } from 'framer-motion';

const collageImages = [
  '/images/stock_images/collage/DSC01404.jpg',
  '/images/stock_images/collage/DSC01409.jpg',
  '/images/stock_images/collage/DSC01410.jpg',
  '/images/stock_images/collage/DSC05326.JPG',
  '/images/stock_images/collage/DSC05348.JPG',
  '/images/stock_images/collage/DSC05379.JPG',
  '/images/stock_images/collage/DSC05399 (1).JPG',
  '/images/stock_images/collage/DSCF2572.jpg',
  '/images/stock_images/collage/EA Demo Day-002.jpg',
  '/images/stock_images/collage/EA Demo Day-004.jpg',
  '/images/stock_images/collage/EA Demo Day-015.jpg',
  '/images/stock_images/collage/EA Demo Day-016.jpg',
  '/images/stock_images/collage/EA Demo Day-025.jpg',
  '/images/stock_images/collage/EA Demo Day-080.jpg',
  '/images/stock_images/collage/EA Demo Day-093.jpg',
  '/images/stock_images/collage/EA Demo Day-115 (1).jpg',
  '/images/stock_images/collage/EA Demo Day-117.jpg',
  '/images/stock_images/collage/EA Demo Day-127.jpg',
  '/images/stock_images/collage/EA Demo Day-182.jpg',
  '/images/stock_images/collage/IMG_1112.jpg',
  '/images/stock_images/collage/IMG_1138.jpg',
  '/images/stock_images/collage/IMG_3023 2.jpg',
  '/images/stock_images/collage/IMG_3263.jpg',
  '/images/stock_images/collage/IMG_5842.jpeg',
  '/images/stock_images/collage/IMG_7918.JPG',
  '/images/stock_images/collage/IMG_8382.JPG',
  '/images/stock_images/collage/IMG_8431.JPG',
  '/images/stock_images/collage/_E2A1743.jpg'
];

// Shuffle and limit images for different screen sizes
const getDisplayImages = (isMobile: boolean) => {
  const shuffled = [...collageImages].sort(() => Math.random() - 0.5);
  return isMobile ? shuffled.slice(0, 12) : shuffled.slice(0, 20);
};

const CultureCollage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayImages = React.useMemo(() => getDisplayImages(isMobile), [isMobile]);

  const getRandomRotation = (index: number) => {
    const rotations = [-3, -2, -1, 0, 1, 2, 3];
    return rotations[index % rotations.length];
  };

  const getGridClasses = (index: number) => {
    // Create varied sizes for visual interest
    const patterns = [
      'col-span-1 row-span-1', // small
      'col-span-2 row-span-1', // wide
      'col-span-1 row-span-2', // tall
      'col-span-2 row-span-2', // large
    ];
    
    // Bias towards smaller images to fit more content
    if (index % 5 === 0) return patterns[3]; // large every 5th
    if (index % 3 === 0) return patterns[1]; // wide every 3rd
    if (index % 4 === 0) return patterns[2]; // tall every 4th
    return patterns[0]; // mostly small
  };

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 text-center">
          <h2 className="mb-4 sm:mb-6">
            Experience Our <span className="text-brand-yellow">Community</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
            Get a glimpse into the vibrant culture and energy that makes our program special.
          </p>
        </div>

        <div className={`grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4 auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-[180px] max-w-7xl mx-auto`}>
          {displayImages.map((image, index) => (
            <motion.div
              key={`${image}-${index}`}
              className={`${getGridClasses(index)} relative overflow-hidden rounded-lg bg-brand-light shadow-md`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              style={{ 
                transform: hoveredIndex === index ? 'rotate(0deg)' : `rotate(${getRandomRotation(index)}deg)`,
                transition: 'transform 0.3s ease-in-out'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-2 bg-white rounded-md overflow-hidden shadow-sm">
                <img
                  src={image}
                  alt={`EnAccelerator community moment ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100'
                  }`}
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-foreground/60 italic">
            "The connections you make and the energy you feel - that's what makes this journey unforgettable."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CultureCollage;