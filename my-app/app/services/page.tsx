import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <>
      <Hero
        headline="Our Services"
        subtext="Full overview of what Nexus Corporate can do for your business."
      />
      <Services />  {/* Full service list, more details */}
    </>
  );
}