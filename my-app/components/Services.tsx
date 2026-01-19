import React from 'react';
import { Briefcase, BarChart, Shield } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: 'Corporate Advisory',
    description:
      'Strategic guidance for businesses seeking financial clarity and sustainable growth.',
    icon: <Briefcase size={24} />,
  },
  {
    title: 'Financial Planning & Analysis',
    description:
      'Comprehensive analytics to help organizations make informed investment and operational decisions.',
    icon: <BarChart size={24} />,
  },
  {
    title: 'Risk & Compliance',
    description:
      'Identifying and mitigating risks while ensuring compliance with industry regulations.',
    icon: <Shield size={24} />,
  },
];

const Services: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Nexus Corporate provides expert solutions tailored to the unique needs of
          each client.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--background)] p-6 transition hover:shadow-lg"
          >
            <div className="mb-2 text-[var(--primary)]">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--foreground)]">
              {service.title}
            </h3>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;