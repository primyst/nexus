'use client';
import { useState } from 'react';
import { CheckCircle, Filter } from 'lucide-react';
import Link from 'next/link';

interface WorkItem {
  title: string;
  client: string;
  industry: string;
  description: string;
  results: string[];
  tags: string[];
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
    tags: ['Digital Transformation', 'Cloud Migration', 'Process Automation'],
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
    tags: ['Organizational Design', 'Scaling', 'Leadership Development'],
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
    tags: ['ERP Implementation', 'Compliance', 'Data Integration'],
  },
  {
    title: 'RetailMax Supply Chain Optimization',
    client: 'RetailMax Inc',
    industry: 'Retail',
    description:
      'End-to-end supply chain redesign, vendor consolidation, and logistics network optimization.',
    results: [
      'Inventory costs: -28%',
      'Delivery time: -35%',
      'Vendor base: 150 → 45 partners',
      'Supply chain efficiency: +42%',
    ],
    tags: ['Supply Chain', 'Vendor Management', 'Logistics'],
  },
  {
    title: 'ManufacturePro Lean Implementation',
    client: 'ManufacturePro Global',
    industry: 'Manufacturing',
    description:
      'Lean Six Sigma implementation, process optimization, and quality improvement programs.',
    results: [
      'Production efficiency: +38%',
      'Defect rate: -65%',
      'Lead time: -45%',
      'Employee engagement: +48%',
    ],
    tags: ['Lean Six Sigma', 'Quality Improvement', 'Operations'],
  },
  {
    title: 'FinanceFlow RPA Automation',
    client: 'FinanceFlow Corp',
    industry: 'Financial Services',
    description:
      'Robotic process automation for finance operations, reducing manual workload and improving accuracy.',
    results: [
      'Manual tasks automated: 85%',
      'Processing time: -60%',
      'Error rate: -92%',
      'Cost savings: $1.5M annually',
    ],
    tags: ['RPA', 'Finance Operations', 'Automation'],
  },
];

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [expandedWork, setExpandedWork] = useState<string | null>(null);

  // Get unique tags
  const allTags = ['All', ...new Set(workItems.flatMap(item => item.tags))];

  // Filter work items
  const filteredWork = selectedFilter === 'All' 
    ? workItems 
    : workItems.filter(item => item.tags.includes(selectedFilter));

  return (
    <section className="py-20 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-serif animate-slide-down">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Proven results across industries. See how we've transformed businesses like yours.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          {allTags.map((tag, idx) => (
            <button
              key={tag}
              onClick={() => setSelectedFilter(tag)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up ${
                selectedFilter === tag
                  ? 'bg-gold text-navy shadow-lg'
                  : 'bg-white text-slate-700 border border-gold/20 hover:border-gold/60 hover:shadow-md'
              }`}
              style={{ animationDelay: `${0.15 + idx * 0.05}s` }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Work Items */}
        <div className="space-y-8">
          {filteredWork.map((item, idx) => (
            <WorkItemCard
              key={item.title}
              item={item}
              delay={idx * 0.1}
              isExpanded={expandedWork === item.title}
              onToggle={() => setExpandedWork(expandedWork === item.title ? null : item.title)}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Link href="/contact">
            <button className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              Start Your Transformation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WorkItemCard({
  item,
  delay,
  isExpanded,
  onToggle,
}: {
  item: WorkItem;
  delay: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="bg-white rounded-xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 border border-gold/10 hover:border-gold/30 animate-fade-in-up transform hover:scale-102"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left - Info */}
        <div>
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {item.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-semibold animate-fade-in-up">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-navy mb-2 font-serif animate-slide-down">
            {item.title}
          </h3>

          {/* Client Info */}
          <div className="mb-4 space-y-1 animate-fade-in-up" style={{ animationDelay: `${delay + 0.05}s` }}>
            <p className="text-slate-600">
              <strong className="text-navy">Client:</strong> {item.client}
            </p>
            <p className="text-slate-600">
              <strong className="text-navy">Industry:</strong> {item.industry}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-700 mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: `${delay + 0.1}s` }}>
            {item.description}
          </p>

          {/* Toggle Button */}
          <button
            onClick={onToggle}
            className="text-gold font-semibold hover:text-navy transition-colors duration-300 flex items-center gap-2 group"
          >
            {isExpanded ? 'Hide Details' : 'View Full Case Study'}
            <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              →
            </span>
          </button>
        </div>

        {/* Right - Results */}
        <div className="animate-fade-in-right" style={{ animationDelay: `${delay + 0.1}s` }}>
          <h4 className="text-lg font-bold text-navy mb-4 font-serif">Results</h4>
          <ul className="space-y-3">
            {item.results.map((result, idx) => (
              <li 
                key={result} 
                className="flex items-start gap-3 animate-fade-in-up"
                style={{ animationDelay: `${delay + 0.15 + idx * 0.05}s` }}
              >
                <CheckCircle size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-8 pt-8 border-t border-gold/20 animate-fade-in-up">
          <h4 className="text-lg font-bold text-navy mb-4 font-serif">Project Approach</h4>
          <p className="text-slate-700 mb-6 leading-relaxed">
            This engagement involved a comprehensive assessment of current operations, identification of optimization opportunities, and phased implementation with continuous stakeholder engagement. Our team worked closely with {item.client} to ensure smooth adoption and maximize value realization.
          </p>
          
          <h4 className="text-lg font-bold text-navy mb-4 font-serif">Key Deliverables</h4>
          <ul className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Strategic roadmap and implementation plan',
              'Process redesign and optimization',
              'Technology implementation and integration',
              'Team training and change management',
              'Performance monitoring framework',
              'Ongoing support and optimization',
            ].map((deliverable) => (
              <li key={deliverable} className="flex items-start gap-2 text-slate-700">
                <span className="text-gold font-bold mt-1">✓</span>
                {deliverable}
              </li>
            ))}
          </ul>

          <Link href="/contact">
            <button className="text-gold font-semibold hover:text-navy transition-colors">
              Learn How We Can Help You →
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
