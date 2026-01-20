'use client';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string[];
}

const leadership: TeamMember[] = [
  {
    name: 'Michael Thompson',
    title: 'Founder & CEO',
    bio: '25+ years in enterprise consulting. Former Partner at McKinsey & Company. Led transformations for Fortune 100 companies.',
    image: '/team-ceo.jpg',
    expertise: ['Strategy', 'Operations', 'Change Management'],
  },
  {
    name: 'Sarah Chen',
    title: 'Chief Operating Officer',
    bio: '20+ years in supply chain and operations. Led end-to-end transformations at Fortune 500 manufacturers.',
    image: '/team-cto.jpg',
    expertise: ['Supply Chain', 'Operations', 'Logistics'],
  },
  {
    name: 'David Martinez',
    title: 'Chief Financial Officer',
    bio: '18+ years in finance transformation. Expert in shared services, RPA, and process automation.',
    image: '/team-cfo.jpg',
    expertise: ['Finance', 'Automation', 'Shared Services'],
  },
];

const consultants: TeamMember[] = [
  {
    name: 'Jennifer Lee',
    title: 'Senior Consultant - Supply Chain',
    bio: 'Expert in demand planning, procurement, and logistics network optimization.',
    image: '/team-ceo.jpg',
    expertise: ['Demand Planning', 'Procurement', 'Logistics'],
  },
  {
    name: 'Robert Williams',
    title: 'Senior Consultant - Operations',
    bio: 'Lean Six Sigma Master Black Belt with 15+ years of operational excellence experience.',
    image: '/team-cto.jpg',
    expertise: ['Lean Six Sigma', 'Process Improvement', 'Quality'],
  },
  {
    name: 'Maria Garcia',
    title: 'Senior Consultant - Finance',
    bio: 'Specialist in finance shared services, RPA, and FP&A transformation.',
    image: '/team-cfo.jpg',
    expertise: ['Shared Services', 'RPA', 'FP&A'],
  },
];

export default function TeamPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-brand-light border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 font-serif">
              Our Team
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              80+ senior consultants with deep industry expertise and proven track records
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center font-serif">
            Leadership
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Consultants */}
      <section className="py-20 px-6 md:px-12 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center font-serif">
            Senior Consultants
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {consultants.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center font-serif">
            Our Culture
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise',
                description: 'Deep industry knowledge combined with functional excellence',
              },
              {
                title: 'Collaboration',
                description: 'We work as true partners with our clients and each other',
              },
              {
                title: 'Impact',
                description: 'Focused on delivering measurable, lasting business results',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-light rounded-lg p-8 border border-slate-200 text-center"
              >
                <h3 className="text-2xl font-bold text-brand-dark mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-6 md:px-12 bg-brand-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented consultants to join our growing team
          </p>
          <a href="mailto:careers@nexuscorporate.com">
            <button className="bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl">
              View Opportunities
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-brand-accent hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          quality={85}
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-brand-dark mb-1 font-serif">{member.name}</h3>
        <p className="text-brand-accent font-semibold mb-4">{member.title}</p>
        <p className="text-slate-700 mb-6 leading-relaxed">{member.bio}</p>

        <div className="mb-6">
          <p className="text-sm text-slate-600 font-semibold mb-3">Expertise</p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, idx) => (
              <span
                key={idx}
                className="bg-brand-light text-brand-dark text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-slate-200">
          <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
