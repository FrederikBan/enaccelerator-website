
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  email?: string;
  linkedin?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Kayson Wang",
    role: "Founder",
    bio: "Investments @ NextGen Ventures | Finance / Accounting @ Unimelb",
    imageUrl: "images/team_images/kayson.jpg",
    email: "kaysonwang2004@gmail.com",
    linkedin: "https://www.linkedin.com/in/kayson-wang-582538247",
  },
  {
    name: "Kelly Choy",
    role: "Program Coordinator",
    bio: "Educator | Event Coordinator | Graphic Designer | Interest in Social Impact and Not-For-Profit Sectors",
    imageUrl: "images/team_images/kelly.jpg",
    email: "ckyk97@gmail.com",
    linkedin: "https://www.linkedin.com/in/kellychoy11291997",
  },
  {
    name: "Nathan Pham",
    role: "Program Coordinator",
    bio: "Data Science at The University of Melbourne",
    imageUrl: "images/team_images/nathan.jpg",
    email: "hi@nathanlepham.com",
    linkedin: "https://www.linkedin.com/in/nathan-pham-2a2a51264",
  },
  {
    name: "Alexander Choong",
    role: "Program Associate",
    bio: "Student at The University of Melbourne",
    imageUrl: "images/team_images/alex.jpg",
    email: "james@enaccelerator.com",
    linkedin: "https://www.linkedin.com/in/alexander-choong-524420237",
  },
  {
    name: "Jessica Chung",
    role: "Program Associate",
    bio: "Doctor of Medicine (MD2) Student at the University of Melbourne",
    imageUrl: "images/team_images/jessica.jpg",
    email: "alex@enaccelerator.com",
    linkedin: "https://www.linkedin.com/in/jessica-chung721",
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6">Meet Our <span className="text-brand-yellow">Team</span></h2>
          <p className="text-lg text-foreground/70">
            Our experienced mentors and advisors are dedicated to helping student founders succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-brand-yellow/30">
                    {member.imageUrl ? (
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                    ) : (
                      <AvatarFallback className="bg-brand-yellow/20 text-brand-yellow font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-foreground/70">{member.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 mb-6 flex-grow">{member.bio}</p>
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1 text-sm text-foreground/70 hover:text-brand-yellow transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={16} />
                    <span>Email</span>
                  </a>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-brand-yellow transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
