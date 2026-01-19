export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-20 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Text content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            About Nexus Corporate
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Nexus Corporate is a trusted partner for organizations looking to
            optimize their operations, enhance strategic initiatives, and
            achieve measurable results. Our team combines deep industry
            knowledge with hands-on experience to deliver solutions that work
            in the real world.
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            Founded with a mission to help businesses operate smarter, we
            emphasize transparency, efficiency, and long-term impact in every
            engagement. Our multi-disciplinary team ensures clients receive
            insights and solutions tailored to their unique challenges.
          </p>
        </div>

        {/* Optional image */}
        <div className="relative h-64 w-full md:h-[400px]">
          <img
            src="/about-office.jpg"
            alt="Professional office environment"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}