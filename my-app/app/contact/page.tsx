'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-brand-light border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark mb-6 font-serif">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can transform your enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-brand-accent" size={24} />
                  <h3 className="text-lg font-bold text-brand-dark">Email</h3>
                </div>
                <a
                  href="mailto:hello@nexuscorporate.com"
                  className="text-slate-600 hover:text-brand-accent transition-colors"
                >
                  hello@nexuscorporate.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-brand-accent" size={24} />
                  <h3 className="text-lg font-bold text-brand-dark">Phone</h3>
                </div>
                <a
                  href="tel:+12125550147"
                  className="text-slate-600 hover:text-brand-accent transition-colors"
                >
                  +1 (212) 555-0147
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-brand-accent" size={24} />
                  <h3 className="text-lg font-bold text-brand-dark">Office</h3>
                </div>
                <p className="text-slate-600">
                  450 Park Avenue
                  <br />
                  New York, NY 10022
                  <br />
                  USA
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-accent"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-2">
                        Service of Interest *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-accent"
                      >
                        <option value="">Select a service</option>
                        <option value="supply-chain">Supply Chain Optimization</option>
                        <option value="finance">Financial Operations</option>
                        <option value="operations">Operational Excellence</option>
                        <option value="digital">Digital Transformation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-accent"
                    >
                      <option value="">Select budget range</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-2m">$1M - $2M</option>
                      <option value="2m+">$2M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-accent resize-none"
                      placeholder="Describe your business challenge and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Inquiry'}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    We respect your privacy. Your information is confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-dark mb-12 text-center font-serif">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'What is your typical engagement timeline?',
                a: 'Most engagements range from 3-12 months depending on scope and complexity. We discuss timeline during the initial consultation.',
              },
              {
                q: 'How do you structure your fees?',
                a: 'We typically work on a project basis with fixed fees or time-and-materials arrangements. Pricing depends on scope and complexity.',
              },
              {
                q: 'Do you provide ongoing support after project completion?',
                a: 'Yes, we offer post-implementation support and optimization services to ensure sustainable results.',
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We have deep expertise in manufacturing, finance, healthcare, and logistics. We also work across other industries.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-brand-dark mb-3">{item.q}</h3>
                <p className="text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
