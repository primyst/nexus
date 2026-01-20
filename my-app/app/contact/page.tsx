'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Connect to API route
      console.log('Form submitted:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-white border-b border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 font-serif">
              Get in Touch
            </h1>
            <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
              Have a project or question? Reach out and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Mail size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Email</h4>
                    <a
                      href="mailto:hello@nexuscorporate.com"
                      className="text-gold hover:text-gold/80 transition-colors text-sm"
                    >
                      hello@nexuscorporate.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Phone size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Phone</h4>
                    <a
                      href="tel:+12125550147"
                      className="text-gold hover:text-gold/80 transition-colors text-sm"
                    >
                      +1 (212) 555-0147
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <MapPin size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2">Address</h4>
                    <p className="text-dark text-sm leading-relaxed">
                      450 Park Avenue<br />
                      New York, NY 10022<br />
                      USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <Clock size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Office Hours</h4>
                    <p className="text-dark text-sm">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-gold/10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold transition-colors text-dark placeholder:text-light"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold transition-colors text-dark placeholder:text-light"
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold transition-colors text-dark placeholder:text-light"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold transition-colors text-dark"
                >
                  <option value="">Select a Service</option>
                  <option value="strategic">Strategic Consulting</option>
                  <option value="digital">Digital Transformation</option>
                  <option value="change">Change Management</option>
                  <option value="technology">Technology Integration</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold transition-colors text-dark placeholder:text-light resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={18} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="bg-teal/10 border border-teal text-teal px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2 animate-fade-in">
                    <CheckCircle size={18} />
                    Thank you! We'll respond within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center font-serif">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. Most engagements range from 3-18 months. We provide detailed timelines during the initial consultation.',
              },
              {
                q: 'How do you determine pricing?',
                a: 'We offer flexible engagement models including fixed-price, time-and-materials, and retainer arrangements. Pricing is customized based on your specific needs and project scope.',
              },
              {
                q: 'Can you work with companies of all sizes?',
                a: 'Yes, we work with startups, mid-market companies, and Fortune 500 enterprises. Our solutions are tailored to fit organizations of any size.',
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We have deep expertise in finance, technology, healthcare, retail, and manufacturing. However, our methodologies are applicable across all industries.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-cream rounded-xl p-6 border border-gold/10 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-bold text-navy mb-3">{item.q}</h3>
                <p className="text-dark leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { Clock } from 'lucide-react';
