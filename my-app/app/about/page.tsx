import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="About Nexus Corporate"
        subtext="Who we are and what we stand for."
      />
      <About />     {/* Full version with optional image */}
      <Contact />   {/* CTA to reach out */}
    </>
  );
}