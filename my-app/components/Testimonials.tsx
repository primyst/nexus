import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Nexus Corporate transformed our financial planning process — their insights are unmatched.',
    name: 'Jane Smith',
    role: 'CFO, GlobalTech Inc.',
  },
  {
    quote:
      'Professional, reliable, and highly strategic. They helped us navigate complex compliance challenges.',
    name: 'Michael Johnson',
    role: 'CEO, FinSolutions Ltd.',
  },
  {
    quote:
      'Their team delivered exactly what we needed, on time and with exceptional quality.',
    name: 'Sarah Lee',
    role: 'COO, Enterprise Advisory Group',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold text-[#0F2A44] sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#5B6B7C]">
            Hear what our clients and partners have to say about working with Nexus Corporate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 animate-fade-in transition hover:shadow-lg"
            >
              <p className="mb-4 text-[#0F2A44] italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-[#0F2A44]">{testimonial.name}</p>
                <p className="text-[#5B6B7C] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;