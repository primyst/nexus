'use client';
import { Users, Award, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      title: 'Enterprise Focus',
      description: 'Deep expertise in complex, large-scale enterprise transformations',
    },
    {
      title: 'Results-Driven',
      description: 'Measured outcomes and ROI are at the core of everything we do',
    },
    {
      title: 'Collaborative',
      description: 'True partnerships with clients, not just advisory relationships',
    },
    {
      title: 'Practical',
      description: 'Real-world solutions that work, not theoretical frameworks',
    },
    {
      title: 'Integrity',
      description: 'Transparent, honest advice even when it challenges the status quo',
    },
  ];

  const team = [
    {
      name: 'Michael Thompson',
      title: 'Founder & CEO',
      bio: '25+ years in enterprise consulting. Former Partner at McKinsey.',
      image: '/team-ceo.jpg',
    },
    {
      name: 'Sarah Chen',
      title: 'Chief Operating Officer',
      bio: '20+ years in supply chain and operations. Led transformations at Fortune 100 companies.',
      image: '/team-cto.jpg',
    },
    {
      name: 'David Martinez',
      title: 'Chief Financial Officer',
      bio: '18+ years in finance transformation. Expert in shared services and process automation.',
      image: '/team-cfo.jpg',
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-brand-light border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 font-serif">
              About Nexus Corporate
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise transformation partner for Fortune 500 companies and leading mid-market enterprises
            </p>
          </div>
        </div>
      </section>

      {/* Company Story with Image */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-dark mb-4 font-serif">Our Story</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Founded in 2010, Nexus Corporate emerged from a simple insight: enterprise transformation requires more than strategy—it requires execution excellence, deep industry knowledge, and unwavering commitment to results.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Over the past 15 years, we've partnered with 150+ enterprise clients across manufacturing, finance, healthcare, and logistics, delivering $8.2B in measurable value. Our 80+ senior consultants combine deep functional expertise with proven change management capabilities.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We don't believe in one-size-fits-all solutions. Every engagement is tailored to the unique challenges and opportunities of our clients. We measure success by the lasting impact we create—not by project completion.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about-office.jpg"
                alt="Nexus Corporate office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <StatBox icon={<Briefcase size={24} />} value="150+" label="Enterprise Clients" />
            <StatBox icon={<TrendingUp size={24} />} value="$8.2B" label="Value Delivered" />
            <StatBox icon={<Users size={24} />} value="80+" label="Senior Consultants" />
            <StatBox icon={<Award size={24} />} value="97%" label="Success Rate" />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center font-serif">
            Our Foundation
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-brand-light rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-brand-accent mb-4 font-serif">Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To deliver transformational enterprise solutions that drive sustainable competitive advantage and measurable business impact for our clients.
              </p>
            </div>

            <div className="bg-brand-light rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-brand-accent mb-4 font-serif">Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To be the trusted transformation partner for enterprises seeking operational excellence and strategic competitive advantage in a rapidly evolving market.
              </p>
            </div>

            <div className="bg-brand-light rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-brand-accent mb-4 font-serif">Values</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-accent flex-shrink-0" />
                  Results-Driven
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-accent flex-shrink-0" />
                  Integrity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-accent flex-shrink-0" />
                  Collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 md:px-12 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center font-serif">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-brand-accent transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-bold text-brand-dark mb-2 font-serif">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center font-serif">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="text-center bg-brand-light rounded-lg p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2 font-serif">
                  {member.name}
                </h3>
                <p className="text-brand-accent font-semibold mb-3">{member.title}</p>
                <p className="text-slate-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-6 md:px-12 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center font-serif">
            Areas of Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Supply Chain', projects: '45+' },
              { title: 'Finance & Operations', projects: '38+' },
              { title: 'Healthcare', projects: '32+' },
              { title: 'Manufacturing', projects: '35+' },
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-slate-200 text-center hover:border-brand-accent transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-brand-dark mb-2 font-serif">
                  {area.title}
                </h3>
                <p className="text-3xl font-bold text-brand-accent mb-2">{area.projects}</p>
                <p className="text-sm text-slate-600">Successful projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-brand-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Let's Transform Your Enterprise
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover how we can deliver measurable results for your organization
          </p>
          <Link href="/contact">
            <button className="bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-brand-accent transition-all duration-300 text-center">
      <div className="text-brand-accent mb-3 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold text-brand-dark mb-1 font-serif">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
