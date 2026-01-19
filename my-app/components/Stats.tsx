'use client';

import { useEffect, useState } from 'react';

const stats = [
  { number: '25+', label: 'Years of Industry Experience' },
  { number: '500+', label: 'Active Client Relationships' },
  { number: '$2.4B', label: 'Assets Under Management' },
  { number: '98%', label: 'Client Retention Rate' },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center stagger-item ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
