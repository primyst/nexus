'use client';

import { TrendingUp, Shield, BarChart3, Target, PieChart, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const allServices = [
  {
    icon: TrendingUp,
    title: 'Wealth Management',
    description: 'Comprehensive portfolio management and investment strategies designed for long-term growth and wealth preservation.',
    details: [
      'Portfolio Construction',
      'Asset Allocation',
      'Rebalancing Strategy',
      'Performance Monitoring',
      'Tax Optimization',
    ],
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Strategic risk assessment and mitigation to protect your assets and ensure financial stability.',
    details: [
      'Risk Assessment',
      'Insurance Planning',
      'Liability Protection',
      'Estate Planning',
      'Contingency Planning',
    ],
  },
  {
    icon: BarChart3,
    title: 'Financial Planning',
    description: 'Personalized financial plans aligned with your life goals, retirement objectives, and family needs.',
    details: [
      'Retirement Planning',
      'Education Planning',
      'Cash Flow Analysis',
      'Goal Setting',
      'Scenario Planning',
    ],
  },
  {
    icon: Target,
    title: 'Investment Advisory',
    description: 'Expert guidance on investment opportunities, asset allocation, and portfolio optimization.',
    details: [
      'Market Analysis',
      'Security Selection',
      'Alternative Investments',
      'Real Estate Advisory',
      'Private Equity',
    ],
  },
  {
    icon: PieChart,
    title: 'Succession Planning',
    description: 'Strategic planning to ensure smooth wealth transfer and business succession for future generations.',
    details: [
      'Wealth Transfer',
      'Business Succession',
      'Family Governance',
      'Legacy Planning',
      'Philanthropic Strategy',
    ],
  },
  {
    icon: Briefcase,
    title: 'Executive Compensation',
    description: 'Specialized advisory on executive benefits, stock options, and deferred compensation strategies.',
    details: [
      'Stock Option Planning',
      'Deferred Compensation',
      'Executive Benefits',
      'Equity Strategy',
      'Tax Planning',
    ],
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-900 font-semibold text-sm tracking-widest uppercase">
            Our Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Comprehensive Financial Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored services designed to address your unique financial needs and objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`stagger-item p-8 rounded-lg border border-gray-200 hover-lift bg-white ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center mb-6">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-lg p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with one of our financial advisors to discuss which services are right for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white rounded font-semibold hover:bg-blue-950 transition-smooth"
          >
            Schedule Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}
