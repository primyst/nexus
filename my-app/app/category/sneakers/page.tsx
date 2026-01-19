'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, ShoppingBag, Star, ChevronDown, Sparkles, Zap, Award, Wind } from 'lucide-react';

const sneakersProducts = [
  { id: 1, name: "Urban Runner Sneakers", price: 129.99, image: "/sneakers/sneaker-one.jpg", rating: 4.8, sizes: ['7', '8', '9', '10', '11', '12'], colors: ['Black', 'White', 'Gray'], featured: true, tag: 'Bestseller' },
  { id: 2, name: "Classic White Sneakers", price: 109.99, image: "/sneakers/white-shoe.jpg", rating: 4.9, sizes: ['7', '8', '9', '10', '11', '12', '13'], colors: ['White', 'Cream', 'Off-White'], featured: true, tag: 'Most Popular' },
  { id: 3, name: "Sport Performance Max", price: 149.99, image: "/sneakers/sneaker-max.jpg", rating: 5.0, sizes: ['8', '9', '10', '11', '12'], colors: ['Black', 'Navy', 'Red', 'White'], featured: true, tag: 'Premium' },
  { id: 4, name: "Street Style Sneakers", price: 119.99, image: "/sneakers/sneaker-two.jpg", rating: 4.7, sizes: ['7', '8', '9', '10', '11'], colors: ['Black', 'Gray', 'Brown'], featured: false, tag: 'New' },
  { id: 5, name: "Premium Adidas Edition", price: 159.99, image: "/sneakers/adidas-sneaker.jpg", rating: 4.9, sizes: ['8', '9', '10', '11', '12', '13'], colors: ['White', 'Black', 'Blue'], featured: true, tag: 'Limited' },
];

const features = [
  { icon: Zap, title: "All-Day Comfort", description: "Advanced cushioning technology for maximum support" },
  { icon: Wind, title: "Breathable Design", description: "Premium materials for optimal airflow" },
  { icon: Award, title: "Award-Winning", description: "Recognized for innovation and quality" },
];

