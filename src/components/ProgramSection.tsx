
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Hands-on Mentorship",
    description: "Work with experienced founders and industry professionals who guide you through your startup journey."
  },
  {
    title: "Workshop Series",
    description: "Weekly skill-building sessions covering ideation, pitching, business modeling, and growth strategies."
  },
  {
    title: "Funding Opportunities",
    description: "Access to seed funding and connections to angel investors and venture capital networks."
  },
  {
    title: "Coworking Space",
    description: "Dedicated workspace on campus to collaborate with fellow founders and mentors."
  },
  {
    title: "Network Building",
    description: "Connect with Melbourne's vibrant startup ecosystem and build valuable industry relationships."
  },
  {
    title: "Demo Day",
    description: "Showcase your startup to investors, industry leaders, and the university community."
  }
];

const ProgramSection = () => {
  return (
    <section id="program" className="bg-white relative">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6">A <span className="text-brand-yellow">Comprehensive</span> Program <br/>For Future Founders</h2>
          <p className="text-lg text-foreground/70">
            EnAccelerator provides a structured 10-week journey from idea to startup launch, with all the resources you need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="reveal border border-border/50 hover:border-brand-yellow/50 hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 flex items-center justify-center bg-brand-yellow/10 rounded-lg text-brand-yellow mb-5 group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
