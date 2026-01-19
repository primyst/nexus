'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

interface CartItem {
  productId: number;
  productName: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch cart from localStorage or API
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
    setIsLoading(false);
  }, []);

  const removeItem = (productId: number) => {
    const updated = cartItems.filter(item => item.productId !== productId);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updated = cartItems.map(item =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  // ✅ SECURITY: Calculate total on server during checkout, not here
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="font-logo text-xl sm:text-2xl text-stone-900">
              VITAL-WEARS
            </Link>
            <Link href="/shop" className="px-4 py-2 bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-full text-sm font-body hover:from-stone-700 hover:to-stone-800 transition">
              Continue Shopping
            </Link>
          </div>
        </div>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 transition mb-8 font-body"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>

          <h1 className="font-heading text-4xl text-stone-950 mb-12">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={48} className="mx-auto text-stone-300 mb-4" />
              <h2 className="font-heading text-2xl text-stone-900 mb-2">Your cart is empty</h2>
              <p className="font-body text-stone-600 mb-8">Start shopping to add items</p>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-stone-800 to-stone-900 text-white px-8 py-4 rounded-full font-body hover:from-stone-700 hover:to-stone-800 transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-stone-200/50 overflow-hidden">
                  {cartItems.map((item) => (
                    <div key={item.productId} className="flex gap-4 p-6 border-b border-stone-200/50 last:border-b-0">
                      <div className="relative w-24 h-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.productName}
                          fill
                          className="object-cover"
                          sizes="100px"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-heading text-lg text-stone-950 mb-1">
                          {item.productName}
                        </h3>
                        <p className="font-body text-sm text-stone-600 mb-3">
                          {item.color} • Size {item.size}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 border border-stone-300 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center hover:bg-stone-100"
                            >
                              −
                            </button>
                            <span className="w-6 text-center font-body text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center hover:bg-stone-100"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-logo text-lg text-stone-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-stone-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-stone-50 to-slate-50/50 rounded-2xl border border-stone-200/50 p-6 sticky top-24">
                  <h2 className="font-heading text-xl text-stone-950 mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-stone-200/50">
                    <div className="flex justify-between font-body text-stone-700">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-body text-stone-700">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between font-body text-stone-700">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between font-heading text-xl text-stone-950 mb-6">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full bg-gradient-to-r from-stone-800 to-stone-900 text-white px-6 py-4 rounded-full font-body font-medium hover:from-stone-700 hover:to-stone-800 transition text-center block"
                  >
                    Proceed to Checkout
                  </Link>

                  <p className="font-body text-xs text-stone-600 text-center mt-4">
                    ✓ Secure checkout with SSL encryption
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
