export default function ServicesPage() {
  return (
    <section className="bg-white text-black">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Services
          </h1>
          <p className="mt-6 text-lg text-black/70">
            We provide focused, outcome-driven services designed to solve
            complex challenges and support long-term business objectives.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="mx-auto max-w-7xl px-6 pb-32">
        <div className="space-y-20">
          <ServiceItem
            title="Business & Technical Consulting"
            description="We work closely with stakeholders to assess challenges, define clear objectives, and design practical solutions that align with business goals and technical constraints."
            points={[
              'Requirements analysis and discovery',
              'Process and systems evaluation',
              'Technical direction and planning',
            ]}
          />

          <ServiceItem
            title="Solution Design & Implementation"
            description="From initial concept to execution, we design and implement solutions that are reliable, maintainable, and fit for real-world use."
            points={[
              'System and architecture design',
              'Custom software and platform development',
              'Integration with existing tools and workflows',
            ]}
          />

          <ServiceItem
            title="Optimization & Continuous Improvement"
            description="We help organizations refine and improve existing systems, increasing efficiency, performance, and long-term sustainability."
            points={[
              'Performance and reliability reviews',
              'Workflow and process optimization',
              'Ongoing technical support and improvements',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  title: string;
  description: string;
  points: string[];
}

function ServiceItem({ title, description, points }: ServiceItemProps) {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {/* Left column */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      {/* Right column */}
      <div className="md:col-span-2">
        <p className="max-w-2xl text-base leading-relaxed text-black/70">
          {description}
        </p>

        <ul className="mt-6 space-y-3 text-sm text-black/80">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}