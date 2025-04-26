
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const SignupSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll keep you updated on EnAccelerator news and upcoming cohorts.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="bg-brand-yellow py-20">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-black mb-6">Stay Updated</h2>
          <p className="text-lg text-black/80 mb-10">
            Subscribe to our newsletter for application dates, events, and startup resources.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-transparent focus:border-black/20 h-12"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-black text-white hover:bg-black/80 h-12 px-8"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-sm text-black/60 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
