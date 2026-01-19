import { Sparkles, ShieldCheck, Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl">
            Built With Purpose
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Vital-Wears creates everyday apparel focused on comfort, durability,
            and clean design—nothing excessive, nothing disposable.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quality */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow">
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-heading text-xl mb-2">Quality First</h3>
            <p className="font-body text-sm text-muted-foreground">
              Carefully selected fabrics and construction that hold up to daily
              wear without sacrificing comfort.
            </p>
          </div>

          {/* Design */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow">
              <Sparkles size={22} />
            </div>
            <h3 className="font-heading text-xl mb-2">Timeless Design</h3>
            <p className="font-body text-sm text-muted-foreground">
              Clean silhouettes and neutral tones designed to stay relevant
              beyond trends.
            </p>
          </div>

          {/* Responsibility */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow">
              <Leaf size={22} />
            </div>
            <h3 className="font-heading text-xl mb-2">Made Responsibly</h3>
            <p className="font-body text-sm text-muted-foreground">
              We focus on responsible sourcing and long-lasting pieces—buy less,
              wear longer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
      }
