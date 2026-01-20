'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-200">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-brand-blue font-serif">
        Nexus
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 text-slate-700">
        <Link href="/" className="hover:text-brand-accent transition-colors duration-300 font-medium">
          Home
        </Link>
        <Link href="/about" className="hover:text-brand-accent transition-colors duration-300 font-medium">
          About
        </Link>
        <Link href="/services" className="hover:text-brand-accent transition-colors duration-300 font-medium">
          Services
        </Link>
        <Link href="/work" className="hover:text-brand-accent transition-colors duration-300 font-medium">
          Work
        </Link>
        <Link href="/team" className="hover:text-brand-accent transition-colors duration-300 font-medium">
          Team
        </Link>
        <Link href="/contact" className="hover:text-brand-accent transition-colors duration-300 font-medium">
          Contact
        </Link>
      </div>

      {/* CTA Button */}
      <Link href="/contact" className="hidden md:block">
        <button className="bg-brand-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-blue transition-all duration-300 shadow-md hover:shadow-lg">
          Get Started
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-brand-blue"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 md:hidden text-slate-700 border-b border-slate-200">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors font-medium">
            About
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors font-medium">
            Services
          </Link>
          <Link href="/work" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors font-medium">
            Work
          </Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors font-medium">
            Team
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors font-medium">
            Contact
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-brand-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-blue transition-all w-full">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
