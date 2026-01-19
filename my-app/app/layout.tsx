import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nexus Design Co. - Creative Design & Digital Solutions',
  description: 'Award-winning design agency specializing in branding, web design, and digital experiences.',
  keywords: 'design agency, branding, web design, creative services, digital solutions',
  authors: [{ name: 'Nexus Design Co.' }],
  openGraph: {
    title: 'Nexus Design Co.',
    description: 'Creative Design & Digital Solutions',
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
