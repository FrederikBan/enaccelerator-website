
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import DraggableInstax from './DraggableInstax';

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
          <DraggableInstax
            imageSrc={photo.src}
            caption={photo.caption}
            rotation={photo.rotation || (index === 0 ? -2 : index === 1 ? 1 : 3)}
            size={isMobile ? "md" : "lg"}
          />
        </div>
      ))}
    </div>
  );
};

export default InstaxPhotos;
