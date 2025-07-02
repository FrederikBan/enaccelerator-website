import React, { useEffect } from 'react';

const SignupSection = () => {
  useEffect(() => {
    // Remove previous form to avoid duplication
    const existing = document.querySelector('.ml-form-embedContainer');
    if (existing) existing.innerHTML = '';

    // Load MailerLite script
    const script = document.createElement('script');
    script.src = 'https://static.mailerlite.com/js/universal.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-brand-yellow py-20">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-black mb-6 text-3xl md:text-4xl font-bold">Stay Updated</h4>
          <p className="text-lg text-black/80 mb-10">
            Subscribe to our mailing list for application dates, events, and startup resources.
          </p>

          {/* Correct MailerLite embed container — update the ID if needed */}
          <div
            id="mlb2-26946439"
            className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-26946439"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
