'use client';
import { Users, Award, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const timeline = [
    { year: '2015', title: 'Founded', description: 'Nexus Corporate established by Sarah Mitchell' },
    { year: '2017', title: 'Expansion', description: 'Grew to 20 consultants, opened NYC headquarters' },
    { year: '2019', title: 'Milestone', description: 'Reached 100+ clients, achieved ISO 27001 certification' },
    { year: '2022', title: 'Growth', description: 'Expanded to 45 consultants, served 200+ clients' },
    { year: '2025', title: 'Industry Leader', description: '15 awards won, $2.5B+ client value generated' },
  ];

  const values = [
    { title: 'Excellence', description: 'We deliver exceptional results in everything we do' },
    { title: 'Integrity', description: 'Transparency and honesty guide our partnerships' },
    { title: 'Innovation', description: 'We embrace new ideas and cutting-edge solutions' },
    { title: 'Teamwork', description: 'Collaboration drives our success and impact' },
    { title: 'Client-Centric', description: 'Your success is our primary measure of achievement' },
  ];

  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-white border-b border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 font-serif">
              About Nexus Corporate
            </h1>
            <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
              Transforming businesses since 2015 through strategic consulting and digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-navy mb-4 font-serif">Our Story</h2>
              <p className="text-lg text-dark leading-relaxed">
                Nexus Corporate was founded in 2015 with a simple belief: businesses need more than advice—they need partners who understand their challenges and drive real results.
              </p>
              <p className="text-lg text-dark leading-relaxed">
                Over the past decade, we've worked with 200+ companies across finance, tech, healthcare, and retail, generating over $2.5B in value for our clients. Our multi-disciplinary team of 45+ consultants combines deep industry knowledge with hands-on experience to deliver solutions that work in the real world.
              </p>
              <p className="text-lg text-dark leading-relaxed">
                We emphasize transparency, efficiency, and long-term impact in every engagement. Our approach is simple: listen, understand, and deliver.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gold/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Briefcase size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-navy font-serif">200+</p>
                    <p className="text-light">Projects Completed</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <TrendingUp size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-navy font-serif">$2.5B</p>
                    <p className="text-light">Client Value Generated</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Users size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-navy font-serif">45+</p>
                    <p className="text-light">Expert Consultants</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Award size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-navy font-serif">15</p>
                    <p className="text-light">Awards Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center font-serif">Our Foundation</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cream rounded-xl p-8 border border-gold/10 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gold mb-4 font-serif">Mission</h3>
              <p className="text-dark leading-relaxed">
                To deliver strategic solutions that help organizations operate smarter, innovate faster, and achieve measurable business impact.
              </p>
            </div>

            <div className="bg-cream rounded-xl p-8 border border-gold/10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-gold mb-4 font-serif">Vision</h3>
              <p className="text-dark leading-relaxed">
                To be the trusted partner for enterprises seeking strategic guidance and digital transformation in a rapidly evolving business landscape.
              </p>
            </div>

            <div className="bg-cream rounded-xl p-8 border border-gold/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gold mb-4 font-serif">Values</h3>
              <ul className="space-y-2 text-dark">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold" />
                  Excellence
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold" />
                  Integrity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold" />
                  Innovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center font-serif">Our Journey</h2>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div
                key={item.year}
                className="flex gap-8 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-16 bg-gold/30 mt-4" />
                  )}
                </div>

                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-navy mb-2 font-serif">{item.title}</h3>
                  <p className="text-dark">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center font-serif">Why Partner with Nexus</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award size={24} />,
                title: 'Proven Track Record',
                description: '200+ projects, 98% client satisfaction, $2.5B value generated',
              },
              {
                icon: <Users size={24} />,
                title: 'Expert Team',
                description: '45+ senior consultants with 15+ years of experience each',
              },
              {
                icon: <Briefcase size={24} />,
                title: 'Custom Solutions',
                description: 'Tailored approaches designed for your unique challenges',
              },
              {
                icon: <TrendingUp size={24} />,
                title: 'Results-Driven',
                description: 'Focused on measurable outcomes and long-term ROI',
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="bg-cream rounded-xl p-6 border border-gold/10 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-gold mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center font-serif">Recognition</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Best Digital Transformation Consultant', year: '2024' },
              { title: 'Top 50 Management Consulting Firms', year: '2023-2024' },
              { title: 'ISO 27001 Certified', year: 'Active' },
              { title: 'SOC 2 Type II Compliant', year: 'Active' },
              { title: 'Great Place to Work Certified', year: '2024' },
              { title: 'Industry Excellence Award', year: '2023' },
            ].map((award, idx) => (
              <div
                key={award.title}
                className="bg-white rounded-xl p-6 border border-gold/10 text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-gold text-3xl mb-3">★</div>
                <h3 className="font-bold text-navy mb-2">{award.title}</h3>
                <p className="text-sm text-light">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">Ready to Work with Nexus?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
          <Link href="/contact">
            <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
