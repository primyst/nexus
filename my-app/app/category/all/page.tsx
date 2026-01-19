'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, ShoppingBag, Star, Grid3x3, LayoutGrid, TrendingUp, Sparkles } from 'lucide-react';

const allProducts = [
  // Hoodies
  { id: 1, name: "Premium Cotton Hoodie", category: "Hoodies", price: 89.99, image: "/hoodies/hoodie-one.jpg", rating: 4.9, sales: 234 },
  { id: 2, name: "Essential Zip Hoodie", category: "Hoodies", price: 94.99, image: "/hoodies/hoodie-two.jpg", rating: 4.8, sales: 189 },
  { id: 3, name: "Classic Pullover Hoodie", category: "Hoodies", price: 84.99, image: "/hoodies/hoddie-three.jpg", rating: 4.7, sales: 156 },
  { id: 4, name: "Oversized Comfort Hoodie", category: "Hoodies", price: 99.99, image: "/hoodies/hoodie-four.jpg", rating: 5.0, sales: 312 },
  { id: 5, name: "Athletic Performance Hoodie", category: "Hoodies", price: 109.99, image: "/hoodies/hoddie-five.jpg", rating: 4.8, sales: 198 },
  { id: 6, name: "Lightweight Summer Hoodie", category: "Hoodies", price: 79.99, image: "/hoodies/hoddie-six.jpg", rating: 4.6, sales: 142 },
  { id: 7, name: "Premium White Hoodie", category: "Hoodies", price: 89.99, image: "/hoodies/hoddie-white.jpg", rating: 4.9, sales: 276 },
  { id: 8, name: "Urban Street Hoodie", category: "Hoodies", price: 94.99, image: "/hoodies/hoddie-seven.jpg", rating: 4.7, sales: 167 },
  
  // Sneakers
  { id: 9, name: "Urban Runner Sneakers", category: "Sneakers", price: 129.99, image: "/sneakers/sneaker-one.jpg", rating: 4.8, sales: 245 },
  { id: 10, name: "Classic White Sneakers", category: "Sneakers", price: 109.99, image: "/sneakers/white-shoe.jpg", rating: 4.9, sales: 298 },
  { id: 11, name: "Sport Performance Max", category: "Sneakers", price: 149.99, image: "/sneakers/sneaker-max.jpg", rating: 5.0, sales: 356 },
  { id: 12, name: "Street Style Sneakers", category: "Sneakers", price: 119.99, image: "/sneakers/sneaker-two.jpg", rating: 4.7, sales: 187 },
  { id: 13, name: "Premium Adidas Edition", category: "Sneakers", price: 159.99, image: "/sneakers/adidas-sneaker.jpg", rating: 4.9, sales: 289 },
  
  // Shirts
  { id: 14, name: "Premium White T-Shirt", category: "Shirts", price: 39.99, image: "/shirts/white-t-shirt.jpg", rating: 4.8, sales: 412 },
  { id: 15, name: "Classic Black T-Shirt", category: "Shirts", price: 39.99, image: "/shirts/black-t-shirt.jpg", rating: 4.7, sales: 389 },
  { id: 16, name: "Designer Cotton Shirt", category: "Shirts", price: 64.99, image: "/shirts/white-shirt-designer.jpg", rating: 4.9, sales: 256 },
  { id: 17, name: "Multi-Color Long Sleeve", category: "Shirts", price: 54.99, image: "/shirts/cotton-multi-long.jpg", rating: 4.6, sales: 178 },
  { id: 18, name: "Brown Short Sleeve", category: "Shirts", price: 44.99, image: "/shirts/ShortSleeve-Brown.jpg", rating: 4.7, sales: 203 },
  { id: 19, name: "Black Plaid Long Sleeve", category: "Shirts", price: 59.99, image: "/shirts/LongSleeve-PlaidShirt-Black.jpg", rating: 4.8, sales: 234 },
  { id: 20, name: "Multi-Color Short Sleeve", category: "Shirts", price: 49.99, image: "/shirts/cotton-multi-short.jpg", rating: 4.5, sales: 156 },
  { id: 21, name: "Premium Designer Shirt", category: "Shirts", price: 69.99, image: "/shirts/shirt-designer.jpg", rating: 4.9, sales: 267 },
  { id: 22, name: "Casual Everyday Shirt", category: "Shirts", price: 44.99, image: "/shirts/ok-shirt.jpg", rating: 4.6, sales: 189 },
  { id: 23, name: "Classic Black Polo", category: "Shirts", price: 49.99, image: "/shirts/black-polo.jpg", rating: 4.8, sales: 298 },
  { id: 24, name: "Long Sleeve Round Neck", category: "Shirts", price: 54.99, image: "/shirts/long-sleeve-round-neck.jpg", rating: 4.7, sales: 212 },
];

