'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Leaf, Sparkles, Instagram, Twitter, Facebook, Mail, Menu, X, Star, TrendingUp, Package, Truck } from 'lucide-react';

const heroImages = [
  { color: '#1a1a2e', name: 'Midnight Navy', src: '/hero/hero-black.png' },
  { color: '#f5f5f0', name: 'Ivory', src: '/hero/hero-white.png' },
  { color: '#4a6741', name: 'Sage Green', src: '/hero/hero-green.png' },
  { color: '#8b4546', name: 'Terracotta', src: '/hero/hero-red.png' },
];

const featured = [
  {
    title: "Premium Hoodies",
    tagline: "Ultra-soft cotton blend for all-day comfort",
    image: "/hoodies/hoodie-one.jpg",
    href: "/category/hoodies",
    badge: "Bestseller"
  },
  {
    title: "Signature Sneakers",
    tagline: "Handcrafted design meets modern performance",
    image: "/sneakers/sneaker-one.jpg",
    href: "/category/sneakers",
    badge: "New Arrival"
  },
];

// Hero Section
function Hero() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedColor((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="font-logo text-xl sm:text-2xl text-amber-900">VITAL-WEARS</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-body text-sm">
              <Link href="/new-arrivals" className="text-amber-800 hover:text-amber-600 transition">New Arrivals</Link>
              <Link href="/collections" className="text-amber-800 hover:text-amber-600 transition">Collections</Link>
              <Link href="/about" className="text-amber-800 hover:text-amber-600 transition">Our Story</Link>
              <Link href="/contact" className="text-amber-800 hover:text-amber-600 transition">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/shop" className="hidden sm:block px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-body hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg">
                Shop Now
              </Link>
              <button 
                className="md:hidden p-2 text-amber-900"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100">
            <div className="px-4 py-6 space-y-4 font-body">
              <Link href="/new-arrivals" className="block text-amber-800 hover:text-amber-600">New Arrivals</Link>
              <Link href="/collections" className="block text-amber-800 hover:text-amber-600">Collections</Link>
              <Link href="/about" className="block text-amber-800 hover:text-amber-600">Our Story</Link>
              <Link href="/contact" className="block text-amber-800 hover:text-amber-600">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="pt-24 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top: Text Content - Centered */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-body text-amber-800 mb-6 border border-amber-200/50">
              <Sparkles size={16} className="text-amber-500" />
              <span>Spring Collection 2026</span>
            </div>
            
            <h1 className="font-logo text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-amber-950 mb-6 leading-tight">
              Wear Your<br />Confidence
            </h1>
            
            <p className="font-body text-lg sm:text-xl text-amber-800/80 mb-4 max-w-2xl mx-auto">
              Discover timeless pieces that blend effortless style with uncompromising quality.
            </p>
            
            <p className="font-body text-amber-700/70 mb-8 max-w-xl mx-auto">
              Each piece is thoughtfully crafted to become your everyday essential.
            </p>

            {/* Stats Bar - Inline */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 bg-white/60 backdrop-blur-xl border border-amber-100/50 rounded-2xl p-6 sm:p-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-logo text-amber-900 mb-1">10K+</div>
                  <div className="text-xs sm:text-sm font-body text-amber-700/70">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-logo text-amber-900 mb-1">4.9★</div>
                  <div className="text-xs sm:text-sm font-body text-amber-700/70">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-logo text-amber-900 mb-1">50+</div>
                  <div className="text-xs sm:text-sm font-body text-amber-700/70">Premium Products</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Truck className="text-amber-900" size={28} />
                  </div>
                  <div className="text-xs sm:text-sm font-body text-amber-700/70">Free Shipping</div>
                </div>
                <div className="text-center col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-logo text-amber-900 mb-1">100%</div>
                  <div className="text-xs sm:text-sm font-body text-amber-700/70">Quality Guarantee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Product Image & Color Selector */}
          <div className="max-w-2xl mx-auto">
            <div className="relative aspect-square max-w-md mx-auto mb-8">
              {/* Decorative Blobs */}
              <div className="absolute -top-8 -left-8 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-br from-rose-300/40 to-pink-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Image Container */}
              <div className="relative z-10 bg-white/40 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/50 transition-all duration-700">
                <div className="relative w-full aspect-square">
                  <Image
                    src={heroImages[selectedColor].src}
                    alt={heroImages[selectedColor].name}
                    fill
                    className="object-contain transition-opacity duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    key={selectedColor}
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 sm:top-0 sm:right-0 bg-gradient-to-br from-amber-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-xl font-body text-xs sm:text-sm font-medium animate-bounce">
                ✨ Limited Edition
              </div>
            </div>

            {/* Color Selector */}
            <div className="text-center mb-10">
              <p className="font-body text-sm text-amber-800 mb-4 font-medium">
                Explore Colors
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                {heroImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`relative transition-all duration-300 ${
                      selectedColor === idx ? 'scale-110' : 'scale-100 hover:scale-105'
                    }`}
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-lg transition-all ${
                        selectedColor === idx 
                          ? 'ring-4 ring-amber-400 ring-offset-2' 
                          : 'ring-1 ring-amber-200/50'
                      }`}
                      style={{ backgroundColor: img.color }}
                    >
                      {img.color === '#f5f5f0' && (
                        <div className="absolute inset-0 rounded-2xl border border-amber-200" />
                      )}
                    </div>
                    <span className={`absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-body whitespace-nowrap transition-opacity ${
                      selectedColor === idx ? 'opacity-100 text-amber-900' : 'opacity-0'
                    }`}>
                      {img.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/collections"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-body px-8 py-4 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm border-2 border-amber-300/50 text-amber-900 font-body px-8 py-4 rounded-full hover:bg-white/80 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

None
    </section>
  );
}

// Featured Products
function FeaturedProducts() {
  return (
    <section id="collections" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 rounded-full text-sm font-body text-amber-800 mb-4">
            <TrendingUp size={16} />
            <span>Trending Now</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-amber-950 mb-4">
            Our Best Sellers
          </h2>
          <p className="font-body text-base sm:text-lg text-amber-800/70 max-w-2xl mx-auto">
            Handpicked favorites loved by our community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {featured.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100/50 to-orange-100/50 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-body text-amber-900 font-medium shadow-lg">
                {item.badge}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-950/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl sm:text-3xl mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-white/90 text-sm sm:text-base">
                      {item.tagline}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-body group-hover:gap-3 transition-all">
                      <span>Shop Now</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 transition-all">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      description: "Every stitch, every fabric choice—crafted with care to ensure lasting comfort and durability."
    },
    {
      icon: Sparkles,
      title: "Timeless Style",
      description: "Designs that transcend seasons and trends, creating a wardrobe you'll treasure for years."
    },
    {
      icon: Leaf,
      title: "Earth-Conscious",
      description: "Sustainable practices from source to stitch. Fashion that respects our planet."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-orange-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-amber-950 mb-4">
            Why Choose Vital-Wears
          </h2>
          <p className="font-body text-base sm:text-lg text-amber-800/70 max-w-2xl mx-auto">
            We believe in creating pieces that matter—to you, to artisans, and to the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-amber-200/50 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl text-amber-950 mb-3">{value.title}</h3>
                <p className="font-body text-amber-800/70 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white px-6 sm:px-8 py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-body mb-6">
              <Package size={16} />
              <span>Free Shipping on Orders Over $100</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
              Ready to Elevate Your Style?
            </h2>
            <p className="font-body text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands who've discovered the perfect balance of comfort, quality, and timeless design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/category/hoodies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-full font-body hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl"
              >
                Start Shopping
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/category/all"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/60 px-8 py-4 rounded-full font-body hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                View All Items
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-950 via-amber-900 to-orange-950 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="font-logo text-2xl sm:text-3xl mb-4">VITAL-WEARS</div>
            <p className="font-body text-amber-200/70 mb-6 max-w-md text-sm sm:text-base">
              Elevating everyday style with timeless design and exceptional quality. Your confidence, our craft.
            </p>
            <div className="flex gap-3">
              <Link href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-sm">
                <Instagram size={20} />
              </Link>
              <Link href="https://twitter.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-sm">
                <Twitter size={20} />
              </Link>
              <Link href="https://facebook.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition backdrop-blur-sm">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading text-base sm:text-lg mb-4 text-amber-100">Shop</h4>
            <ul className="font-body space-y-2 text-sm text-amber-200/70">
              <li><Link href="/new-arrivals" className="hover:text-white transition">New Arrivals</Link></li>
              <li><Link href="/category/hoodies" className="hover:text-white transition">Hoodies</Link></li>
              <li><Link href="/category/sneakers" className="hover:text-white transition">Sneakers</Link></li>
              <li><Link href="/sale" className="hover:text-white transition">Sale</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-heading text-base sm:text-lg mb-4 text-amber-100">Help</h4>
            <ul className="font-body space-y-2 text-sm text-amber-200/70">
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 sm:pt-12 mb-8 sm:mb-12">
          <div className="max-w-md mx-auto text-center">
            <Star className="mx-auto mb-4 text-amber-300" size={32} />
            <h3 className="font-heading text-xl sm:text-2xl mb-2">Join Our Community</h3>
            <p className="font-body text-sm sm:text-base text-amber-200/70 mb-6">
              Get exclusive drops and style tips in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-amber-200/50 focus:outline-none focus:border-white/40 text-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-body hover:from-amber-600 hover:to-orange-600 transition shadow-lg text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-body text-amber-200/60">
          <p>© 2026 Vital-Wears. Crafted with care.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}