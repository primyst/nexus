import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Text content */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-slate-500">
            Financial & Corporate Services
          </p>

          <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl">
            Building trust through
            <br />
            strategy, structure, and execution
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600">
            Nexus Corporate partners with businesses and institutions to deliver
            clear financial guidance, operational insight, and long-term value.
            Every engagement is driven by accuracy, discretion, and measurable
            outcomes.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-lg">
          <Image
            src="/images/project-1.jpg"
            alt="Corporate financial discussion"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;