'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles, TrendingUp, Package, Zap } from 'lucide-react';

const collections = [
  {
    id: 'hoodies',
    title: 'Premium Hoodies',
    description: 'Engineered for ultimate comfort and everyday versatility',
    image: '/hoodies/hoodie-one.jpg',
    itemCount: 8,
    href: '/category/hoodies',
    badge: 'Bestseller',
    color: 'from-slate-600 to-slate-800'
  },
  {
    id: 'sneakers',
    title: 'Signature Sneakers',
    description: 'Where timeless design meets modern performance',
    image: '/sneakers/sneaker-one.jpg',
    itemCount: 5,
    href: '/category/sneakers',
    badge: 'New',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'shirts',
    title: 'Essential Shirts',
    description: 'Classic pieces refined for the contemporary wardrobe',
    image: '/shirts/white-shirt-designer.jpg',
    itemCount: 11,
    href: '/category/shirts',
    badge: 'Trending',
    color: 'from-amber-600 to-orange-700'
  }
];

const featuredProducts = [
  {
    id: 1,
    name: 'Classic Comfort Hoodie',
    category: 'Hoodies',
    image: '/hoodies/hoodie-two.jpg',
    price: 89.99,
  },
  {
    id: 2,
    name: 'Urban Runner Sneakers',
    category: 'Sneakers',
    image: '/sneakers/white-shoe.jpg',
    price: 129.99,
  },
  {
    id: 3,
    name: 'Premium White Tee',
    category: 'Shirts',
    image: '/shirts/white-t-shirt.jpg',
    price: 39.99,
  },
  {
    id: 4,
    name: 'Designer Long Sleeve',
    category: 'Shirts',
    image: '/shirts/shirt-designer.jpg',
    price: 64.99,
  },
  {
    id: 5,
    name: 'Oversized Hoodie',
    category: 'Hoodies',
    image: '/hoodies/hoddie-three.jpg',
    price: 94.99,
  },
  {
    id: 6,
    name: 'Sport Max Sneakers',
    category: 'Sneakers',
    image: '/sneakers/sneaker-max.jpg',
    price: 149.99,
  },
];

export default function CollectionsPage() {
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="font-logo text-xl sm:text-2xl text-amber-900">
              VITAL-WEARS
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6 font-body text-sm">
                <Link href="/new-arrivals" className="text-amber-800 hover:text-amber-600 transition">New Arrivals</Link>
                <Link href="/collections" className="text-amber-800 hover:text-amber-600 transition">Collections</Link>
                <Link href="/about" className="text-amber-800 hover:text-amber-600 transition">About</Link>
              </nav>
              <Link href="/cart" className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-body hover:from-amber-600 hover:to-orange-600 transition">
                Cart (0)
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-orange-200/30 to-rose-200/30 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-body text-amber-800 mb-6 border border-amber-200/50">
            <Package size={16} className="text-amber-500" />
            <span>Curated for You</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-amber-950 mb-6 leading-tight">
            Explore Our Collections
          </h1>
          
          <p className="font-body text-lg sm:text-xl text-amber-800/70 max-w-3xl mx-auto mb-8">
            Discover thoughtfully crafted collections that define modern style. Each piece designed to elevate your everyday wardrobe with quality and confidence.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-logo text-amber-900 mb-1">3</div>
              <div className="text-sm font-body text-amber-700/70">Collections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-logo text-amber-900 mb-1">24+</div>
              <div className="text-sm font-body text-amber-700/70">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-logo text-amber-900 mb-1">100%</div>
              <div className="text-sm font-body text-amber-700/70">Premium Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Collections */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={collection.href}
                onMouseEnter={() => setHoveredCollection(collection.id)}
                onMouseLeave={() => setHoveredCollection(null)}
                className="group relative overflow-hidden rounded-3xl bg-white border border-amber-100/50 hover:border-amber-200 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50/50">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-body font-medium text-amber-900">
                      {collection.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-sm font-body text-white/80 mb-2">
                          {collection.itemCount} Items
                        </div>
                        <h3 className="font-heading text-2xl sm:text-3xl mb-2">
                          {collection.title}
                        </h3>
                        <p className="font-body text-white/90 text-sm sm:text-base mb-4">
                          {collection.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm font-body group-hover:gap-3 transition-all">
                          <span>Explore Collection</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all ${
                        hoveredCollection === collection.id ? 'bg-white/30 scale-110' : ''
                      }`}>
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 rounded-full text-sm font-body text-amber-800 mb-4">
                <Sparkles size={16} />
                <span>Handpicked</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-amber-950">
                Featured Products
              </h2>
            </div>
            <Link 
              href="/new-arrivals"
              className="hidden sm:inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 transition font-body"
            >
              View All
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-amber-100/50 hover:border-amber-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="text-xs font-body text-amber-600 mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-body text-sm text-amber-950 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="text-base font-logo text-amber-900">
                    ${product.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-6 text-center">
            <Link 
              href="/new-arrivals"
              className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 transition font-body"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-amber-950 mb-4">
              Why Choose Our Collections
            </h2>
            <p className="font-body text-lg text-amber-800/70 max-w-2xl mx-auto">
              Every piece is crafted with intention, quality, and your lifestyle in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 sm:p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white">
                <TrendingUp size={28} />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-amber-950 mb-3">
                Timeless Design
              </h3>
              <p className="font-body text-amber-800/70 text-sm sm:text-base">
                Pieces that transcend trends and remain relevant season after season.
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white">
                <Zap size={28} />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-amber-950 mb-3">
                Premium Materials
              </h3>
              <p className="font-body text-amber-800/70 text-sm sm:text-base">
                Only the finest fabrics and construction for lasting comfort and durability.
              </p>
            </div>

            <div className="text-center p-6 sm:p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white">
                <Sparkles size={28} />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-amber-950 mb-3">
                Versatile Style
              </h3>
              <p className="font-body text-amber-800/70 text-sm sm:text-base">
                Effortlessly transitions from casual to refined, adapting to your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white px-8 py-16 sm:py-20 overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
                Ready to Build Your Collection?
              </h2>
              <p className="font-body text-lg text-white/90 mb-10">
                Start with our bestsellers or explore new arrivals. Free shipping on orders over $100.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/new-arrivals"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-full font-body hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl"
                >
                  Shop New Arrivals
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/category/hoodies"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 px-8 py-4 rounded-full font-body hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Browse Hoodies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-950 via-amber-900 to-orange-950 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
            <div className="sm:col-span-2">
              <div className="font-logo text-2xl sm:text-3xl mb-4">VITAL-WEARS</div>
              <p className="font-body text-amber-200/70 mb-6 max-w-md text-sm sm:text-base">
                Elevating everyday style with timeless design and exceptional quality.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg mb-4 text-amber-100">Collections</h4>
              <ul className="font-body space-y-2 text-sm text-amber-200/70">
                <li><Link href="/category/hoodies" className="hover:text-white transition">Hoodies</Link></li>
                <li><Link href="/category/sneakers" className="hover:text-white transition">Sneakers</Link></li>
                <li><Link href="/category/shirts" className="hover:text-white transition">Shirts</Link></li>
                <li><Link href="/new-arrivals" className="hover:text-white transition">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-base sm:text-lg mb-4 text-amber-100">Support</h4>
              <ul className="font-body space-y-2 text-sm text-amber-200/70">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs sm:text-sm font-body text-amber-200/60">
            <p>© 2026 Vital-Wears. Crafted with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}