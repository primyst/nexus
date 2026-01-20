'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-serif">
            Get in Touch
          </h2>
          <p className="text-xl text-light max-w-2xl mx-auto">
            Have a project or question? Reach out and we'll get back to you promptly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-white rounded-xl p-6 border border-gold/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Mail size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Email</h4>
                  <a href="mailto:hello@nexuscorporate.com" className="text-gold hover:text-gold/80 transition-colors">
                    hello@nexuscorporate.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gold/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <Phone size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Phone</h4>
                  <a href="tel:+12125550147" className="text-gold hover:text-gold/80 transition-colors">
                    +1 (212) 555-0147
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gold/10">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <MapPin size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Address</h4>
                  <p className="text-dark text-sm">
                    450 Park Avenue<br />
                    New York, NY 10022<br />
                    USA
                  </p>
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
                className="w-full bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>

              {submitted && (
                <div className="bg-teal/10 border border-teal text-teal px-4 py-3 rounded-lg text-sm font-medium">
                  ✓ Thank you! We'll respond within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
