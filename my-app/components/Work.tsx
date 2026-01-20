'use client';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface WorkItem {
  title: string;
  client: string;
  industry: string;
  description: string;
  results: string[];
}

const workItems: WorkItem[] = [
  {
    title: 'GlobalBank Digital Transformation',
    client: 'GlobalBank Solutions',
    industry: 'Financial Services',
    description:
      'Cloud migration, process automation, and comprehensive staff training for legacy system modernization.',
    results: [
      'Onboarding time: 30 days → 3 days',
      'Operational costs reduced by 50%',
      'System uptime: 99.9%',
      'Customer satisfaction: +45%',
    ],
  },
  {
    title: 'CloudSync Strategic Restructuring',
    client: 'CloudSync Technologies',
    industry: 'Technology/SaaS',
    description:
      'Organizational restructuring, process mapping, and leadership coaching for rapid growth scaling.',
    results: [
      'Productivity: +35%',
      'Employee satisfaction: +52%',
      'Time-to-market: -40%',
      'Scaled from 50 to 150 employees',
    ],
  },
  {
    title: 'HealthFirst ERP Implementation',
    client: 'HealthFirst Systems',
    industry: 'Healthcare',
    description:
      'Enterprise ERP implementation, data consolidation, and compliance framework establishment.',
    results: [
      '100% data integration across systems',
      'Achieved SOC 2 compliance',
      'Patient data accessibility: +30%',
      'Annual cost savings: $2M',
    ],
  },
];

export default function Work() {
  return (
    <section className="py-20 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-serif">
            Featured Work
          </h2>
          <p className="text-xl text-light max-w-2xl mx-auto">
            Proven results across industries. See how we've transformed businesses like yours.
          </p>
        </div>

        {/* Work Items */}
        <div className="space-y-12">
          {workItems.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 border border-gold/10 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left - Info */}
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                      {item.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-2 font-serif">
                    {item.title}
                  </h3>

                  <p className="text-light mb-4">
                    <strong className="text-navy">Client:</strong> {item.client}
                  </p>

                  <p className="text-dark mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <Link href="/work">
                    <button className="text-gold font-semibold hover:translate-x-2 transition-transform duration-300">
                      Read Full Case Study →
                    </button>
                  </Link>
                </div>

                {/* Right - Results */}
                <div>
                  <h4 className="text-lg font-bold text-navy mb-4 font-serif">Results</h4>
                  <ul className="space-y-3">
                    {item.results.map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-dark">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/work">
            <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
              View All Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
