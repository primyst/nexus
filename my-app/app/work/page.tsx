'use client';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: 'GlobalBank Digital Transformation',
    client: 'GlobalBank Solutions',
    industry: 'Financial Services',
    duration: '18 months',
    teamSize: 12,
    challenge:
      'Legacy systems causing operational bottlenecks, slow customer onboarding (30+ days), high manual processing costs.',
    solution:
      'Cloud migration, API integration, process automation, comprehensive staff training.',
    results: [
      'Onboarding time: 30 days → 3 days',
      'Operational costs reduced by 50%',
      'System uptime: 99.9%',
      'Customer satisfaction: +45%',
    ],
  },
  {
    id: 2,
    title: 'CloudSync Strategic Restructuring',
    client: 'CloudSync Technologies',
    industry: 'Technology/SaaS',
    duration: '9 months',
    teamSize: 6,
    challenge:
      'Rapid growth causing organizational chaos, unclear roles, inefficient processes.',
    solution:
      'Organizational restructuring, process mapping, leadership coaching, change management.',
    results: [
      'Productivity: +35%',
      'Employee satisfaction: +52%',
      'Time-to-market: -40%',
      'Scaled from 50 to 150 employees',
    ],
  },
  {
    id: 3,
    title: 'HealthFirst ERP Implementation',
    client: 'HealthFirst Systems',
    industry: 'Healthcare',
    duration: '14 months',
    teamSize: 10,
    challenge: 'Multiple disconnected systems, data silos, compliance issues.',
    solution:
      'Enterprise ERP implementation, data consolidation, compliance framework, staff training.',
    results: [
      '100% data integration across systems',
      'Achieved SOC 2 compliance',
      'Patient data accessibility: +30%',
      'Annual cost savings: $2M',
    ],
  },
  {
    id: 4,
    title: 'ManufactureCo Market Entry Strategy',
    client: 'ManufactureCo Global',
    industry: 'Manufacturing',
    duration: '12 months',
    teamSize: 8,
    challenge:
      'Entering new Asian markets, unclear competitive landscape, operational setup needed.',
    solution:
      'Market analysis, competitive intelligence, go-to-market strategy, local partnership setup.',
    results: [
      'Successfully entered 3 new markets',
      'Year 1 revenue: $50M',
      'Market share: 25% in target segments',
      'Local operations established in 2 countries',
    ],
  },
  {
    id: 5,
    title: 'RetailPro Omnichannel Transformation',
    client: 'RetailPro Networks',
    industry: 'Retail',
    duration: '10 months',
    teamSize: 7,
    challenge:
      'Implementing omnichannel strategy, employee resistance, legacy mindset.',
    solution:
      'Change communication strategy, employee training, leadership alignment, phased rollout.',
    results: [
      'Employee adoption rate: 85%',
      'Omnichannel sales: +60%',
      'Customer satisfaction: +38%',
      'Staff turnover reduced: 25%',
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-white border-b border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 font-serif">
              Our Work
            </h1>
            <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
              Proven results across industries. See how we've transformed businesses like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <div
                key={study.id}
                className={`bg-white rounded-xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 border border-gold/10 animate-fade-in-up grid md:grid-cols-2 gap-8 ${
                  idx % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Left - Info */}
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-4 font-serif">
                    {study.title}
                  </h3>

                  <div className="space-y-2 mb-6 text-sm text-dark">
                    <p>
                      <strong>Client:</strong> {study.client}
                    </p>
                    <p>
                      <strong>Duration:</strong> {study.duration}
                    </p>
                    <p>
                      <strong>Team Size:</strong> {study.teamSize} consultants
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-bold text-navy mb-2">Challenge</h4>
                      <p className="text-dark text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-navy mb-2">Solution</h4>
                      <p className="text-dark text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <button className="text-gold font-semibold hover:translate-x-2 transition-transform duration-300">
                      Read Full Case Study →
                    </button>
                  </Link>
                </div>

                {/* Right - Results */}
                <div>
                  <h4 className="text-lg font-bold text-navy mb-6 font-serif">Results</h4>
                  <ul className="space-y-4">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-dark">{result}</span>
                      </li>
                    ))}
                  </ul>
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
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your business
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
