import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="bg-[#0F2A44] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl mb-4">
          Ready to Elevate Your Enterprise?
        </h2>
        <p className="text-[#C9A227] mb-6 max-w-2xl mx-auto">
          Partner with Nexus Corporate to streamline operations, optimize finances, and drive measurable growth.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#C9A227] text-[#0F2A44] px-6 py-3 rounded-md font-medium transition hover:bg-[#1E6F5C] hover:text-white"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CTA;