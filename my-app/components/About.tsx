'use client';
import { Users, Award } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Text content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl text-white">
            About Nexus Corporate
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Nexus Corporate is a trusted partner for organizations looking to optimize operations, enhance strategic initiatives, and achieve measurable results. Our team combines deep industry knowledge with hands-on experience to deliver solutions that work in the real world.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Founded with a mission to help businesses operate smarter, we emphasize transparency, efficiency, and long-term impact in every engagement. Our multi-disciplinary team ensures clients receive insights and solutions tailored to their unique challenges.
          </p>

          {/* Optional stats */}
          <div className="mt-6 flex gap-6 flex-wrap">
            <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
              <Users className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-lg font-semibold text-white">50+</p>
                <p className="text-gray-300 text-sm">Clients Served</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
              <Award className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-lg font-semibold text-white">10+</p>
                <p className="text-gray-300 text-sm">Awards & Recognitions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional image */}
        <div className="relative h-64 w-full md:h-[400px]">
          <Image
            src="/about-office.jpg"
            alt="Professional office environment"
            fill
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}