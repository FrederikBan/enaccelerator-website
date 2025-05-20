
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { EmailProviderType, EmailService, createEmailService } from '@/services/emailService';

interface MailingListConfig {
  provider: EmailProviderType;
  apiKey: string;
  listId?: string;
  apiEndpoint?: string;
}

const SignupSection = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNameField, setShowNameField] = useState(false);
  const { toast } = useToast();

  // This config should be set once during app initialization
  // For demo purposes it's defined here, but in production
  // you would load this from environment variables or settings
  const mailingListConfig: MailingListConfig = {
    provider: 'custom', // Change to your provider: 'mailchimp', 'sendgrid', 'convertkit', 'custom'
    apiKey: 'your-api-key', // Store this securely in backend/environment
    apiEndpoint: 'https://your-api-endpoint.com/subscribe', // Your API endpoint
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!showNameField) {
      setShowNameField(true);
      return;
    }
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, you'd want to handle API keys securely in a backend
      // This is a frontend demonstration that would need a backend service
      // to securely handle API keys
      
      // For now, we'll simulate the behavior for demo purposes
      console.log("Subscribing email:", email, "with name:", firstName);
      
      // This would typically be a backend API call
      setTimeout(() => {
        toast({
          title: "Thank you for subscribing!",
          description: "We'll keep you updated on EnAccelerator news and upcoming cohorts.",
        });
        setEmail('');
        setFirstName('');
        setShowNameField(false);
        setIsSubmitting(false);
      }, 1000);
      
      // Uncomment and modify when you have a real backend or serverless function
      /*
      const emailService = createEmailService({
        providerType: mailingListConfig.provider,
        apiKey: mailingListConfig.apiKey,
        listId: mailingListConfig.listId,
        apiEndpoint: mailingListConfig.apiEndpoint,
      });
      
      const result = await emailService.subscribeEmail({
        email,
        firstName: firstName || undefined,
      });
      
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message || "You've been subscribed to our mailing list.",
        });
        setEmail('');
        setFirstName('');
        setShowNameField(false);
      } else {
        toast({
          title: "Subscription Failed",
          description: result.message || "There was an issue subscribing you. Please try again.",
          variant: "destructive",
        });
      }
      */
      
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to the mailing list. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="bg-brand-yellow py-20">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-black mb-6">Stay Updated</h2>
          <p className="text-lg text-black/80 mb-10">
            Subscribe to our newsletter for application dates, events, and startup resources.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            {showNameField && (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Your first name (optional)"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-white border-transparent focus:border-black/20 h-12"
                  />
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3">
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
                {isSubmitting ? "Subscribing..." : showNameField ? "Subscribe" : "Continue"}
              </Button>
            </div>
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
