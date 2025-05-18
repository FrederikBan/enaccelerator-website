
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Apply = () => {
  useEffect(() => {
    // Set page title
    document.title = "Apply Now | EnAccelerator";
    
    // Initialize scroll reveal animation if needed
    if (window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container pt-12 pb-8 md:py-16">

        {/* Page Header */}
        <div className="max-w-3xl mx-auto mb-12 mt-8">
          <span className="inline-block py-1.5 px-4 bg-brand-yellow/20 text-sm font-medium rounded-full mb-6">
            Applications Open
          </span>
          <h1 className="mb-6">Apply to the EnAccelerator Program</h1>
          <p className="text-lg text-foreground/70">
            Join Melbourne's premier student startup incubator and transform your innovative ideas into impactful businesses.
          </p>
        </div>
        
        {/* Instax Photos Gallery */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <div className="bg-white p-2 pb-14 shadow-md rotate-[-2deg] hover:rotate-0 transition-all duration-300 mx-auto max-w-[300px]">
              <AspectRatio ratio={3/4} className="bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Students working on startup ideas" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="mt-2 text-center text-xs text-gray-600">Workshop Session #1</div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white p-2 pb-14 shadow-md rotate-[1deg] hover:rotate-0 transition-all duration-300 mx-auto max-w-[300px]">
              <AspectRatio ratio={3/4} className="bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="mt-2 text-center text-xs text-gray-600">Team Presentations</div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white p-2 pb-14 shadow-md rotate-[3deg] hover:rotate-0 transition-all duration-300 mx-auto max-w-[300px]">
              <AspectRatio ratio={3/4} className="bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Mentoring session" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="mt-2 text-center text-xs text-gray-600">Mentor Guidance</div>
            </div>
          </div>
        </div>
        
        {/* Timeline Section */}
        <section className="mb-12">
          <h2 className="mb-6">Application Timeline</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-muted/30 p-6 rounded-lg border border-border relative">
              <div className="absolute -top-3 left-6 bg-brand-yellow text-black px-3 py-1 text-sm font-medium rounded-full">
                Current Phase
              </div>
              <h3 className="text-xl font-medium mb-2">Applications Open</h3>
              <p className="text-foreground/70 mb-4">May 15 - June 10, 2025</p>
              <p className="text-sm">Submit your application through our online form. Be sure to include your business idea and relevant experience.</p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Interview Stage</h3>
              <p className="text-foreground/70 mb-4">June 15 - June 25, 2025</p>
              <p className="text-sm">Selected applicants will be invited for an interview with our team to discuss their ideas in detail.</p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Program Start</h3>
              <p className="text-foreground/70 mb-4">July 5, 2025</p>
              <p className="text-sm">Successful applicants begin the 12-week EnAccelerator program.</p>
            </div>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section className="mb-12">
          <h2 className="mb-6">Eligibility</h2>
          
          <div className="bg-muted/30 p-8 rounded-lg border border-border">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-brand-yellow/20 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Current University Student</h4>
                  <p className="text-foreground/70 text-sm">You must be enrolled as a student at the University of Melbourne for the duration of the program.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-brand-yellow/20 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Innovative Idea</h4>
                  <p className="text-foreground/70 text-sm">You should have a business idea that has the potential for sustainable growth and social impact.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-brand-yellow/20 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Commitment</h4>
                  <p className="text-foreground/70 text-sm">You must be able to commit at least 10 hours per week to work on your startup throughout the program.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-brand-yellow/20 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Team</h4>
                  <p className="text-foreground/70 text-sm">While not required, having a team of 2-4 founders is highly recommended.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Application Requirements */}
        <section className="mb-12">
          <h2 className="mb-6">Application Requirements</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Required Materials</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></span>
                  <span>Business concept description (500 words max)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></span>
                  <span>Market analysis (250 words max)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></span>
                  <span>Founder(s) resume/CV</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></span>
                  <span>1-minute pitch video (optional but recommended)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Selection Criteria</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></span>
                  <span>Innovation and creativity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></span>
                  <span>Potential for social impact</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></span>
                  <span>Feasibility and scalability</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-yellow rounded-full"></span>
                  <span>Team composition and commitment</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Apply Now CTA */}
        <section>
          <div className="bg-brand-yellow/10 rounded-lg p-8 md:p-12 text-center">
            <h2 className="mb-4">Ready to Take the Leap?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Transform your idea into a startup with guidance from industry experts, mentorship, 
              funding opportunities, and a community of like-minded innovators.
            </p>
            <Button size="lg" className="bg-brand-yellow text-black hover:bg-brand-yellow/90 min-w-[200px]">
              Start Application
            </Button>
            <p className="mt-4 text-sm text-foreground/60">
              Application deadline: June 10, 2025, 11:59 PM AEST
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;
