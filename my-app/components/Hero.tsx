'use client';
import Link from 'next/link';
import { ArrowRight, Users, Award, Briefcase, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Connecting Businesses to Growth
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              Transform your business with expert guidance and proven methodologies. 200+ successful projects delivering measurable results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/work">
                <button className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                  View Our Work
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
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
    <div className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-500/10">
      <div className="text-yellow-500 mb-3">{icon}</div>
      <div className="text-3xl font-bold text-slate-900 mb-1">
        {value}
      </div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
