
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ApplicationsClosed = () => {
  useEffect(() => {
    // Set page title
    document.title = "Applications Closed | EnAccelerator";
    
    // Initialize scroll reveal animation if needed
    if (window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container py-16 md:py-24">
        {/* Back to Home Button */}
        <Link to="/" className="flex items-center text-sm mb-8 hover:text-brand-yellow transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 bg-destructive/20 text-sm font-medium rounded-full mb-6">
            Applications Closed
          </span>
          <h1 className="mb-6">EnAccelerator Applications</h1>
          <p className="text-lg text-foreground/70">
            Thank you for your interest in Melbourne's premier student startup incubator. Applications for our current cohort are now closed.
          </p>
        </div>
        
        {/* Next Cohort Information */}
        <section className="mb-16">
          <div className="bg-muted/30 p-8 rounded-lg border border-border text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Next Application Cycle</h2>
            <div className="inline-block bg-brand-yellow/10 px-6 py-4 rounded-lg mb-8">
              <p className="text-2xl font-medium mb-1">Opening in November 2025</p>
              <p className="text-foreground/70">For the Winter 2026 Cohort</p>
            </div>
            <p className="mb-6">
              While applications are currently closed, we encourage you to prepare for the next cycle. 
              Review our eligibility criteria and application requirements below to ensure you're ready when applications reopen.
            </p>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Join Waitlist
            </Button>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section className="mb-16">
          <h2 className="mb-8">Eligibility</h2>
          
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
        
        {/* Stay Updated CTA */}
        <section>
          <div className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to be notified when applications open for the next cohort. 
              We also share startup resources, event invitations, and success stories from our current participants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-brand-yellow text-black hover:bg-brand-yellow/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationsClosed;
