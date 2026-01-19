import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    title: "Hoodies",
    tagline: "Engineered comfort. Everyday wear.",
    image: "/hoodies/hoodie-one.jpg",
    href: "/category/hoodies",
  },
  {
    title: "Sneakers",
    tagline: "Built for movement and presence.",
    image: "/sneakers/sneaker-one.jpg",
    href: "/category/sneakers",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl">
            Featured Collections
          </h2>
          <p className="font-body text-muted-foreground mt-3">
            Carefully selected essentials from Vital-Wears.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featured.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-100 group-hover:bg-black/40 transition-colors" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-2xl">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm opacity-90 mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={28}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
