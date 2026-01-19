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
    outcome:
      'Successful market entry within six months, achieving first-quarter targets.',
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl px-6 py-20 text-white"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Selected Work & Achievements
        </h2>
        <p className="mt-4 text-lg text-white/70">
          We focus on delivering measurable results. Here are some examples of
          our recent engagements.
        </p>
      </div>

      {/* Work items grid */}
      <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workItems.map((item) => (
          <div
            key={item.title}
            className="rounded-lg bg-white/10 p-6 backdrop-blur-md transition hover:bg-white/20"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-white/70">{item.description}</p>
            <p className="mt-4 font-medium text-white/90">{item.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}