
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

interface StaticInstaxProps {
  imageSrc: string;
  caption: string;
  rotation?: number;
  size?: 'sm' | 'md' | 'lg';
}

const StaticInstax: React.FC<StaticInstaxProps> = ({ 
  imageSrc, 
  caption, 
  rotation = 0,
  size = 'md'
}) => {
  // Size mapping - made larger
  const sizeClasses = {
    sm: 'max-w-[220px]',
    md: 'max-w-[320px]',
    lg: 'max-w-[380px]'
  };
  
  return (
    <div
      className={cn(
        "relative w-full transform transition-transform duration-300 hover:scale-105",
        sizeClasses[size]
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative bg-white p-3 pb-8 shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Shiny animation overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="shiny-effect absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
        </div>
        
        <AspectRatio ratio={3/4} className="bg-gray-100 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={caption} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        <div className="mt-2 text-center text-sm text-gray-600 font-medium">{caption}</div>
      </div>
    </div>
  );
};

export default StaticInstax;
