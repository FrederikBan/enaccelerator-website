
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Phone, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InteractiveObjectProps {
  type: 'laptop' | 'phone' | 'coffee';
  initialPosition?: { x: number; y: number };
  rotation?: number;
}

const InteractiveObject: React.FC<InteractiveObjectProps> = ({ 
  type, 
  initialPosition = { x: 0, y: 0 },
  rotation = 0
}) => {
  const [isClicked, setIsClicked] = useState(false);
  
  const getIcon = () => {
    switch (type) {
      case 'laptop':
        return <Laptop size={40} className="text-gray-700" />;
      case 'phone':
        return <Phone size={40} className="text-gray-700" />;
      case 'coffee':
        return <Coffee size={40} className="text-gray-700" />;
    }
  };
  
  const getLabel = () => {
    switch (type) {
      case 'laptop':
        return 'MacBook Pro';
      case 'phone':
        return 'iPhone';
      case 'coffee':
        return 'Coffee Break';
    }
  };
  
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ 
        x: initialPosition.x, 
        y: initialPosition.y, 
        rotate: rotation 
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsClicked(!isClicked)}
      className={cn(
        "absolute cursor-grab active:cursor-grabbing z-20",
        "bg-white rounded-lg shadow-md p-3 border-2",
        isClicked ? "border-brand-yellow" : "border-gray-200",
        "transition-all duration-200"
      )}
    >
      <div className="flex flex-col items-center gap-1">
        {getIcon()}
        <span className="text-xs text-gray-600 font-medium">{getLabel()}</span>
      </div>
    </motion.div>
  );
};

const InteractiveObjects: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full pointer-events-auto">
        <InteractiveObject 
          type="laptop" 
          initialPosition={{ x: 100, y: 50 }}
          rotation={-5}
        />
        <InteractiveObject 
          type="phone" 
          initialPosition={{ x: 200, y: 150 }}
          rotation={10}
        />
        <InteractiveObject 
          type="coffee" 
          initialPosition={{ x: 50, y: 200 }}
          rotation={-3}
        />
      </div>
    </div>
  );
};

export default InteractiveObjects;
