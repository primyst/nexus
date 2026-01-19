'use client';

import { useEffect, useState } from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const teamMembers = [
  {
    name: 'Robert Mitchell',
    role: 'Founder & Chief Investment Officer',
    bio: '25+ years of experience in wealth management and institutional investing.',
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Financial Advisor',
    bio: 'Specialized in comprehensive financial planning for high-net-worth families.',
  },
  {
    name: 'Michael Richardson',
    role: 'Senior Portfolio Manager',
    bio: 'Expert in global markets and alternative investment strategies.',
  },
  {
    name: 'Jennifer Walsh',
    role: 'Head of Estate Planning',
    bio: 'Dedicated to wealth transfer strategies and legacy planning.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in financial advisory and client service.',
  },
  {
    icon: Users,
    title: 'Integrity',
    description: 'Transparency and honesty guide every decision we make for our clients.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We leverage cutting-edge technology and research to serve you better.',
  },
  {
    icon: TrendingUp,
    title: 'Results',
    description: 'Our focus is on delivering measurable outcomes and long-term wealth growth.',
  },
];

export default function About() {
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
            About Nexus
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Trusted Financial Partnership
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            For over two decades, we have been committed to building and preserving wealth for discerning clients.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 1999, Nexus Financial Services was established with a simple mission: to provide exceptional financial advisory services to high-net-worth individuals and institutions. What started as a small team of dedicated advisors has grown into a premier financial services firm managing billions in assets.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our success is built on a foundation of trust, expertise, and an unwavering commitment to our clients' financial well-being. We believe that great wealth management is not just about returns—it's about understanding your goals and building a comprehensive strategy to achieve them.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve over 500 client relationships, ranging from entrepreneurs and executives to family offices and institutional investors. Our team combines decades of market experience with a personalized approach to wealth management.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center border border-gray-200">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-blue-900 rounded-lg mx-auto"></div>
              <p className="text-gray-600 font-medium">Company Photo</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`stagger-item p-8 rounded-lg border border-gray-200 bg-white text-center ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`stagger-item p-8 rounded-lg border border-gray-200 bg-white hover-lift ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gray-300 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-900 font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
