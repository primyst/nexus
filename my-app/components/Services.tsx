'use client';
import { Briefcase, Cpu, CheckSquare, Zap } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Business Strategy',
    description:
      'We help organizations define clear objectives, optimize processes, and plan for long-term growth.',
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
  },
  {
    title: 'Technology Consulting',
    description:
      'Our team provides expert guidance on software solutions, infrastructure, and digital transformation.',
    icon: <Cpu className="h-6 w-6 text-blue-500" />,
  },
  {
    title: 'Project Delivery',
    description:
      'From concept to launch, we ensure projects are delivered on time, within budget, and with measurable impact.',
    icon: <CheckSquare className="h-6 w-6 text-blue-500" />,
  },
  {
    title: 'Operations Optimization',
    description:
      'We analyze and improve operational workflows to maximize efficiency and minimize risk.',
    icon: <Zap className="h-6 w-6 text-blue-500" />,
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 bg-[#1E293B]">
      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl text-white">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-[#CBD5E1]">
          Nexus Corporate delivers a range of solutions designed to help businesses operate smarter and grow stronger.
        </p>
      </div>

      {/* Services grid */}
      <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6]">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-1 text-[#E0E7FF]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}