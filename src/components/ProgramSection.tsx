
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Hands-on Mentorship",
    description: "Work with experienced founders and industry professionals who guide you through every step of your startup journey."
  },
  {
    title: "Workshop Series",
    description: "Weekly skill-building sessions covering all parts of the startup incubation phase."
  },
  {
    title: "Dedicated Cohort",
    description: "Work with a cohort of 16 student founders, with the same drive and passion to bulid as you."
  },
  {
    title: "Open To All Skill Levels",
    description: "Never built a startup before? No problem - learn everything you need to know about building a startup."
  },
  {
    title: "Network Building",
    description: "Connect with Melbourne's vibrant startup ecosystem and build valuable industry relationships."
  },
  {
    title: "Demo Day",
    description: "Showcase your startup to other startup founders, industry leaders, and the university community."
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
