import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-5xl mx-auto text-center rounded-3xl bg-black text-white px-6 py-20">
        <h2 className="font-heading text-3xl sm:text-4xl mb-4">
          Designed to Be Worn Daily
        </h2>

        <p className="font-body text-white/80 max-w-2xl mx-auto mb-10">
          Explore essential apparel crafted for comfort, durability, and
          everyday confidence. No excess. Just quality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/category/hoodies"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-heading hover:bg-gray-100 transition"
          >
            Shop Hoodies <ArrowRight size={18} />
          </Link>

          <Link
            href="/category/shirts"
            className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 rounded-lg font-heading hover:bg-white/10 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
