'use client';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  headline?: string;
  subtext?: string;
}

export default function Hero({ headline, subtext }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] w-full">
      {/* Background image */}
      <Image
        src="/hero-consultant.jpg"
        alt="Professional consultant at work"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-24 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {headline ?? 'Delivering reliable solutions for complex business challenges'}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
            {subtext ??
              'Nexus Corporate partners with organizations to design, build, and deliver solutions that stand up to real-world demands.'}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Stats – mobile */}
      <div className="mt-12 grid grid-cols-2 gap-6 px-6 md:hidden">
        <Stat value="10+" label="Years Experience" />
        <Stat value="120+" label="Projects Delivered" />
        <Stat value="15+" label="Industries Served" />
        <Stat value="100%" label="Client-Focused" />
      </div>

      {/* Stats – desktop */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:flex justify-center gap-6 pb-8">
        <Stat value="10+" label="Years Experience" />
        <Stat value="120+" label="Projects Delivered" />
        <Stat value="15+" label="Industries Served" />
        <Stat value="100%" label="Client-Focused" />
      </div>
    </section>
  );
}

interface StatProps {
  value: string;
  label: string;
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white px-6 py-4 text-black shadow-md min-w-[120px]">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-black/60">{label}</div>
    </div>
  );
}