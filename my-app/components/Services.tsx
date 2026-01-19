'use client';

import { TrendingUp, Shield, BarChart3, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

const services = [
  {
    icon: TrendingUp,
    title: 'Wealth Management',
    description: 'Comprehensive portfolio management and investment strategies designed for long-term growth and wealth preservation.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Strategic risk assessment and mitigation to protect your assets and ensure financial stability.',
  },
  {
    icon: BarChart3,
    title: 'Financial Planning',
    description: 'Personalized financial plans aligned with your life goals, retirement objectives, and family needs.',
  },
  {
    icon: Target,
    title: 'Investment Advisory',
    description: 'Expert guidance on investment opportunities, asset allocation, and portfolio optimization.',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-900 font-semibold text-sm tracking-widest uppercase">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored services designed to address your unique financial needs and objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`stagger-item p-8 rounded-lg border border-gray-200 hover-lift bg-white ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center mb-6">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
