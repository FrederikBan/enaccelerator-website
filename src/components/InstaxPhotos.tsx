
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

interface InstaxPhoto {
  src: string;
  alt: string;
  caption: string;
  rotation?: number;
}

interface InstaxPhotosProps {
  photos: InstaxPhoto[];
}

const InstaxPhotos: React.FC<InstaxPhotosProps> = ({ photos }) => {
  const isMobile = useIsMobile();
  
  // On mobile, only show the first photo
  const photosToDisplay = isMobile ? [photos[0]] : photos;
  
  return (
    <div className={`mb-12 grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-8`}>
      {photosToDisplay.map((photo, index) => (
        <div 
          className="animate-fade-in" 
          style={{ animationDelay: `${index * 0.2}s` }}
          key={index}
        >
          <div 
            className={`bg-white p-2 pb-14 shadow-md rotate-[${photo.rotation || index === 0 ? -2 : index === 1 ? 1 : 3}deg] hover:rotate-0 transition-all duration-300 mx-auto max-w-[300px]`}
          >
            <AspectRatio ratio={3/4} className="bg-gray-100 overflow-hidden">
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <div className="mt-2 text-center text-xs text-gray-600">{photo.caption}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstaxPhotos;
