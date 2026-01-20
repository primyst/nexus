'use client';
import { Users, Award, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              About Nexus Corporate
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses since 2015 through strategic consulting and digital innovation
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Nexus Corporate was founded in 2015 with a simple belief: businesses need more than advice—they need partners who understand their challenges and drive real results.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Over the past decade, we've worked with 200+ companies across finance, tech, healthcare, and retail, generating over $2.5B in value for our clients. Our multi-disciplinary team of 45+ consultants combines deep industry knowledge with hands-on experience to deliver solutions that work in the real world.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We emphasize transparency, efficiency, and long-term impact in every engagement. Our approach is simple: listen, understand, and deliver.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative h-96 md:h-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/about-office.jpg"
                alt="Nexus Corporate office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <StatBox icon={<Briefcase size={24} />} value="200+" label="Projects Completed" />
            <StatBox icon={<TrendingUp size={24} />} value="$2.5B" label="Client Value Generated" />
            <StatBox icon={<Users size={24} />} value="45+" label="Expert Consultants" />
            <StatBox icon={<Award size={24} />} value="15" label="Awards Won" />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Foundation</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 rounded-xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To deliver strategic solutions that help organizations operate smarter, innovate faster, and achieve measurable business impact.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To be the trusted partner for enterprises seeking strategic guidance and digital transformation in a rapidly evolving business landscape.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Values</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-yellow-500" />
                  Excellence
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-yellow-500" />
                  Integrity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-yellow-500" />
                  Innovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Journey</h2>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-16 bg-yellow-500/30 mt-4" />
                  )}
                </div>

                <div className="pb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Why Partner with Nexus</h2>

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
                className="bg-slate-50 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 text-center"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Recognition</h2>

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
                className="bg-white rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 text-center"
              >
                <div className="text-yellow-500 text-3xl mb-3">★</div>
                <h3 className="font-bold text-slate-900 mb-2">{award.title}</h3>
                <p className="text-sm text-slate-600">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work with Nexus?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
          <Link href="/contact">
            <button className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 text-center">
      <div className="text-yellow-500 mb-3 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
