'use client';
import Link from 'next/link';
import { ArrowRight, Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-consultant.jpg"
          alt="Business consulting"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Connecting Businesses to Growth
            </h1>

            <p className="text-xl text-slate-200 leading-relaxed">
              Transform your business with expert guidance and proven methodologies. 200+ successful projects delivering measurable results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/work">
                <button className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl">
                  View Our Work
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 hidden md:grid">
            <StatCard icon={<Briefcase size={24} />} value="200+" label="Projects Completed" />
            <StatCard icon={<TrendingUp size={24} />} value="$2.5B" label="Client Value Generated" />
            <StatCard icon={<Award size={24} />} value="98%" label="Satisfaction Rate" />
            <StatCard icon={<Users size={24} />} value="45+" label="Expert Consultants" />
          </div>
        </div>
      </div>

      {/* Mobile Stats - Below Hero */}
      <div className="md:hidden grid grid-cols-2 gap-4 max-w-7xl mx-auto px-6 mt-12 relative z-10">
        <StatCard icon={<Briefcase size={20} />} value="200+" label="Projects" />
        <StatCard icon={<TrendingUp size={20} />} value="$2.5B" label="Value Generated" />
        <StatCard icon={<Award size={20} />} value="98%" label="Satisfaction" />
        <StatCard icon={<Users size={20} />} value="45+" label="Consultants" />
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
      <div className="text-yellow-500 mb-3">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-xs md:text-sm text-slate-300">{label}</div>
    </div>
  );
}
