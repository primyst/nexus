import './globals.css';
import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Nexus Corporate',
  description: 'Enterprise consulting & digital innovation'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}