export default function CategoryAllPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Get bestsellers (top 3 by sales)
  const bestsellers = [...allProducts].sort((a, b) => b.sales - a.sales).slice(0, 3);

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
                <Link href="/shop" className="text-amber-800 hover:text-amber-600 transition">Shop</Link>
              </nav>
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

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-body text-amber-800 mb-4 border border-amber-200/50">
                <Sparkles size={16} className="text-amber-500" />
                <span>Complete Collection</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-amber-950 mb-4">
                All Products
              </h1>
              <p className="font-body text-lg text-amber-800/70 max-w-2xl">
                Browse our entire catalog of premium apparel. From everyday essentials to statement pieces, find your perfect style.
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full p-1 border border-amber-200/50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                    : 'text-amber-800 hover:bg-white/80'
                }`}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('large')}
                className={`p-2 rounded-full transition ${
                  viewMode === 'large' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                    : 'text-amber-800 hover:bg-white/80'
                }`}
              >
                <LayoutGrid size={20} />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-logo text-amber-900 mb-1">{allProducts.length}</div>
              <div className="text-sm font-body text-amber-700/70">Total Products</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-logo text-amber-900 mb-1">3</div>
              <div className="text-sm font-body text-amber-700/70">Categories</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-logo text-amber-900 mb-1">4.8★</div>
              <div className="text-sm font-body text-amber-700/70">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Highlight */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100/50 to-orange-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-amber-600" size={24} />
            <h2 className="font-heading text-2xl sm:text-3xl text-amber-950">
              Top Selling Items
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {bestsellers.map((product, index) => (
              <div key={product.id} className="relative group bg-white rounded-2xl overflow-hidden border border-amber-200/50 hover:border-amber-300 hover:shadow-xl transition-all">
                <div className="absolute top-3 left-3 z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center font-logo text-lg shadow-lg">
                    #{index + 1}
                  </div>
                </div>
                <div className="relative aspect-[4/5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
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
                  <h3 className="font-heading text-lg text-amber-950 mb-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-logo text-amber-900">${product.price}</span>
                    <span className="text-xs font-body text-amber-600">{product.sales} sold</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl text-amber-950 mb-2">
              Complete Collection
            </h2>
            <p className="font-body text-amber-800/70">
              Explore all {allProducts.length} products across our catalog
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {allProducts.map((product) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden border border-amber-100/50 hover:border-amber-200 hover:shadow-xl transition-all duration-300 ${
                  viewMode === 'large' ? 'sm:col-span-1' : ''
                }`}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50/50 ${
                  viewMode === 'large' ? 'aspect-[4/5]' : 'aspect-[3/4]'
                }`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={viewMode === 'large' 
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                  />
                  
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 rounded-full text-sm font-body text-amber-800 mb-6">
            <Sparkles size={16} />
            <span>Premium Quality Guaranteed</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-amber-950 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-body text-lg text-amber-800/70 mb-8 max-w-2xl mx-auto">
            Check out our individual collections or get in touch with us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-body hover:from-amber-600 hover:to-orange-600 transition shadow-lg"
            >
              Browse Collections
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-300/50 text-amber-900 px-8 py-4 rounded-full font-body hover:bg-amber-50 transition"
            >
              Contact Us
            </Link>
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
                <li><Link href="/category/hoodies" className="hover:text-white transition">Hoodies</Link></li>
                <li><Link href="/category/sneakers" className="hover:text-white transition">Sneakers</Link></li>
                <li><Link href="/category/shirts" className="hover:text-white transition">Shirts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-base mb-4 text-amber-100">Support</h4>
              <ul className="font-body space-y-2 text-sm text-amber-200/70">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
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