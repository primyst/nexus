'use client';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-serif">
            About Nexus Corporate
          </h2>
          <p className="text-xl text-light max-w-2xl mx-auto">
            Transforming businesses since 2015 through strategic consulting and digital innovation
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-dark leading-relaxed">
              Nexus Corporate is a trusted partner for organizations looking to optimize operations, enhance strategic initiatives, and achieve measurable results. Our team combines deep industry knowledge with hands-on experience to deliver solutions that work in the real world.
            </p>

            <p className="text-lg text-dark leading-relaxed">
              Founded with a mission to help businesses operate smarter, we emphasize transparency, efficiency, and long-term impact in every engagement. Our multi-disciplinary team ensures clients receive insights and solutions tailored to their unique challenges.
            </p>

            <Link href="/about">
              <button className="bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
                Learn More About Us
              </button>
            </Link>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <StatBox icon={<Users size={24} />} value="50+" label="Clients Served" />
            <StatBox icon={<Award size={24} />} value="10+" label="Awards Won" />
            <StatBox icon={<Briefcase size={24} />} value="120+" label="Projects Delivered" />
            <StatBox icon={<TrendingUp size={24} />} value="15+" label="Industries Served" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-cream rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300">
      <div className="text-gold mb-3">{icon}</div>
      <div className="text-3xl font-bold text-navy font-serif mb-1">{value}</div>
      <div className="text-sm text-light">{label}</div>
    </div>
  );
}
