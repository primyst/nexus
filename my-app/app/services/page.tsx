'use client';
import { Briefcase, Cpu, CheckSquare, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    icon: <Briefcase size={32} />,
    title: 'Strategic Consulting',
    description: 'Navigate complex business challenges with our proven strategic frameworks and market expertise.',
    subServices: [
      'Business Strategy Development',
      'Market Analysis & Competitive Intelligence',
      'Organizational Restructuring',
      'Growth Planning & Execution',
    ],
  },
  {
    id: 2,
    icon: <Cpu size={32} />,
    title: 'Digital Transformation',
    description: 'Modernize your operations with cloud-first solutions and cutting-edge technology integration.',
    subServices: [
      'Legacy System Modernization',
      'Cloud Migration & Architecture',
      'Process Automation & Optimization',
      'Digital Workflow Integration',
    ],
  },
  {
    id: 3,
    icon: <CheckSquare size={32} />,
    title: 'Change Management',
    description: 'Ensure successful adoption of new initiatives through strategic change leadership and training.',
    subServices: [
      'Organizational Change Strategy',
      'Employee Training & Adoption Programs',
      'Change Communication Plans',
      'Leadership Coaching & Support',
    ],
  },
  {
    id: 4,
    icon: <Zap size={32} />,
    title: 'Technology Integration',
    description: 'Seamlessly integrate enterprise systems and unlock data-driven insights for better decisions.',
    subServices: [
      'Enterprise Software Implementation',
      'API & System Integration',
      'Data Analytics & BI Solutions',
      'Cybersecurity & Compliance Consulting',
    ],
  },
];

const methodology = [
  { step: 1, title: 'Discovery', description: 'Understand your unique challenges and objectives' },
  { step: 2, title: 'Strategy', description: 'Develop tailored solutions aligned with your goals' },
  { step: 3, title: 'Execution', description: 'Implement with precision and attention to detail' },
  { step: 4, title: 'Optimization', description: 'Measure results and continuously improve' },
  { step: 5, title: 'Support', description: 'Provide ongoing training and support' },
];

export default function ServicesPage() {
  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-white border-b border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 font-serif">
              Our Services
            </h1>
            <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to your business transformation needs
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  idx % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-4 rounded-lg text-gold">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-navy font-serif">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-dark leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h3 className="font-bold text-navy mb-4">What We Offer:</h3>
                    <ul className="space-y-3">
                      {service.subServices.map((subService) => (
                        <li key={subService} className="flex items-center gap-3 text-dark">
                          <CheckSquare size={18} className="text-gold flex-shrink-0" />
                          {subService}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <button className="text-gold font-semibold flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>

                {/* Image Placeholder */}
                <div className="bg-white rounded-xl p-12 border border-gold/10 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <p className="text-light text-sm">Service Image Placeholder</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center font-serif">
            How We Work
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {methodology.map((item, idx) => (
              <div
                key={item.step}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Connector */}
                {idx < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-6 h-1 bg-gold/30" />
                )}

                {/* Card */}
                <div className="bg-cream rounded-xl p-6 border border-gold/10 text-center">
                  <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-navy mb-2 font-serif">{item.title}</h3>
                  <p className="text-sm text-dark">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Let's Discuss Your Transformation
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to explore how we can help
          </p>
          <Link href="/contact">
            <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
