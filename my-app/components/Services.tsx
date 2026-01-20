'use client';
import { Zap, BarChart3, Truck, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const services: Service[] = [
  {
    title: 'Supply Chain Optimization',
    description: 'End-to-end supply chain redesign and optimization for cost reduction and efficiency.',
    icon: <Truck className="h-8 w-8" />,
    details: [
      'Demand forecasting',
      'Vendor consolidation',
      'Logistics network design',
      'Procurement strategy',
    ],
  },
  {
    title: 'Financial Operations',
    description: 'Transform finance functions through process automation and cost optimization.',
    icon: <DollarSign className="h-8 w-8" />,
    details: [
      'Shared services setup',
      'RPA implementation',
      'Accounts payable automation',
      'FP&A transformation',
    ],
  },
  {
    title: 'Operational Excellence',
    description: 'Lean and Six Sigma methodologies to drive operational efficiency and quality.',
    icon: <BarChart3 className="h-8 w-8" />,
    details: [
      'Process redesign',
      'Lean implementation',
      'Quality improvement',
      'Performance management',
    ],
  },
  {
    title: 'Digital Transformation',
    description: 'Enterprise-wide digital initiatives including ERP, cloud, and automation.',
    icon: <Zap className="h-8 w-8" />,
    details: [
      'ERP implementation',
      'Cloud migration',
      'Business process automation',
      'Change management',
    ],
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-12 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 font-serif">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive enterprise solutions tailored to your business challenges
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 group border border-slate-200 hover:border-brand-accent"
            >
              <div className="text-brand-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3 font-serif">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.details.map((detail) => (
                  <li key={detail} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-brand-accent mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <div className="text-brand-accent font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                  Learn More →
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
