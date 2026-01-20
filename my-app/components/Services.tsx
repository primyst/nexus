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
    icon: <Briefcase className="h-8 w-8 text-yellow-400" />,
  },
  {
    title: 'Technology Consulting',
    description:
      'Our team provides expert guidance on software solutions, infrastructure, and digital transformation.',
    icon: <Cpu className="h-8 w-8 text-yellow-400" />,
  },
  {
    title: 'Project Delivery',
    description:
      'From concept to launch, we ensure projects are delivered on time, within budget, and with measurable impact.',
    icon: <CheckSquare className="h-8 w-8 text-yellow-400" />,
  },
  {
    title: 'Operations Optimization',
    description:
      'We analyze and improve operational workflows to maximize efficiency and minimize risk.',
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-[#0F172A]">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Nexus Corporate delivers a range of solutions designed to help businesses operate smarter and grow stronger.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="flex gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F172A]/10 shadow-md">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0F172A]">{service.title}</h3>
              <p className="mt-1 text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}