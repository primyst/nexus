'use client';
import { Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  category: 'leadership' | 'senior' | 'consultant';
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Founder & CEO',
    bio: '20+ years in management consulting. Led digital transformation for Fortune 500 companies.',
    category: 'leadership',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'James Chen',
    title: 'Chief Strategy Officer',
    bio: 'Expert in organizational transformation and market strategy. Former McKinsey partner.',
    category: 'leadership',
    social: { linkedin: '#' },
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    title: 'Head of Digital Transformation',
    bio: 'Cloud architecture specialist. Architected 50+ enterprise migrations.',
    category: 'leadership',
    social: { linkedin: '#', github: '#' },
  },
  {
    id: 4,
    name: 'David Thompson',
    title: 'Senior Consultant - Strategic Planning',
    bio: 'Specializes in growth strategy and market entry for tech companies.',
    category: 'senior',
    social: { linkedin: '#' },
  },
  {
    id: 5,
    name: 'Emily Watson',
    title: 'Senior Consultant - Change Management',
    bio: 'Expert in organizational psychology and change adoption strategies.',
    category: 'senior',
    social: { linkedin: '#' },
  },
  {
    id: 6,
    name: 'Michael Park',
    title: 'Senior Consultant - Technology Integration',
    bio: 'Enterprise software implementation specialist with 15+ years experience.',
    category: 'senior',
    social: { linkedin: '#' },
  },
  {
    id: 7,
    name: 'Lisa Johnson',
    title: 'Consultant - Digital Strategy',
    bio: 'Focused on helping mid-market companies accelerate digital initiatives.',
    category: 'consultant',
    social: { linkedin: '#' },
  },
  {
    id: 8,
    name: 'Robert Martinez',
    title: 'Consultant - Business Analysis',
    bio: 'Data-driven approach to process optimization and efficiency.',
    category: 'consultant',
    social: { linkedin: '#' },
  },
  {
    id: 9,
    name: 'Jennifer Lee',
    title: 'Consultant - Implementation',
    bio: 'Ensures smooth project execution and stakeholder alignment.',
    category: 'consultant',
    social: { linkedin: '#' },
  },
  {
    id: 10,
    name: 'Alex Kumar',
    title: 'Consultant - Analytics & Insights',
    bio: 'Transforms complex data into actionable business intelligence.',
    category: 'consultant',
    social: { linkedin: '#' },
  },
];

export default function TeamPage() {
  const leadership = teamMembers.filter((m) => m.category === 'leadership');
  const senior = teamMembers.filter((m) => m.category === 'senior');
  const consultants = teamMembers.filter((m) => m.category === 'consultant');

  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-white border-b border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 font-serif">
              Meet Our Team
            </h1>
            <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
              45+ experienced consultants dedicated to your success
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 font-serif">Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <TeamCard key={member.id} member={member} delay={idx * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Consultants */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 font-serif">Senior Consultants</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {senior.map((member, idx) => (
              <TeamCard key={member.id} member={member} delay={idx * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultants */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 font-serif">Consultants</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {consultants.map((member, idx) => (
              <TeamCard key={member.id} member={member} delay={idx * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center font-serif">Our Culture</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Collaboration', description: 'We work together to achieve shared goals' },
              { title: 'Growth', description: 'Continuous learning and professional development' },
              { title: 'Excellence', description: 'Commitment to delivering outstanding results' },
              { title: 'Integrity', description: 'Honesty and transparency in all we do' },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="bg-cream rounded-xl p-6 border border-gold/10 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-bold text-navy mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented consultants to join our growing team
          </p>
          <Link href="/contact">
            <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function TeamCard({
  member,
  delay,
}: {
  member: TeamMember;
  delay: number;
}) {
  return (
    <div
      className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Photo Placeholder */}
      <div className="w-full h-48 bg-cream rounded-lg mb-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">👤</div>
          <p className="text-light text-xs">Photo</p>
        </div>
      </div>

      {/* Info */}
      <h3 className="text-lg font-bold text-navy mb-1 font-serif">{member.name}</h3>
      <p className="text-sm text-gold font-semibold mb-3">{member.title}</p>
      <p className="text-sm text-dark mb-4 leading-relaxed">{member.bio}</p>

      {/* Social Links */}
      <div className="flex gap-3 pt-4 border-t border-gold/10">
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            className="text-light hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        )}
        {member.social.github && (
          <a
            href={member.social.github}
            className="text-light hover:text-gold transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        )}
        {member.social.twitter && (
          <a
            href={member.social.twitter}
            className="text-light hover:text-gold transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
