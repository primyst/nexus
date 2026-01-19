interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Business Strategy',
    description:
      'We help organizations define clear objectives, optimize processes, and plan for long-term growth.',
  },
  {
    title: 'Technology Consulting',
    description:
      'Our team provides expert guidance on software solutions, infrastructure, and digital transformation.',
  },
  {
    title: 'Project Delivery',
    description:
      'From concept to launch, we ensure projects are delivered on time, within budget, and with measurable impact.',
  },
  {
    title: 'Operations Optimization',
    description:
      'We analyze and improve operational workflows to maximize efficiency and minimize risk.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-20 text-white"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Nexus Corporate delivers a range of solutions designed to help
          businesses operate smarter and grow stronger.
        </p>
      </div>

      {/* Services grid */}
      <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="space-y-3">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-white/70">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}