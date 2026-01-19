'use client';

import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Robert Mitchell',
    role: 'CEO, Mitchell Industries',
    content: 'Nexus has been instrumental in growing and protecting our family wealth. Their strategic approach and personalized service are unmatched.',
    rating: 5,
  },
  {
    name: 'Jennifer Walsh',
    role: 'Executive Director, Walsh Foundation',
    content: 'Professional, knowledgeable, and genuinely invested in our success. They understand our complex financial needs better than anyone.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Founder, Chen Technology Group',
    content: 'The team at Nexus combines deep market expertise with exceptional client service. Highly recommended for serious investors.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-900 font-semibold text-sm tracking-widest uppercase">
            Client Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Leading Families and Institutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`stagger-item p-8 rounded-lg bg-white border border-gray-200 hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-900 text-blue-900" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
