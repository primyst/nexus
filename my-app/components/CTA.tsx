'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Grow Your Wealth?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Schedule a consultation with our financial advisors to discuss your goals and develop a customized strategy.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded font-semibold hover:bg-gray-100 transition-smooth"
        >
          Schedule Your Consultation
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
