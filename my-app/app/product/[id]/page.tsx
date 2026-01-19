'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, ShoppingBag, Star, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Product data (same as your catalog)
const allProducts = [
  { id: 1, name: "Premium Cotton Hoodie", category: "Hoodies", price: 89.99, image: "/hoodies/hoodie-one.jpg", rating: 4.9, sales: 234, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'], description: "Premium quality cotton hoodie perfect for everyday wear..." },
  // ... rest of products
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const product = allProducts.find(p => p.id === parseInt(params.id));
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = async () => {
    // ✅ VALIDATION - Client side
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    setIsAddingToCart(true);

    try {
      // Send to backend for validation
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          price: product.price,
          size: selectedSize,
          color: selectedColor,
          quantity: quantity,
          image: product.image,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      const data = await response.json();
      
      // Show success and redirect to cart
      alert('Added to cart!');
      router.push('/cart');
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="font-logo text-xl sm:text-2xl text-stone-900">
              VITAL-WEARS
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/cart" className="px-4 py-2 bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-full text-sm font-body hover:from-stone-700 hover:to-stone-800 transition">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Product Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href={`/category/${product.category.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 transition mb-8 font-body"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md bg-gradient-to-br from-stone-50 to-slate-50/50 rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-body text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl text-stone-950 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star size={20} className="text-amber-500 fill-amber-500" />
                  <span className="font-body text-lg font-medium text-stone-900">{product.rating}</span>
                  <span className="text-stone-600 font-body">({product.sales} reviews)</span>
                </div>
              </div>

              <div className="text-4xl font-logo text-stone-900 mb-8">
                ${product.price}
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block font-heading text-lg text-stone-900 mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg font-body font-medium transition border-2 ${
                        selectedSize === size
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-300 bg-white text-stone-900 hover:border-stone-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block font-heading text-lg text-stone-900 mb-3">
                  Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-3 rounded-lg font-body font-medium transition border-2 ${
                        selectedColor === color
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-300 bg-white text-stone-900 hover:border-stone-900'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block font-heading text-lg text-stone-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-stone-300 flex items-center justify-center hover:bg-stone-100"
                  >
                    −
                  </button>
                  <span className="text-lg font-body font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-stone-300 flex items-center justify-center hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="w-full bg-gradient-to-r from-stone-800 to-stone-900 text-white px-8 py-4 rounded-full font-body font-medium hover:from-stone-700 hover:to-stone-800 transition disabled:opacity-50 flex items-center justify-center gap-2 mb-4"
              >
                <ShoppingBag size={20} />
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </button>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-full border-2 border-stone-300 text-stone-900 px-8 py-4 rounded-full font-body font-medium hover:bg-stone-50 transition flex items-center justify-center gap-2"
              >
                <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                {isFavorite ? 'Saved' : 'Save for Later'}
              </button>

              {/* Benefits */}
              <div className="mt-12 space-y-4">
                <div className="flex items-start gap-4">
                  <Truck className="text-stone-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading text-stone-900 mb-1">Free Shipping</h4>
                    <p className="font-body text-sm text-stone-600">On orders over $100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <RotateCcw className="text-stone-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading text-stone-900 mb-1">Easy Returns</h4>
                    <p className="font-body text-sm text-stone-600">30-day return policy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="text-stone-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-heading text-stone-900 mb-1">Secure Checkout</h4>
                    <p className="font-body text-sm text-stone-600">SSL encrypted payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
