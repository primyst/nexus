'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <p className="text-blue-900 font-semibold text-sm tracking-widest uppercase">
                Financial Excellence
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Wealth Management for the Future
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Strategic financial planning and investment management tailored to your unique goals. We combine market expertise with personalized service to build lasting wealth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-blue-900 text-white rounded font-semibold hover:bg-blue-950 transition-smooth inline-flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded font-semibold hover:border-gray-400 hover:bg-gray-50 transition-smooth"
              >
                Schedule Meeting
              </Link>
            </div>
          </div>

          <div className={`relative h-96 md:h-full ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl"></div>
            <div className="absolute inset-6 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
              <div className="text-center space-y-6 p-8">
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-gray-900">$2.4B</p>
                  <p className="text-gray-600 font-medium">Assets Under Management</p>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600 font-medium">Client Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
