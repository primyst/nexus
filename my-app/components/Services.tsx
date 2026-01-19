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
    icon: <Briefcase size={24} className="text-[#0F2A44]" />,
  },
  {
    title: 'Financial Planning & Analysis',
    description:
      'Comprehensive analytics to help organizations make informed investment and operational decisions.',
    icon: <BarChart size={24} className="text-[#0F2A44]" />,
  },
  {
    title: 'Risk & Compliance',
    description:
      'Identifying and mitigating risks while ensuring compliance with industry regulations.',
    icon: <Shield size={24} className="text-[#0F2A44]" />,
  },
];

const Services: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl font-semibold text-[#0F2A44] sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#5B6B7C]">
          Nexus Corporate provides tailored solutions to help enterprises succeed in complex markets.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-start gap-4 rounded-lg border border-[#E2E8F0] bg-white p-6 transition hover:shadow-lg animate-fade-in"
          >
            <div className="mb-2">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#0F2A44]">{service.title}</h3>
            <p className="text-[#5B6B7C]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;