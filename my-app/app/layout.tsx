import type { Metadata } from "next";
import { Montserrat_Alternates, Raleway, Inter } from "next/font/google";
import "./globals.css";

/* Google Fonts setup */
const logoFont = Montserrat_Alternates({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "700",
});

const headingFont = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "600",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "400",
});

/* Metadata */
export const metadata: Metadata = {
  title: "Vital-Wears",
  description: "Premium apparel online store",
};

/* Root layout */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${logoFont.variable} ${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
  }
