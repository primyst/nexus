'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, ShoppingBag, Star, ChevronDown, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

const hoodiesProducts = [
  { id: 1, name: "Premium Cotton Hoodie", price: 89.99, image: "/hoodies/hoodie-one.jpg", rating: 4.9, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'], featured: true },
  { id: 2, name: "Essential Zip Hoodie", price: 94.99, image: "/hoodies/hoodie-two.jpg", rating: 4.8, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Gray', 'Olive'], featured: true },
  { id: 3, name: "Classic Pullover Hoodie", price: 84.99, image: "/hoodies/hoddie-three.jpg", rating: 4.7, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Navy', 'Gray', 'Black'], featured: false },
  { id: 4, name: "Oversized Comfort Hoodie", price: 99.99, image: "/hoodies/hoodie-four.jpg", rating: 5.0, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Gray', 'Navy'], featured: true },
  { id: 5, name: "Athletic Performance Hoodie", price: 109.99, image: "/hoodies/hoddie-five.jpg", rating: 4.8, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Navy', 'Red'], featured: false },
  { id: 6, name: "Lightweight Summer Hoodie", price: 79.99, image: "/hoodies/hoddie-six.jpg", rating: 4.6, sizes: ['S', 'M', 'L', 'XL'], colors: ['Gray', 'Beige', 'Navy'], featured: false },
  { id: 7, name: "Premium White Hoodie", price: 89.99, image: "/hoodies/hoddie-white.jpg", rating: 4.9, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Cream', 'Light Gray'], featured: true },
  { id: 8, name: "Urban Street Hoodie", price: 94.99, image: "/hoodies/hoddie-seven.jpg", rating: 4.7, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Black', 'Charcoal', 'Navy'], featured: false },
];

const features = [
  { icon: ShieldCheck, title: "Premium Cotton", description: "100% organic cotton blend for ultimate comfort" },
  { icon: Sparkles, title: "Perfect Fit", description: "Tailored designs for all body types" },
  { icon: TrendingUp, title: "Trending Styles", description: "Stay ahead with our latest designs" },
];

export default function CategoryHoodiesPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Sort products
  let sortedProducts = [...hoodiesProducts];
  if (sortBy === 'price-low') {
    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'featured') {
    sortedProducts = sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  const featuredProducts = hoodiesProducts.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="font-logo text-xl sm:text-2xl text-stone-900">
              VITAL-WEARS
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6 font-body text-sm">
                <Link href="/new-arrivals" className="text-stone-700 hover:text-stone-900 transition">New Arrivals</Link>
                <Link href="/collections" className="text-stone-700 hover:text-stone-900 transition">Collections</Link>
                <Link href="/shop" className="text-stone-700 hover:text-stone-900 transition">Shop</Link>
              </nav>
              <Link href="/cart" className="px-4 py-2 bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-full text-sm font-body hover:from-stone-700 hover:to-stone-800 transition">
                Cart (0)
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200/30 via-slate-200/30 to-zinc-200/30 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/collections"
            className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 transition mb-6 font-body"
          >
            <ArrowLeft size={20} />
            <span>Back to Collections</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-body text-stone-800 mb-6 border border-stone-200/50">
                <TrendingUp size={16} className="text-stone-600" />
                <span>8 Styles Available</span>
              </div>
              
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-stone-950 mb-6 leading-tight">
                Premium<br />Hoodies
              </h1>
              
              <p className="font-body text-xl text-stone-700 mb-6">
                Engineered for ultimate comfort and everyday versatility. Our hoodies combine premium materials with timeless design.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-stone-700">
                  <Star size={20} className="text-amber-500 fill-amber-500" />
                  <span className="font-body text-lg font-medium">4.8 Average Rating</span>
                </div>
                <div className="text-stone-700 font-body text-lg">
                  • Free Shipping Over $100
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-stone-800 to-stone-900 text-white px-8 py-4 rounded-full font-body hover:from-stone-700 hover:to-stone-800 transition shadow-lg"
                >
                  Shop Now
                </a>
                <Link
                  href="/category/all"
                  className="inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm border-2 border-stone-300/50 text-stone-900 px-8 py-4 rounded-full font-body hover:bg-white/80 transition"
                >
                  View All Products
                </Link>
              </div>
            </div>

            {/* Right: Featured Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-stone-300/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-slate-300/30 rounded-full blur-3xl" />
                
                <div className="relative z-10 bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/hoodies/hoodie-one.jpg"
                      alt="Premium Hoodie"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-stone-700 to-stone-900 text-white px-6 py-3 rounded-2xl shadow-xl font-body text-sm font-medium">
                  ✨ Bestseller
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-100/50 to-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/50 hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl text-stone-950 mb-2">{feature.title}</h3>
                  <p className="font-body text-stone-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Hoodies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-full text-sm font-body text-stone-800 mb-4">
              <Sparkles size={16} />
              <span>Customer Favorites</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-stone-950 mb-4">
              Featured Hoodies
            </h2>
            <p className="font-body text-lg text-stone-600 max-w-2xl">
              Our most popular styles, loved by thousands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/50 hover:border-stone-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-stone-50 to-slate-50/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-body font-medium bg-stone-900 text-white">
                      Featured
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
                        favorites.includes(product.id)
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/90 text-stone-900 hover:bg-white'
                      }`}
                    >
                      <Heart size={18} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      <span className="text-xs font-body text-stone-700">{product.rating}</span>
                    </div>
                    <span className="text-xs font-body text-stone-500">
                      • {product.colors.length} colors
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-lg text-stone-950 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-logo text-stone-900">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-full text-sm font-body hover:from-stone-700 hover:to-stone-800 transition opacity-0 group-hover:opacity-100">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Hoodies */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-stone-950 mb-2">
                All Hoodies
              </h2>
              <p className="font-body text-stone-600">
                {sortedProducts.length} styles to choose from
              </p>
            </div>

            <div className="flex items-center gap-2">
              <label className="font-body text-sm text-stone-700 hidden sm:block">Sort:</label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-stone-200 rounded-lg px-4 py-2 pr-10 font-body text-sm text-stone-900 focus:outline-none focus:border-stone-400 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setSelectedProduct(product.id)}
                onMouseLeave={() => setSelectedProduct(null)}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/50 hover:border-stone-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-stone-50 to-slate-50/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
                        favorites.includes(product.id)
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/90 text-stone-900 hover:bg-white'
                      }`}
                    >
                      <Heart size={18} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <Link
                      href={`/product/${product.id}`}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition text-stone-900"
                    >
                      <ShoppingBag size={18} />
                    </Link>
                  </div>

                  {/* Quick Info on Hover */}
                  {selectedProduct === product.id && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 to-transparent p-4 text-white">
                      <div className="text-xs font-body mb-1">Available Sizes</div>
                      <div className="flex gap-1 flex-wrap">
                        {product.sizes.map(size => (
                          <span key={size} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      <span className="text-xs font-body text-stone-700">{product.rating}</span>
                    </div>
                    <span className="text-xs font-body text-stone-500">
                      • {product.colors.length} colors
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-lg text-stone-950 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-logo text-stone-900">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-full text-sm font-body hover:from-stone-700 hover:to-stone-800 transition opacity-0 group-hover:opacity-100">
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
          <h2 className="font-heading text-3xl sm:text-4xl text-stone-950 mb-4">
            Need Help Choosing?
          </h2>
          <p className="font-body text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Our style experts are here to help you find the perfect hoodie for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-stone-800 to-stone-900 text-white px-8 py-4 rounded-full font-body hover:from-stone-700 hover:to-stone-800 transition shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/size-guide"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-stone-300/50 text-stone-900 px-8 py-4 rounded-full font-body hover:bg-stone-50 transition"
            >
              Size Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-zinc-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="font-logo text-2xl mb-4">VITAL-WEARS</div>
              <p className="font-body text-stone-300 text-sm max-w-md">
                Elevating everyday style with timeless design and exceptional quality.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-base mb-4 text-stone-200">Collections</h4>
              <ul className="font-body space-y-2 text-sm text-stone-400">
                <li><Link href="/category/hoodies" className="hover:text-white transition">Hoodies</Link></li>
                <li><Link href="/category/sneakers" className="hover:text-white transition">Sneakers</Link></li>
                <li><Link href="/category/shirts" className="hover:text-white transition">Shirts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-base mb-4 text-stone-200">Support</h4>
              <ul className="font-body space-y-2 text-sm text-stone-400">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm font-body text-stone-400">
            <p>© 2026 Vital-Wears. Crafted with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}