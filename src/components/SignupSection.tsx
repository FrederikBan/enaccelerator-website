import React, { useEffect } from 'react';

const SignupSection = () => {
  useEffect(() => {
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

          {/* MailerLite will inject the form here */}
          <div
            id="mlb2-26946439"
            className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-26946439"
          ></div>
        </div>
      </div>

      <style>
        {`
          .ml-form-embedContainer .ml-form-embedWrapper {
            background: transparent !important;
            padding: 0 !important;
          }

          .ml-form-embedContainer .ml-form-embedContent {
            margin-bottom: 1.5rem;
          }

          .ml-form-embedContainer input[type="email"] {
            background-color: #fff;
            border: none;
            border-radius: 0.5rem;
            height: 3rem;
            padding: 0 1rem;
            width: 100%;
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .ml-form-embedContainer button {
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 0.5rem;
            padding: 0.75rem 2rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .ml-form-embedContainer button:hover {
            background-color: #333;
          }

          .ml-form-embedContainer .ml-form-successContent {
            color: #000;
          }

          .ml-form-embedContainer .ml-form-successContent h4 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .ml-form-embedContainer .ml-form-successContent p {
            font-size: 1rem;
            color: rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
    </section>
  );
};

export default SignupSection;
