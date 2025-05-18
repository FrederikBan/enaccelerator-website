
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import Autoplay from 'embla-carousel-autoplay';

const PLACEHOLDER_LOGOS = [
  { name: 'University of Melbourne', bg: 'bg-gray-100' },
  { name: 'Startup Victoria', bg: 'bg-gray-50' },
  { name: 'Innovation Hub', bg: 'bg-gray-100' },
  { name: 'TechLaunch Partners', bg: 'bg-gray-50' },
  { name: 'Founders Institute', bg: 'bg-gray-100' },
  { name: 'Venture Capital Fund', bg: 'bg-gray-50' },
];

const LogoCarousel: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Show fewer items at once on mobile
  const itemsToShow = isMobile ? 2 : 4;
  
  // Create a ref for the autoplay plugin
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
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
        
        <div className="relative mx-auto max-w-5xl px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {PLACEHOLDER_LOGOS.map((logo, index) => (
                <CarouselItem key={index} className={`basis-1/${itemsToShow}`}>
                  <motion.div 
                    className={`${logo.bg} h-24 rounded-lg border border-border flex items-center justify-center p-4 mx-2 backdrop-blur-sm`}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-center font-medium text-muted-foreground">
                      {logo.name}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4" />
            <CarouselNext className="right-0 md:-right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
