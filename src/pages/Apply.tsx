
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import InstaxPhotos from '@/components/InstaxPhotos';
import { useIsMobile } from '@/hooks/use-mobile';

const Apply = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    document.title = "Apply Now | EnAccelerator";
    if (window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, []);
  
  // Application photos
  const applicationPhotos = [
    {
      src: "images/stock_images/workshop-1.png",
      alt: "Workshop Session",
      caption: "Workshop Session #1",
      rotation: -2
    },
    {
      src: "images/stock_images/enactus-committee.JPG",
      alt: "Enactus Melbourne Committee",
      caption: "Family of builders",
      rotation: 1
    },
    {
      src: "images/stock_images/demoday-3.jpg",
      alt: "Person giving presentation",
      caption: "Present on the big stage",
      rotation: 3
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container pt-20 md:pt-28 pb-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <span className="inline-block py-2 px-4 bg-brand-yellow/20 text-sm font-medium rounded-full mb-6">
            Applications Open
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Apply to the EnAccelerator Program
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Join Melbourne's premier student startup incubator and transform your innovative ideas into impactful businesses.
          </p>
        </div>
        
        {/* Instax Photos */}
        <InstaxPhotos photos={applicationPhotos} />
        
        {/* Timeline Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Application Timeline</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-yellow/5 p-8 rounded-xl border border-brand-yellow/20 relative">
                <div className="absolute -top-4 left-8 bg-brand-yellow text-black px-4 py-2 text-sm font-semibold rounded-full">
                  Current Phase
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-3">Applications Open</h3>
                  <p className="text-brand-yellow font-semibold mb-4">May 15 - June 10, 2025</p>
                  <p className="text-foreground/70">Submit your application through our online form. Be sure to include your business idea and relevant experience.</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-3">Interview Stage</h3>
                <p className="text-foreground/80 font-semibold mb-4">June 15 - June 25, 2025</p>
                <p className="text-foreground/70">Selected applicants will be invited for an interview with our team to discuss their ideas in detail.</p>
              </div>
              
              <div className="bg-muted/50 p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-3">Program Start</h3>
                <p className="text-foreground/80 font-semibold mb-4">July 5, 2025</p>
                <p className="text-foreground/70">Successful applicants begin the 12-week EnAccelerator program.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Eligibility Requirements</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/20 p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Current University Student</h4>
                    <p className="text-foreground/70">You must be enrolled as a student at the University of Melbourne for the duration of the program.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/20 p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Innovative Idea</h4>
                    <p className="text-foreground/70">You should have a business idea that has the potential for sustainable growth and social impact.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/20 p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Full Commitment</h4>
                    <p className="text-foreground/70">You must be able to commit at least 10 hours per week to work on your startup throughout the program.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/20 p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Team Formation</h4>
                    <p className="text-foreground/70">While not required, having a team of 2-4 founders is highly recommended for success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Requirements */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What You'll Need</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-6 text-brand-yellow">Required Materials</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-foreground/80">Business concept description (500 words max)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-foreground/80">Market analysis (250 words max)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-foreground/80">Founder(s) resume/CV</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-foreground/80">1-minute pitch video (optional but recommended)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-6 text-brand-yellow">Selection Criteria</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-foreground/80">Innovation and creativity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-foreground/80">Potential for social impact</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-foreground/80">Feasibility and scalability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-foreground/80">Team composition and commitment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-yellow/10 via-brand-yellow/5 to-brand-yellow/10 rounded-2xl p-12 text-center border border-brand-yellow/20">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Idea?</h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Join our community of innovators and get the support, mentorship, and resources you need to build a successful startup.
              </p>
              <Button size="lg" className="bg-brand-yellow text-black hover:bg-brand-yellow/90 text-lg px-8 py-4 h-auto">
                Start Your Application
              </Button>
              <p className="mt-4 text-sm text-foreground/60">
                Application deadline: June 10, 2025, 11:59 PM AEST
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;
