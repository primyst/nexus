import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const highlights = [
    'Trusted by top-tier enterprises',
    'Proven financial strategies',
    'Global partner network',
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="animate-fade-in">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#5B6B7C]">
            Enterprise Financial Services
          </p>
          <h1 className="mb-6 text-4xl font-bold text-[#0F2A44] sm:text-5xl leading-tight">
            Strategic Solutions for Businesses That Demand Results
          </h1>
          <p className="mb-6 text-[#5B6B7C] max-w-lg">
            Nexus Corporate partners with enterprises worldwide to provide
            financial guidance, operational insight, and growth-driven strategies.
            Every engagement is built on trust, clarity, and measurable outcomes.
          </p>

          {/* Key Highlights */}
          <ul className="mb-8 flex flex-col gap-2">
            {highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-[#1E6F5C] font-medium animate-fade-in"
              >
                <span className="inline-block w-2 h-2 bg-[#C9A227] rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F2A44] text-white px-6 py-3 rounded-md font-medium transition hover:bg-[#1E6F5C]"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="text-[#5B6B7C] font-medium transition hover:text-[#0F2A44]"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative mt-12 lg:mt-0 h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/project-1.jpg"
            alt="Corporate financial discussion"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;