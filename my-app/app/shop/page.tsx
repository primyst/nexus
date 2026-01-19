'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, ShoppingBag, Filter, X, ChevronDown, Star, Search } from 'lucide-react';

const allProducts = [
  // Hoodies
  { id: 1, name: "Premium Cotton Hoodie", category: "Hoodies", price: 89.99, image: "/hoodies/hoodie-one.jpg", rating: 4.9, inStock: true },
  { id: 2, name: "Essential Zip Hoodie", category: "Hoodies", price: 94.99, image: "/hoodies/hoodie-two.jpg", rating: 4.8, inStock: true },
  { id: 3, name: "Classic Pullover Hoodie", category: "Hoodies", price: 84.99, image: "/hoodies/hoddie-three.jpg", rating: 4.7, inStock: true },
  { id: 4, name: "Oversized Comfort Hoodie", category: "Hoodies", price: 99.99, image: "/hoodies/hoodie-four.jpg", rating: 5.0, inStock: true },
  { id: 5, name: "Athletic Performance Hoodie", category: "Hoodies", price: 109.99, image: "/hoodies/hoddie-five.jpg", rating: 4.8, inStock: true },
  { id: 6, name: "Lightweight Summer Hoodie", category: "Hoodies", price: 79.99, image: "/hoodies/hoddie-six.jpg", rating: 4.6, inStock: true },
  { id: 7, name: "Premium White Hoodie", category: "Hoodies", price: 89.99, image: "/hoodies/hoddie-white.jpg", rating: 4.9, inStock: false },
  { id: 8, name: "Urban Street Hoodie", category: "Hoodies", price: 94.99, image: "/hoodies/hoddie-seven.jpg", rating: 4.7, inStock: true },
  
  // Sneakers
  { id: 9, name: "Urban Runner Sneakers", category: "Sneakers", price: 129.99, image: "/sneakers/sneaker-one.jpg", rating: 4.8, inStock: true },
  { id: 10, name: "Classic White Sneakers", category: "Sneakers", price: 109.99, image: "/sneakers/white-shoe.jpg", rating: 4.9, inStock: true },
  { id: 11, name: "Sport Performance Max", category: "Sneakers", price: 149.99, image: "/sneakers/sneaker-max.jpg", rating: 5.0, inStock: true },
  { id: 12, name: "Street Style Sneakers", category: "Sneakers", price: 119.99, image: "/sneakers/sneaker-two.jpg", rating: 4.7, inStock: true },
  { id: 13, name: "Premium Adidas Edition", category: "Sneakers", price: 159.99, image: "/sneakers/adidas-sneaker.jpg", rating: 4.9, inStock: false },
  
  // Shirts
  { id: 14, name: "Premium White T-Shirt", category: "Shirts", price: 39.99, image: "/shirts/white-t-shirt.jpg", rating: 4.8, inStock: true },
  { id: 15, name: "Classic Black T-Shirt", category: "Shirts", price: 39.99, image: "/shirts/black-t-shirt.jpg", rating: 4.7, inStock: true },
  { id: 16, name: "Designer Cotton Shirt", category: "Shirts", price: 64.99, image: "/shirts/white-shirt-designer.jpg", rating: 4.9, inStock: true },
  { id: 17, name: "Multi-Color Long Sleeve", category: "Shirts", price: 54.99, image: "/shirts/cotton-multi-long.jpg", rating: 4.6, inStock: true },
  { id: 18, name: "Brown Short Sleeve", category: "Shirts", price: 44.99, image: "/shirts/ShortSleeve-Brown.jpg", rating: 4.7, inStock: true },
  { id: 19, name: "Black Plaid Long Sleeve", category: "Shirts", price: 59.99, image: "/shirts/LongSleeve-PlaidShirt-Black.jpg", rating: 4.8, inStock: true },
  { id: 20, name: "Multi-Color Short Sleeve", category: "Shirts", price: 49.99, image: "/shirts/cotton-multi-short.jpg", rating: 4.5, inStock: true },
  { id: 21, name: "Premium Designer Shirt", category: "Shirts", price: 69.99, image: "/shirts/shirt-designer.jpg", rating: 4.9, inStock: true },
  { id: 22, name: "Casual Everyday Shirt", category: "Shirts", price: 44.99, image: "/shirts/ok-shirt.jpg", rating: 4.6, inStock: true },
  { id: 23, name: "Classic Black Polo", category: "Shirts", price: 49.99, image: "/shirts/black-polo.jpg", rating: 4.8, inStock: true },
  { id: 24, name: "Long Sleeve Round Neck", category: "Shirts", price: 54.99, image: "/shirts/long-sleeve-round-neck.jpg", rating: 4.7, inStock: true },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Hoodies', 'Sneakers', 'Shirts'];
  const priceRanges = [
    { label: 'All Prices', value: 'All', min: 0, max: Infinity },
    { label: 'Under $50', value: 'under50', min: 0, max: 50 },
    { label: '$50 - $100', value: '50-100', min: 50, max: 100 },
    { label: '$100 - $150', value: '100-150', min: 100, max: 150 },
    { label: 'Over $150', value: 'over150', min: 150, max: Infinity },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Filter products
  let filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const priceRange = priceRanges.find(range => range.value === selectedPriceRange);
    const matchesPrice = priceRange ? product.price >= priceRange.min && product.price <= priceRange.max : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="font-logo text-xl sm:text-2xl text-amber-900">
              VITAL-WEARS
            </Link>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden p-2 hover:bg-amber-100/50 rounded-full transition"
              >
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
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 transition mb-6 font-body"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-amber-950 mb-4">
                Shop All Products
              </h1>
              <p className="font-body text-lg text-amber-800/70">
                Explore our complete collection of premium apparel
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-3xl sm:text-4xl font-logo text-amber-900 mb-1">
                {filteredProducts.length}
              </div>
              <div className="text-sm font-body text-amber-700/70">
                Products Found
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-600" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-amber-200/50 focus:border-amber-400 focus:outline-none font-body text-amber-900 placeholder:text-amber-600/50"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50">
                  <h3 className="font-heading text-lg text-amber-950 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg font-body text-sm transition ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                            : 'text-amber-800 hover:bg-amber-50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50">
                  <h3 className="font-heading text-lg text-amber-950 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setSelectedPriceRange(range.value)}
                        className={`w-full text-left px-4 py-2 rounded-lg font-body text-sm transition ${
                          selectedPriceRange === range.value
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                            : 'text-amber-800 hover:bg-amber-50'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Mobile Filters Overlay */}
            {showFilters && (
              <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setShowFilters(false)}>
                <div 
                  className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white p-6 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-xl text-amber-950">Filters</h2>
                    <button onClick={() => setShowFilters(false)}>
                      <X size={24} className="text-amber-900" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Categories */}
                    <div>
                      <h3 className="font-heading text-base text-amber-950 mb-3">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setShowFilters(false);
                            }}
                            className={`w-full text-left px-4 py-2 rounded-lg font-body text-sm transition ${
                              selectedCategory === category
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                                : 'text-amber-800 hover:bg-amber-50'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="font-heading text-base text-amber-950 mb-3">Price Range</h3>
                      <div className="space-y-2">
                        {priceRanges.map((range) => (
                          <button
                            key={range.value}
                            onClick={() => {
                              setSelectedPriceRange(range.value);
                              setShowFilters(false);
                            }}
                            className={`w-full text-left px-4 py-2 rounded-lg font-body text-sm transition ${
                              selectedPriceRange === range.value
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                                : 'text-amber-800 hover:bg-amber-50'
                            }`}
                          >
                            {range.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort & Filter Bar */}
              <div className="flex items-center justify-between mb-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-amber-200/50">
                <div className="font-body text-sm text-amber-800">
                  Showing <span className="font-medium">{filteredProducts.length}</span> products
                </div>
                <div className="flex items-center gap-2">
                  <label className="font-body text-sm text-amber-800 hidden sm:block">Sort by:</label>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-amber-200/50 rounded-lg px-4 py-2 pr-10 font-body text-sm text-amber-900 focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600 pointer-events-none" size={16} />
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-amber-100/50 hover:border-amber-200 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50/50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      {/* Stock Badge */}
                      {!product.inStock && (
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full text-xs font-body font-medium bg-red-500 text-white">
                            Out of Stock
                          </span>
                        </div>
                      )}

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

                    {/* Info */}
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
                        {product.inStock && (
                          <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-body hover:from-amber-600 hover:to-orange-600 transition opacity-0 group-hover:opacity-100">
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/50">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-amber-600" size={32} />
                  </div>
                  <h3 className="font-heading text-2xl text-amber-950 mb-2">
                    No products found
                  </h3>
                  <p className="font-body text-amber-700/70 mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedPriceRange('All');
                      setSearchQuery('');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-body hover:from-amber-600 hover:to-orange-600 transition"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
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