'use client';

interface WorkItem {
  title: string;
  description: string;
  outcome: string;
}

const workItems: WorkItem[] = [
  {
    title: 'Enterprise Workflow Redesign',
    description:
      'Analyzed complex operational workflows for a multinational client to identify bottlenecks.',
    outcome: 'Reduced process time by 30% and improved cross-team efficiency.',
  },
  {
    title: 'Digital Transformation for Finance Firm',
    description:
      'Led technology strategy for digital modernization of internal systems and reporting.',
    outcome: 'Delivered on-time implementation, increasing data accuracy by 25%.',
  },
  {
    title: 'Market Expansion Strategy',
    description:
      'Consulted for a mid-size client entering two new regions simultaneously.',
    outcome: 'Successful market entry within six months, achieving first-quarter targets.',
  },
];

export default function Work() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl text-white">Selected Work & Achievements</h2>
        <p className="mt-4 text-lg text-gray-300">
          We focus on delivering measurable results. Here are some examples of our recent engagements.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workItems.map((item) => (
          <div
            key={item.title}
            className="rounded-lg bg-brand-light/20 p-6 backdrop-blur-md transition hover:bg-brand-light/40"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-gray-300">{item.description}</p>
            <p className="mt-4 font-medium text-white">{item.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}