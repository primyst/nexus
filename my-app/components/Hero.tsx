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
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-purple-600 font-semibold text-sm tracking-widest uppercase">
                Welcome to Nexus
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Design That
                <span className="block gradient-text">Transforms</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We create bold, innovative digital experiences that elevate brands and drive meaningful results. From concept to execution, we deliver excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/work"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-xl transition-smooth inline-flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-smooth"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative h-96 md:h-full ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 rounded-3xl opacity-40"></div>
            <div className="absolute inset-4 bg-gradient-to-tr from-purple-300 to-purple-100 rounded-2xl opacity-30"></div>
            <div className="absolute inset-8 bg-white rounded-xl shadow-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full mx-auto"></div>
                <p className="text-gray-600 font-medium">Creative Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
