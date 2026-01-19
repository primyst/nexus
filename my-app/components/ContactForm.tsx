'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: integrate with API route later
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h2 className="text-3xl font-semibold text-[#0F2A44] mb-6 text-center sm:text-4xl">
          Get in Touch
        </h2>
        <p className="text-[#5B6B7C] mb-10 text-center">
          Fill out the form below and we’ll get back to you promptly.
        </p>

        {submitted ? (
          <p className="text-center text-[#1E6F5C] font-medium">
            Thank you! Your message has been submitted.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#E2E8F0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#E2E8F0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#E2E8F0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-md border border-[#E2E8F0] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F2A44] focus:border-transparent"
            />

            <button
              type="submit"
              className="inline-block bg-[#0F2A44] text-white px-6 py-3 rounded-md font-medium transition hover:bg-[#1E6F5C]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;