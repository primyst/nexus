'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-yellow-500/20">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-yellow-500">
        Nexus
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 text-white">
        <Link href="/" className="hover:text-yellow-500 transition-colors duration-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-yellow-500 transition-colors duration-300">
          About
        </Link>
        <Link href="/services" className="hover:text-yellow-500 transition-colors duration-300">
          Services
        </Link>
        <Link href="/work" className="hover:text-yellow-500 transition-colors duration-300">
          Work
        </Link>
        <Link href="/team" className="hover:text-yellow-500 transition-colors duration-300">
          Team
        </Link>
        <Link href="/contact" className="hover:text-yellow-500 transition-colors duration-300">
          Contact
        </Link>
      </div>

      {/* CTA Button */}
      <Link href="/contact" className="hidden md:block">
        <button className="bg-yellow-500 text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300">
          Get Started
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-yellow-500"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 flex flex-col items-center gap-4 py-6 md:hidden text-white border-b border-yellow-500/20">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition-colors">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition-colors">
            About
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition-colors">
            Services
          </Link>
          <Link href="/work" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition-colors">
            Work
          </Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition-colors">
            Team
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-500 transition-colors">
            Contact
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-yellow-500 text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-all w-full">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
