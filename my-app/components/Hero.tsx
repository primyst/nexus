'use client';
import Link from 'next/link';
import { ArrowRight, Building2, TrendingUp, Users, Award } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-boardroom.jpg"
          alt="Enterprise business solutions"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/75 to-brand-dark/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-sm font-semibold">
              Enterprise Solutions Provider
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white font-serif">
              Transform Your Enterprise Operations
            </h1>

            <p className="text-xl text-slate-100 leading-relaxed">
              Strategic consulting and operational excellence for Fortune 500 companies. Proven methodologies delivering measurable ROI across supply chain, finance, and operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/work">
                <button className="bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl">
                  View Case Studies
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-brand-accent text-brand-accent px-8 py-3 rounded-lg font-semibold hover:bg-brand-accent hover:text-white transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 hidden md:grid">
            <StatCard icon={<Building2 size={24} />} value="150+" label="Enterprise Clients" />
            <StatCard icon={<TrendingUp size={24} />} value="$8.2B" label="Value Delivered" />
            <StatCard icon={<Award size={24} />} value="97%" label="Success Rate" />
            <StatCard icon={<Users size={24} />} value="80+" label="Senior Consultants" />
          </div>
        </div>
      </div>

      {/* Mobile Stats - Below Hero */}
      <div className="md:hidden grid grid-cols-2 gap-4 max-w-7xl mx-auto px-6 mt-12 relative z-10">
        <StatCard icon={<Building2 size={20} />} value="150+" label="Clients" />
        <StatCard icon={<TrendingUp size={20} />} value="$8.2B" label="Value" />
        <StatCard icon={<Award size={20} />} value="97%" label="Success" />
        <StatCard icon={<Users size={20} />} value="80+" label="Consultants" />
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white/20 hover:border-brand-accent/40 transition-all duration-300">
      <div className="text-brand-accent mb-3">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-serif">
        {value}
      </div>
      <div className="text-xs md:text-sm text-slate-200">{label}</div>
    </div>
  );
}
