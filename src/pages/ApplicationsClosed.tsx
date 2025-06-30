import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import InstaxPhotos from '@/components/InstaxPhotos';
import { useIsMobile } from '@/hooks/use-mobile';
const ApplicationsClosed = () => {
  const isMobile = useIsMobile();
  useEffect(() => {
    document.title = "Applications Closed | EnAccelerator";
    if (window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Define photos for this page
  const photos = [{
    src: "images/stock_images/workshop-1.png",
    alt: "Workshop Session",
    caption: "Workshop Session #1",
    rotation: -6
  }, {
    src: "images/stock_images/enactus-committee.JPG",
    alt: "Enactus Melbourne Committee",
    caption: "Join a family of builders",
    rotation: 8
  }];
  return <div className="min-h-screen">
      <Navbar />
      
      <main className="container pt-20 md:pt-28 pb-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <span className="inline-block py-2 px-4 bg-destructive/20 text-sm font-medium rounded-full mb-6">
            Applications Closed
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            EnAccelerator Applications
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Thank you for your interest in Melbourne's premier student startup incubator. Applications for our current cohort are now closed.
          </p>
        </div>

        {/* Instax Photos */}
        <InstaxPhotos photos={photos} />
        
        {/* Next Cohort Information */}
        <section className="">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-yellow/5 rounded-2xl p-12 text-center border border-brand-yellow/20">
              <h2 className="text-3xl font-bold mb-8">Next Application Cycle</h2>
              <div className="inline-block bg-white rounded-xl px-8 py-6 mb-8 shadow-lg">
                <p className="text-3xl font-bold text-brand-yellow mb-2">Opening August 2025</p>
                <p className="text-foreground/70 text-lg">For the 2025 Semester 2 Cohort</p>
              </div>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                While applications are currently closed, we encourage you to prepare for the next cycle. 
                Review our eligibility criteria and application requirements below to ensure you're ready when applications reopen.
              </p>
                <a href="https://enactus-melbourne.notion.site/222333bb4fd7801b842cc998da5c3fe2?pvs=105" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black text-lg px-8 py-4 h-auto">
                    Join Waitlist
                  </Button>
                </a>
            </div>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section className="">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Eligibility Criteria</h2>
            
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
                    <h4 className="text-lg font-semibold mb-2">Join As A Solo Founder</h4>
                    <p className="text-foreground/70">Joining EnAccelerator is done on an individual founder basis, but finding cofounders and forming teams is heavily encouraged within the program.</p>
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
                    <p className="text-foreground/70">You must be able to commit at least 5 hours per week to work on your start-up throughout the program, including workshops.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-yellow/20 p-3 rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Join the Enactus Melbourne Committee</h4>
                    <p className="text-foreground/70">While not required, having a team of 2-4 founders is highly recommended for success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stay Updated CTA */}
        <section>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-12 text-center border border-border">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to be notified when applications open for the next cohort. 
                We also share startup resources, event invitations, and success stories from our current participants.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="https://assets.mailerlite.com/jsonp/1310147/forms/156545062429263666/subscribe" method="post" target="_blank">
                <input type="email" name="fields[email]" placeholder="Your email address" className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required />
                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />
                <Button type="submit" className="bg-brand-yellow text-black hover:bg-brand-yellow/90 whitespace-nowrap h-12 px-6">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default ApplicationsClosed;