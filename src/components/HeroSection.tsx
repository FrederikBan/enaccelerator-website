
import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: custom * 0.15, 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    })
  };

  return (
    <section className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden" ref={heroRef}>
      {/* Interactive Background Elements */}
      <div className="absolute top-20 right-20 h-64 w-64 bg-brand-yellow/20 rounded-full blur-3xl -z-10 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}></div>
      <div className="absolute -bottom-20 -left-20 h-96 w-96 bg-brand-yellow/10 rounded-full blur-3xl -z-10 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}></div>
      
      <motion.div 
        className="container relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.15,
              delayChildren: 0.3
            } 
          }
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeInUp} custom={0}>
            <span className="inline-block py-1.5 px-4 bg-brand-yellow/20 backdrop-blur-sm text-sm font-medium rounded-full mb-6">
              <a href="https://enactusmelbourne.com/" target="_blank" className="hover:text-brand-yellow transition-colors">Presented By Enactus Melbourne</a>
            </span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 relative"
            variants={fadeInUp}
            custom={1}
          >
            Turning Students Into <br />
            <motion.span 
              className="text-brand-yellow inline-block relative"
              animate={{ 
                textShadow: ["0 0 0px #FFC222", "0 0 8px #FFC22250", "0 0 0px #FFC222"],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >Startup Founders</motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
            custom={2}
          >
            EnAccelerator is the premier student-run startup incubator at the University of Melbourne, 
            helping students from all backgrounds build their own startup.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
            custom={3}
          >
            <Button 
              size="lg" 
              className="bg-brand-yellow text-black hover:bg-brand-yellow/90 min-w-[180px] hover:scale-105 transition-transform shadow-md" 
              asChild
            >
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[180px] backdrop-blur-sm border-white/20 hover:border-brand-yellow/50 hover:bg-white/5 transition-all" 
              asChild
            >
              <a href="#program">Learn More</a>
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-20 pt-10 border-t border-white/10"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.8
                } 
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <motion.p 
                className="text-4xl font-bold text-brand-yellow"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >20+</motion.p>
              <p className="text-sm text-foreground/70">Student Founders</p>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <motion.p 
                className="text-4xl font-bold text-brand-yellow"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
              >10+</motion.p>
              <p className="text-sm text-foreground/70">Startups Launched</p>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <motion.p 
                className="text-4xl font-bold text-brand-yellow"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
              >2024</motion.p>
              <p className="text-sm text-foreground/70">Launched In</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
