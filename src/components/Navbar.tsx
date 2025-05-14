
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-brand-yellow rounded-md"></div>
          <span className="font-bold text-lg">EnAccelerator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#program" className="text-foreground/80 hover:text-foreground transition-colors">
            Program
          </a>
          <a href="#benefits" className="text-foreground/80 hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#timeline" className="text-foreground/80 hover:text-foreground transition-colors">
            Timeline
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
            Testimonials
          </a>
          <Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90" asChild>
            <Link to="/apply">Apply Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "transform rotate-45 translate-y-2"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-opacity duration-300",
            isMobileMenuOpen && "opacity-0"
          )}></span>
          <span className={cn(
            "w-6 h-0.5 bg-foreground transition-transform duration-300",
            isMobileMenuOpen && "transform -rotate-45 -translate-y-2"
          )}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
        isMobileMenuOpen ? "max-h-64 py-4" : "max-h-0"
      )}>
        <div className="container flex flex-col space-y-4">
          <a 
            href="#program" 
            className="py-2 px-4 text-foreground/80 hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Program
          </a>
          <a 
            href="#benefits" 
            className="py-2 px-4 text-foreground/80 hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#timeline" 
            className="py-2 px-4 text-foreground/80 hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Timeline
          </a>
          <a 
            href="#testimonials" 
            className="py-2 px-4 text-foreground/80 hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            className="bg-brand-yellow text-black hover:bg-brand-yellow/90 mx-4"
            onClick={() => setIsMobileMenuOpen(false)}
            asChild
          >
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
