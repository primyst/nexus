import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2A44] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Nexus<span className="text-[#C9A227]">Corporate</span></h3>
          <p className="text-[#C9A227] text-sm">
            Strategic enterprise solutions for financial growth and operational excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/services" className="hover:text-[#C9A227] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-[#C9A227] transition">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#C9A227] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#C9A227] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <p className="text-[#C9A227] text-sm mb-2">contact@nexuscorporate.com</p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#C9A227]">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#C9A227]">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-[#C9A227]">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-[#1E6F5C] pt-6 text-center text-sm text-[#C9A227]">
        &copy; {new Date().getFullYear()} Nexus Corporate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;