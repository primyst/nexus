import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexus Corporate | Strategic Consulting & Digital Transformation',
  description: 'Transform your business with expert consulting and digital innovation. 200+ successful projects, 98% client satisfaction.',
  keywords: 'consulting, digital transformation, business strategy, enterprise solutions',
  openGraph: {
    title: 'Nexus Corporate',
    description: 'Strategic Consulting & Digital Transformation',
    url: 'https://nexuscorporate.com',
    siteName: 'Nexus Corporate',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cream text-charcoal">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
