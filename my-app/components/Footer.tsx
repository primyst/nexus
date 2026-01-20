'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Nexus</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Strategic consulting and digital transformation for forward-thinking enterprises.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-yellow-500 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Work', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-yellow-500 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-yellow-500 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors">
                <Mail size={16} />
                <a href="mailto:hello@nexuscorporate.com">hello@nexuscorporate.com</a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors">
                <Phone size={16} />
                <a href="tel:+12125550147">+1 (212) 555-0147</a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} className="mt-0.5" />
                <span>450 Park Avenue, New York, NY 10022, USA</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-yellow-500 font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-500 text-sm">
            © {currentYear} Nexus Corporate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
