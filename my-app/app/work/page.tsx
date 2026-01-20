'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  image: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  slug: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Supply Chain Transformation',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    image: '/case-study-1-hero.jpg',
    challenge: 'Complex multi-region supply chain with 40% excess inventory and high logistics costs',
    solution: 'Implemented demand-driven planning, vendor consolidation, and network optimization',
    results: [
      { metric: 'Inventory Reduction', value: '35%' },
      { metric: 'Cost Savings', value: '$45M annually' },
      { metric: 'On-time Delivery', value: '98%' },
      { metric: 'Implementation Time', value: '8 months' },
    ],
    slug: 'global-manufacturing-supply-chain',
  },
  {
    id: 2,
    title: 'Finance Shared Services Center',
    client: 'Fortune 500 Financial Services',
    industry: 'Finance',
    image: '/case-study-2-hero.jpg',
    challenge: 'Fragmented finance operations across 12 locations with high processing costs',
    solution: 'Established shared services center with RPA and process automation',
    results: [
      { metric: 'Cost Reduction', value: '38%' },
      { metric: 'Processing Time', value: '60% faster' },
      { metric: 'FTE Optimization', value: '200 roles' },
      { metric: 'Error Rate', value: '99.2% accuracy' },
    ],
    slug: 'fortune-500-finance-transformation',
  },
  {
    id: 3,
    title: 'Operational Excellence Program',
    client: 'Healthcare Provider Network',
    industry: 'Healthcare',
    image: '/case-study-3-hero.jpg',
    challenge: 'Rising operational costs and inconsistent quality across 50+ facilities',
    solution: 'Lean Six Sigma program with standardized processes and continuous improvement',
    results: [
      { metric: 'Operating Cost', value: '22% reduction' },
      { metric: 'Patient Satisfaction', value: '+28%' },
      { metric: 'Staff Efficiency', value: '+35%' },
      { metric: 'Quality Metrics', value: 'Top quartile' },
    ],
    slug: 'healthcare-operational-excellence',
  },
  {
    id: 4,
    title: 'Digital ERP Implementation',
    client: 'Industrial Equipment Manufacturer',
    industry: 'Manufacturing',
    image: '/case-study-4-hero.jpg',
    challenge: 'Legacy systems across 8 plants preventing real-time visibility and agility',
    solution: 'Cloud-based ERP deployment with change management and training',
    results: [
      { metric: 'System Integration', value: '100%' },
      { metric: 'Data Accuracy', value: '99.8%' },
      { metric: 'Reporting Speed', value: '80% faster' },
      { metric: 'ROI Timeline', value: '14 months' },
    ],
    slug: 'industrial-erp-transformation',
  },
];

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', ...new Set(caseStudies.map((cs) => cs.industry))];
  const filtered =
    selectedIndustry === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-brand-light border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 font-serif">
              Our Work
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Proven results across industries. See how we've transformed enterprise operations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-brand-accent text-white shadow-lg'
                    : 'bg-brand-light text-brand-dark hover:bg-slate-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((study) => (
              <Link key={study.id} href={`/work/${study.slug}`}>
                <div className="group cursor-pointer h-full">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6 shadow-lg">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-brand-dark font-serif group-hover:text-brand-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-slate-600">{study.client}</p>
                    <p className="text-slate-700 leading-relaxed">{study.challenge}</p>

                    {/* Quick Results */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="bg-brand-light rounded-lg p-3">
                          <div className="text-brand-accent font-bold text-lg">{result.value}</div>
                          <div className="text-xs text-slate-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="text-brand-accent font-semibold group-hover:translate-x-2 transition-transform duration-300 pt-4 flex items-center gap-2">
                      Read Case Study <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-brand-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver measurable results for your enterprise
          </p>
          <Link href="/contact">
            <button className="bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
