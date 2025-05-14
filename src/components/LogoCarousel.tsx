
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

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
  
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h3 className="text-center text-xl md:text-2xl mb-8">In association with</h3>
        
        <div className="relative mx-auto max-w-5xl px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {PLACEHOLDER_LOGOS.map((logo, index) => (
                <CarouselItem key={index} className={`basis-1/${itemsToShow}`}>
                  <div className={`${logo.bg} h-24 rounded-lg border border-border flex items-center justify-center p-4 mx-2`}>
                    <div className="text-center font-medium text-muted-foreground">
                      {logo.name}
                    </div>
                  </div>
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
