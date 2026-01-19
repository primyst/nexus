import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '15+', label: 'Years of Industry Experience' },
  { value: '250+', label: 'Enterprise Clients Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '20+', label: 'Global Partners' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="animate-fade-in">
              <p className="text-3xl font-bold text-[#0F2A44] mb-2">{stat.value}</p>
              <p className="text-[#5B6B7C] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;