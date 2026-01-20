import Image from 'next/image';

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
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {headline ?? 'Delivering reliable solutions for complex business challenges'}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
            {subtext ??
              'Nexus Corporate partners with organizations to design, build, and deliver solutions that stand up to real-world demands.'}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Contact Us
            </a>
          </div>

          {/* Stats – mobile */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:hidden">
            <Stat value="10+" label="Years Experience" />
            <Stat value="120+" label="Projects Delivered" />
            <Stat value="15+" label="Industries Served" />
            <Stat value="100%" label="Client-Focused" />
          </div>
        </div>
      </div>

      {/* Stats – desktop */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block">
        <div className="mx-auto max-w-7xl px-6 pb-8">
          <div className="grid grid-cols-4 gap-6 rounded-lg bg-white/95 px-8 py-6 text-black">
            <Stat value="10+" label="Years Experience" dark />
            <Stat value="120+" label="Projects Delivered" dark />
            <Stat value="15+" label="Industries Served" dark />
            <Stat value="100%" label="Client-Focused" dark />
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatProps {
  value: string;
  label: string;
  dark?: boolean;
}

function Stat({ value, label, dark = false }: StatProps) {
  return (
    <div className="text-left">
      <div
        className={`text-2xl font-semibold ${dark ? 'text-black' : 'text-white'}`}
      >
        {value}
      </div>
      <div className={`mt-1 text-sm ${dark ? 'text-black/60' : 'text-white/70'}`}>
        {label}
      </div>
    </div>
  );
}