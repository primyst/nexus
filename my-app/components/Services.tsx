'use client';
import { Briefcase, Cpu, CheckSquare, Zap } from 'lucide-react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Strategic Consulting',
    description:
      'Navigate complex business challenges with our proven strategic frameworks and market expertise.',
    icon: <Briefcase className="h-8 w-8" />,
  },
  {
    title: 'Digital Transformation',
    description:
      'Modernize your operations with cloud-first solutions and cutting-edge technology integration.',
    icon: <Cpu className="h-8 w-8" />,
  },
  {
    title: 'Change Management',
    description:
      'Ensure successful adoption of new initiatives through strategic change leadership and training.',
    icon: <CheckSquare className="h-8 w-8" />,
  },
  {
    title: 'Technology Integration',
    description:
      'Seamlessly integrate enterprise systems and unlock data-driven insights for better decisions.',
    icon: <Zap className="h-8 w-8" />,
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-serif">
            What We Do
          </h2>
          <p className="text-xl text-light max-w-2xl mx-auto">
            Our core expertise areas designed to drive transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Link key={service.title} href="/services">
              <div
                className="bg-cream rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gold/10 hover:border-gold/30 h-full"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-light leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-gold font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
