
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
              {/*<a href="https://www.facebook.com/Enactusunimelb/" className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="currentColor" />
                </svg>
              </a>*/}
              <a href="https://www.linkedin.com/company/enaccelerator/" className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 19H5V9h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03V19z" fill="currentColor" />
                  <path d="M6.5 8C5.121 8 4 6.879 4 5.5S5.121 3 6.5 3 9 4.121 9 5.5 7.879 8 6.5 8z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.instagram.com/enaccelerator" className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                      <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                                            c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                                            c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                                            c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                      <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                                            C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                                            c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                      <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                                            c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                                            C135.661,29.421,132.821,28.251,129.921,28.251z" />
                    </g>                
                  </svg>
              </a>
              {/*<a href="#" className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
                </svg>
              </a>*/}
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
