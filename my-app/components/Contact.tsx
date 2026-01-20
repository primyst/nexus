'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Client-side validation
    if (!formData.name.trim()) {
      setError('Name is required');
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Message is required');
      setLoading(false);
      return;
    }

    if (formData.message.trim().length < 10) {
      setError('Message must be at least 10 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
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

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Email */}
            <div className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg flex-shrink-0">
                  <Mail size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Email</h4>
                  <a
                    href="mailto:hello@nexuscorporate.com"
                    className="text-gold hover:text-gold/80 transition-colors text-sm break-all"
                  >
                    hello@nexuscorporate.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg flex-shrink-0">
                  <Phone size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Phone</h4>
                  <a
                    href="tel:+12125550147"
                    className="text-gold hover:text-gold/80 transition-colors text-sm"
                  >
                    +1 (212) 555-0147
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg flex-shrink-0">
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

            {/* Hours */}
            <div className="bg-white rounded-xl p-6 border border-gold/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-lg flex-shrink-0">
                  <Clock size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Office Hours</h4>
                  <p className="text-dark text-sm">
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-gold/10 space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-dark placeholder:text-light"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-dark placeholder:text-light"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-dark placeholder:text-light"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or question..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all text-dark placeholder:text-light resize-none"
                />
                <p className="text-xs text-light mt-1">
                  {formData.message.length} characters (minimum 10)
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
                  <AlertCircle size={18} />
                  {error}
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <div className="bg-teal/10 border border-teal text-teal px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2 animate-fade-in">
                  <CheckCircle size={18} />
                  Thank you! We'll respond within 24 hours.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-light text-center">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Clock } from 'lucide-react';
