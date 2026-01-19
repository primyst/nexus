import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nexus Financial Services - Wealth Management & Investment Solutions',
  description: 'Leading financial advisory firm providing comprehensive wealth management, investment strategies, and financial planning services for high-net-worth individuals and institutions.',
  keywords: 'wealth management, financial advisory, investment management, financial planning, portfolio management',
  authors: [{ name: 'Nexus Financial Services' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
