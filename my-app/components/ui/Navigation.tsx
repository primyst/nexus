'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' }
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl text-gold">
          Nexus
        </Link>

        <div className="hidden md:flex gap-6">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-gold'
                  : 'text-white hover:text-gold'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button size="sm">Get Started</Button>
      </nav>
    </header>
  );
}a