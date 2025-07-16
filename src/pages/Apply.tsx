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
  const applicationPhotos = [{
    src: "images/stock_images/workshop-1.png",
    alt: "Workshop Session",
    caption: "Workshop Session #1",
    rotation: -2
  }, {
    src: "images/stock_images/enactus-committee.JPG",
    alt: "Enactus Melbourne Committee",
    caption: "Join a family of builders",
    rotation: 1
  }, {
    src: "images/stock_images/demoday-3.jpg",
    alt: "Person giving presentation",
    caption: "Present on the big stage",
    rotation: 3
  }];
  return <div className="min-h-screen">
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
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Application Timeline</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-yellow/5 p-8 rounded-xl border border-brand-yellow/20 relative">
                <div className="absolute -top-4 left-8 bg-brand-yellow text-black px-4 py-2 text-sm font-semibold rounded-full">
                  Current Phase
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-3">Applications Open</h3>
                  <p className="text-brand-yellow font-semibold mb-4">July 17 - July 30, 2025</p>
                  <p className="text-foreground/70">Submit your application through our online form.


Be prepared to submit your video application and your resume!</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-3">Interview Stage</h3>
                <p className="text-foreground/80 font-semibold mb-4">August 6 - August 7, 2025</p>
                <p className="text-foreground/70">Selected applicants will be invited for an interview with our team to assess whether they'll be a good for their.</p>
              </div>
              
              <div className="bg-muted/50 p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-3">Program Start</h3>
                <p className="text-foreground/80 font-semibold mb-4">August 10, 2025</p>
                <p className="text-foreground/70">The EnAccelerator Program kicks off with the Enactus Melbourne Induction Day!</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section className="mb-8">
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
                    <h4 className="text-lg font-semibold mb-2">All Experience Levels</h4>
                    <p className="text-foreground/70">We accept students from all experience levels, with an emphasis on those who are new to startups and entrepreneurship.</p>
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
                    <p className="text-foreground/70">You must be able to commit at least 6 hours per week to attend workshops, Enactus Melbourne Full Committee Meetings and to work on your startup.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/20 p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Apply As A Solo Founder</h4>
                    <p className="text-foreground/70">We only accept applications on an individual basis, but you are welcome to find cofounders within the EnAccelerator cohort.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Requirements */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What You'll Need</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-6 text-brand-yellow">Required Materials</h3>
                <ul className="space-y-4">
                  
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0"></div>
                    <span className="text-foreground/80">Applicant resume/CV</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0"></div>
                    <span className="text-foreground/80">2-minute video to showcase your personality and skills</span>
                  </li>
                  
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold mb-6 text-brand-yellow">Selection Criteria</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0"></div>
                    <span className="text-foreground/80">Willingness to learn and build a startup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0"></div>
                    <span className="text-foreground/80">Well-roundedness and applicable skills</span>
                  </li>
                  
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0"></div>
                    <span className="text-foreground/80">Desire to collaborate and share knowledge with peers</span>
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
              <a 
                href="https://forms.gle/km9obKkQ7sWsyCUo7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-brand-yellow text-black hover:bg-brand-yellow/90 text-lg px-8 py-4 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Start Your Application
              </a>
              <p className="mt-4 text-sm text-foreground/60">Application deadline: July 30, 2025, 9:00 PM AEST</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Apply;