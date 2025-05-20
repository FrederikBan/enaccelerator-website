
import React, { useState, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DraggableInstaxProps {
  imageSrc: string;
  caption: string;
  rotation?: number;
  size?: 'sm' | 'md' | 'lg';
}

const DraggableInstax: React.FC<DraggableInstaxProps> = ({ 
  imageSrc, 
  caption, 
  rotation = 0,
  size = 'md'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  
  // Size mapping
  const sizeClasses = {
    sm: 'max-w-[200px]',
    md: 'max-w-[280px]',
    lg: 'max-w-[350px]'
  };
  
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileTap={{ scale: 1.05 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ rotate: rotation }}
      whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
      className={cn(
        "relative cursor-grab active:cursor-grabbing",
        sizeClasses[size],
        isDragging ? "z-50" : "z-10"
      )}
    >
      <div className="relative bg-white p-2 pb-14 shadow-md transition-all duration-300">
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
        <div className="mt-2 text-center text-xs text-gray-600">{caption}</div>
      </div>
    </motion.div>
  );
};

export default DraggableInstax;
