'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-black/40 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Nexus Corporate
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
            <Link href="#services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="#work" className="hover:text-white transition">
              Work
            </Link>
            <Link href="#about" className="hover:text-white transition">
              About
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}