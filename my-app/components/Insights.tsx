'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const insights = [
  {
    id: 1,
    title: 'Market Outlook 2024: Strategic Positioning',
    category: 'Market Analysis',
    description: 'Our latest analysis on market trends and strategic recommendations for portfolio positioning in the coming year.',
    date: 'January 15, 2024',
  },
  {
    id: 2,
    title: 'Tax-Efficient Wealth Transfer Strategies',
    category: 'Financial Planning',
    description: 'Comprehensive guide to minimizing tax liability while transferring wealth to the next generation.',
    date: 'January 10, 2024',
  },
  {
    id: 3,
    title: 'Diversification in Uncertain Times',
    category: 'Investment Strategy',
    description: 'How strategic diversification can help protect your portfolio during periods of market volatility.',
    date: 'January 5, 2024',
  },
];

export default function Insights() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-900 font-semibold text-sm tracking-widest uppercase">
            Insights & Research
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Market Expertise & Thought Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest market analysis and financial insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <div
              key={insight.id}
              className={`stagger-item p-8 rounded-lg border border-gray-200 hover-lift bg-white ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-blue-900 font-semibold text-xs uppercase tracking-wide mb-3">
                {insight.category}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {insight.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {insight.description}
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">{insight.date}</p>
                <Link href="#" className="text-blue-900 hover:text-blue-950 transition-smooth">
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-900 text-blue-900 rounded font-semibold hover:bg-blue-50 transition-smooth"
          >
            View All Insights
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

