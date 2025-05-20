
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
                <img src="/logos/SVG/icon-square-inverted-svg.svg" alt="EnAccelerator Logo" className="h-8 w-8 object-contain" />
              <span className="font-bold text-lg">EnAccelerator</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Turning student ideas into impactful startups at the University of Melbourne.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z" fill="currentColor" />
                  <path d="M6.5 8C5.121 8 4 6.879 4 5.5S5.121 3 6.5 3 9 4.121 9 5.5 7.879 8 6.5 8z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Program</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">About</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">Timeline</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">Apply</a></li>
                </ul>
              </div>
              {/*<div>
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">Startup Guide</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">Workshops</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">Mentors</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">Blog</a></li>
                </ul>
              </div>*/}
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="https://enactusmelbourne.com/" target="_blank" className="text-foreground/70 hover:text-brand-yellow transition-colors">Enactus Melbourne</a></li>
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">Team</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-foreground/70 hover:text-brand-yellow transition-colors">Email Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} EnAccelerator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