export default function CategorySneakersPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Sort products
  let sortedProducts = [...sneakersProducts];
  if (sortBy === 'price-low') {
    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'featured') {
    sortedProducts = sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  const featuredProducts = sneakersProducts.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="font-logo text-xl sm:text-2xl text-blue-900">
              VITAL-WEARS
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6 font-body text-sm">
                <Link href="/new-arrivals" className="text-blue-800 hover:text-blue-600 transition">New Arrivals</Link>
                <Link href="/collections" className="text-blue-800 hover:text-blue-600 transition">Collections</Link>
                <Link href="/shop" className="text-blue-800 hover:text-blue-600 transition">Shop</Link>
              </nav>
              <Link href="/cart" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-body hover:from-blue-700 hover:to-indigo-700 transition">
                Cart (0)
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-indigo-200/30 to-cyan-200/30 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/collections"
            className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-600 transition mb-6 font-body"
          >
            <ArrowLeft size={20} />
            <span>Back to Collections</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-body text-blue-800 mb-6 border border-blue-200/50">
                <Zap size={16} className="text-blue-600" />
                <span>5 Premium Styles</span>
              </div>
              
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-blue-950 mb-6 leading-tight">
                Signature<br />Sneakers
              </h1>
              
              <p className="font-body text-xl text-blue-800 mb-6">
                Where timeless design meets modern performance. Experience the perfect blend of style, comfort, and durability.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-blue-800">
                  <Star size={20} className="text-amber-500 fill-amber-500" />
                  <span className="font-body text-lg font-medium">4.9 Average Rating</span>
                </div>
                <div className="text-blue-800 font-body text-lg">
                  • Premium Materials
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-body hover:from-blue-700 hover:to-indigo-700 transition shadow-lg"
                >
                  Shop Sneakers
                </a>
                <Link
                  href="/category/all"
                  className="inline-flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm border-2 border-blue-300/50 text-blue-900 px-8 py-4 rounded-full font-body hover:bg-white/80 transition"
                >
                  View All Products
                </Link>
              </div>
            </div>

            {/* Right: Featured Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                
                <div className="relative z-10 bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/sneakers/sneaker-one.jpg"
                      alt="Premium Sneakers"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-xl font-body text-sm font-medium animate-bounce">
                  🔥 Trending
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl text-blue-950 mb-2">{feature.title}</h3>
                  <p className="font-body text-blue-700 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Sneakers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm font-body text-blue-800 mb-4">
              <Sparkles size={16} />
              <span>Top Picks</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-blue-950 mb-4">
              Featured Collection
            </h2>
            <p className="font-body text-lg text-blue-700 max-w-2xl">
              Handpicked styles that define performance and style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-blue-200/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-body font-medium ${
                      product.tag === 'Premium' || product.tag === 'Limited'
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                        : 'bg-blue-600 text-white'
                    }`}>
                      {product.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
                        favorites.includes(product.id)
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/90 text-blue-900 hover:bg-white'
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
                      <span className="text-xs font-body text-blue-800">{product.rating}</span>
                    </div>
                    <span className="text-xs font-body text-blue-600">
                      • {product.colors.length} colors
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-lg text-blue-950 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-logo text-blue-900">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-body hover:from-blue-700 hover:to-indigo-700 transition opacity-0 group-hover:opacity-100">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Sneakers */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-blue-950 mb-2">
                All Sneakers
              </h2>
              <p className="font-body text-blue-700">
                {sortedProducts.length} premium styles available
              </p>
            </div>

            <div className="flex items-center gap-2">
              <label className="font-body text-sm text-blue-800 hidden sm:block">Sort:</label>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-blue-200 rounded-lg px-4 py-2 pr-10 font-body text-sm text-blue-900 focus:outline-none focus:border-blue-400 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setSelectedProduct(product.id)}
                onMouseLeave={() => setSelectedProduct(null)}
                className="group bg-white rounded-2xl overflow-hidden border border-blue-200/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
                        favorites.includes(product.id)
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/90 text-blue-900 hover:bg-white'
                      }`}
                    >
                      <Heart size={18} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <Link
                      href={`/product/${product.id}`}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition text-blue-900"
                    >
                      <ShoppingBag size={18} />
                    </Link>
                  </div>

                  {/* Quick Info on Hover */}
                  {selectedProduct === product.id && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-4 text-white">
                      <div className="text-xs font-body mb-1">Available Sizes</div>
                      <div className="flex gap-1 flex-wrap">
                        {product.sizes.slice(0, 4).map(size => (
                          <span key={size} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs">
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 4 && (
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs">
                            +{product.sizes.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      <span className="text-xs font-body text-blue-800">{product.rating}</span>
                    </div>
                    <span className="text-xs font-body text-blue-600">
                      • {product.colors.length} colors
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-base text-blue-950 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-logo text-blue-900">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-16 sm:py-20 overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
                Find Your Perfect Fit
              </h2>
              <p className="font-body text-lg text-white/90 mb-10">
                Not sure about sizing? Check our detailed size guide or contact our experts for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/size-guide"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-body hover:bg-blue-50 transition shadow-xl"
                >
                  Size Guide
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 px-8 py-4 rounded-full font-body hover:bg-white/10 backdrop-blur-sm transition"
                >
                  Contact Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="font-logo text-2xl mb-4">VITAL-WEARS</div>
              <p className="font-body text-blue-200 text-sm max-w-md">
                Elevating everyday style with timeless design and exceptional quality.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-base mb-4 text-blue-200">Collections</h4>
              <ul className="font-body space-y-2 text-sm text-blue-300">
                <li><Link href="/category/hoodies" className="hover:text-white transition">Hoodies</Link></li>
                <li><Link href="/category/sneakers" className="hover:text-white transition">Sneakers</Link></li>
                <li><Link href="/category/shirts" className="hover:text-white transition">Shirts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-base mb-4 text-blue-200">Support</h4>
              <ul className="font-body space-y-2 text-sm text-blue-300">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm font-body text-blue-300">
            <p>© 2026 Vital-Wears. Crafted with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}