'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, ShoppingBag, Filter, Star, TrendingUp, Sparkles } from 'lucide-react';

const newArrivals = [
  // Hoodies
  {
    id: 1,
    name: "Premium Cotton Hoodie",
    category: "Hoodies",
    price: 89.99,
    image: "/hoodies/hoodie-one.jpg",
    badge: "New",
    rating: 4.9
  },
  {
    id: 2,
    name: "Essential Zip Hoodie",
    category: "Hoodies",
    price: 94.99,
    image: "/hoodies/hoodie-two.jpg",
    badge: "Trending",
    rating: 4.8
  },
  {
    id: 3,
    name: "Classic Pullover Hoodie",
    category: "Hoodies",
    price: 84.99,
    image: "/hoodies/hoddie-three.jpg",
    badge: "New",
    rating: 4.7
  },
  {
    id: 4,
    name: "Oversized Comfort Hoodie",
    category: "Hoodies",
    price: 99.99,
    image: "/hoodies/hoodie-four.jpg",
    badge: "Hot",
    rating: 5.0
  },
  // Sneakers
  {
    id: 5,
    name: "Urban Runner Sneakers",
    category: "Sneakers",
    price: 129.99,
    image: "/sneakers/sneaker-one.jpg",
    badge: "New",
    rating: 4.8
  },
  {
    id: 6,
    name: "Classic White Sneakers",
    category: "Sneakers",
    price: 109.99,
    image: "/sneakers/white-shoe.jpg",
    badge: "Trending",
    rating: 4.9
  },
  {
    id: 7,
    name: "Sport Performance Max",
    category: "Sneakers",
    price: 149.99,
    image: "/sneakers/sneaker-max.jpg",
    badge: "Hot",
    rating: 5.0
  },
  {
    id: 8,
    name: "Street Style Sneakers",
    category: "Sneakers",
    price: 119.99,
    image: "/sneakers/sneaker-two.jpg",
    badge: "New",
    rating: 4.7
  },
  // Shirts
  {
    id: 9,
    name: "Premium White T-Shirt",
    category: "Shirts",
    price: 39.99,
    image: "/shirts/white-t-shirt.jpg",
    badge: "New",
    rating: 4.8
  },
  {
    id: 10,
    name: "Designer Cotton Shirt",
    category: "Shirts",
    price: 64.99,
    image: "/shirts/white-shirt-designer.jpg",
    badge: "Trending",
    rating: 4.9
  },
  {
    id: 11,
    name: "Long Sleeve Plaid",
    category: "Shirts",
    price: 54.99,
    image: "/shirts/LongSleeve-PlaidShirt-Black.jpg",
    badge: "New",
    rating: 4.7
  },
  {
    id: 12,
    name: "Classic Black Polo",
    category: "Shirts",
    price: 49.99,
    image: "/shirts/black-polo.jpg",
    badge: "Hot",
    rating: 4.8
  },
];

export default function NewArrivalsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = ['All', 'Hoodies', 'Sneakers', 'Shirts'];

  const filteredProducts = selectedCategory === 'All' 
    ? newArrivals 
    : newArrivals.filter(product => product.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

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
              <button className="p-2 hover:bg-amber-100/50 rounded-full transition">
                <Filter size={20} className="text-amber-900" />
              </button>
              <Link href="/cart" className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-body hover:from-amber-600 hover:to-orange-600 transition">
                Cart (0)
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-orange-200/20 to-rose-200/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 transition mb-6 font-body"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-body text-amber-800 mb-4 border border-amber-200/50">
                <Sparkles size={16} className="text-amber-500" />
                <span>Fresh Drops</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-amber-950 mb-4">
                New Arrivals
              </h1>
              <p className="font-body text-lg text-amber-800/70 max-w-2xl">
                Discover our latest collection of premium apparel, carefully curated for style and comfort.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-3xl sm:text-4xl font-logo text-amber-900 mb-1">
                {filteredProducts.length}
              </div>
              <div className="text-sm font-body text-amber-700/70">
                Products Available
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-body text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm text-amber-900 hover:bg-white/80 border border-amber-200/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-amber-100/50 hover:border-amber-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-body font-medium backdrop-blur-sm ${
                      product.badge === 'Hot' 
                        ? 'bg-rose-500 text-white' 
                        : product.badge === 'Trending'
                        ? 'bg-amber-500 text-white'
                        : 'bg-white/90 text-amber-900'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
                        favorites.includes(product.id)
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/90 text-amber-900 hover:bg-white'
                      }`}
                    >
                      <Heart size={18} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <Link
                      href={`/product/${product.id}`}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition text-amber-900"
                    >
                      <ShoppingBag size={18} />
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-body text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      <span className="text-xs font-body text-amber-700">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-lg text-amber-950 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-logo text-amber-900">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-body hover:from-amber-600 hover:to-orange-600 transition opacity-0 group-hover:opacity-100">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-amber-600" size={32} />
              </div>
              <h3 className="font-heading text-2xl text-amber-950 mb-2">
                No products found
              </h3>
              <p className="font-body text-amber-700/70">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white px-8 py-12 sm:py-16 overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-3xl sm:text-4xl mb-4">
                Love What You See?
              </h2>
              <p className="font-body text-white/90 mb-8 max-w-2xl mx-auto">
                Sign up for early access to exclusive drops and special member discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white/50"
                />
                <button className="px-6 py-3 bg-white text-amber-900 rounded-full font-body hover:bg-amber-50 transition shadow-lg">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-950 via-amber-900 to-orange-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="font-logo text-2xl mb-4">VITAL-WEARS</div>
              <p className="font-body text-amber-200/70 text-sm max-w-md">
                Elevating everyday style with timeless design and exceptional quality.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-base mb-4 text-amber-100">Shop</h4>
              <ul className="font-body space-y-2 text-sm text-amber-200/70">
                <li><Link href="/new-arrivals" className="hover:text-white transition">New Arrivals</Link></li>
                <li><Link href="/category/hoodies" className="hover:text-white transition">Hoodies</Link></li>
                <li><Link href="/category/sneakers" className="hover:text-white transition">Sneakers</Link></li>
                <li><Link href="/category/shirts" className="hover:text-white transition">Shirts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-base mb-4 text-amber-100">Help</h4>
              <ul className="font-body space-y-2 text-sm text-amber-200/70">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm font-body text-amber-200/60">
            <p>© 2026 Vital-Wears. Crafted with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}