"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const heroImages = [
  { color: "black", src: "/hero/hero-black.png" },
  { color: "white", src: "/hero/hero-white.png" },
  { color: "green", src: "/hero/hero-green.png" },
  { color: "red", src: "/hero/hero-red.png" },
];

export default function Hero() {
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <section className="relative w-full h-screen bg-background flex flex-col justify-center items-center text-center px-4">
      {/* Hero Image */}
      <div className="w-full max-w-3xl relative">
        {heroImages.map((img) => (
          <img
            key={img.color}
            src={img.src}
            alt={`${img.color} hoodie`}
            className={`w-full h-auto object-contain transition-opacity duration-500 ${
              selectedColor === img.color ? "opacity-100" : "opacity-0 absolute top-0 left-0"
            }`}
          />
        ))}
      </div>

      {/* Logo / Headline */}
      <h1 className="font-logo text-5xl sm:text-6xl mt-8">VITAL-WEARS</h1>
      <p className="font-body text-lg sm:text-xl mt-4 max-w-xl">
        Premium apparel designed for comfort, style, and versatility.
      </p>

      {/* Color Switcher */}
      <div className="flex gap-4 mt-6">
        {heroImages.map((img) => (
          <button
            key={img.color}
            onClick={() => setSelectedColor(img.color)}
            className={`w-10 h-10 rounded-full border-2 transition-transform duration-300
              ${selectedColor === img.color ? "scale-110 border-black" : "border-gray-300"}
              `}
            style={{ backgroundColor: img.color }}
          />
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#shop"
        className="mt-8 inline-flex items-center gap-2 bg-black text-white font-heading px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Shop Now <ArrowRight size={20} />
      </a>
    </section>
  );
}
