'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/98 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          Nexus
        </Link>

        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 transition-smooth font-medium text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:block px-6 py-2.5 bg-blue-900 text-white rounded font-medium text-sm hover:bg-blue-950 transition-smooth"
        >
          Schedule Consultation
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-6 py-2.5 bg-blue-900 text-white rounded font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
