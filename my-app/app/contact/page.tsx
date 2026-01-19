'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-900 font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Schedule Your Consultation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss your financial goals and how we can help you build lasting wealth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className={`stagger-item ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:hello@nexusfinancial.com" className="text-gray-600 hover:text-blue-900 transition-smooth">
                    hello@nexusfinancial.com
                  </a>
                </div>
              </div>
            </div>

            <div className={`stagger-item ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+12125551234" className="text-gray-600 hover:text-blue-900 transition-smooth">
                    +1 (212) 555-1234
                  </a>
                </div>
              </div>
            </div>

            <div className={`stagger-item ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">
                    123 Park Avenue<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className={`stagger-item ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 p-8 rounded-lg border border-gray-200 bg-gray-50">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
