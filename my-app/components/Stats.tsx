import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '10+', label: 'Years of Industry Experience' },
  { value: '120+', label: 'Client Engagements Completed' },
  { value: '95%', label: 'Client Retention Rate' },
  { value: '15+', label: 'Industry Partners Worldwide' },
];

const Stats: React.FC = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-2 text-3xl font-semibold tracking-tight text-slate-900">
                {stat.value}
              </p>
              <p className="text-sm text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;