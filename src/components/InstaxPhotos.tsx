
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import StaticInstax from './StaticInstax';

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
  
  // On mobile, show the first two photos
  const photosToDisplay = isMobile ? photos.slice(0, 2) : photos;
  
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-6 md:gap-8">
      {photosToDisplay.map((photo, index) => (
        <div 
          className="animate-fade-in" 
          style={{ animationDelay: `${index * 0.2}s` }}
          key={index}
        >
          <StaticInstax
            imageSrc={photo.src}
            caption={photo.caption}
            rotation={photo.rotation || (index === 0 ? -2 : index === 1 ? 1 : 3)}
            size={isMobile ? "sm" : "lg"}
          />
        </div>
      ))}
    </div>
  );
};

export default InstaxPhotos;
