'use client';
import Link from 'next/link';
import { ArrowRight, Users, Award, Briefcase, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-24 pb-12 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-navy font-serif">
              Connecting Businesses to Growth
            </h1>

            <p className="text-xl text-light leading-relaxed">
              Transform your business with expert guidance and proven methodologies. 200+ successful projects delivering measurable results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/work">
                <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                  View Our Work
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-navy transition-all duration-300 w-full sm:w-auto">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <StatCard icon={<Briefcase size={24} />} value="200+" label="Projects Completed" />
            <StatCard icon={<TrendingUp size={24} />} value="$2.5B" label="Client Value Generated" />
            <StatCard icon={<Award size={24} />} value="98%" label="Satisfaction Rate" />
            <StatCard icon={<Users size={24} />} value="45+" label="Expert Consultants" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gold/10">
      <div className="text-gold mb-3">{icon}</div>
      <div className="text-3xl font-bold text-navy font-serif mb-1">{value}</div>
      <div className="text-sm text-light">{label}</div>
    </div>
  );
}
