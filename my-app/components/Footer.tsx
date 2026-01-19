import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Nexus</h3>
            <p className="text-gray-400 leading-relaxed">
              Premier financial advisory firm dedicated to building and preserving wealth for discerning clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-smooth">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-smooth">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-smooth">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-smooth">
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-smooth">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-smooth">
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:hello@nexusfinancial.com" className="hover:text-white transition-smooth">
                  hello@nexusfinancial.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+12125551234" className="hover:text-white transition-smooth">
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <span>New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              Copyright {currentYear} Nexus Financial Services. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
