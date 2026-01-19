import Hero from '@/components/Hero';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Get in Touch"
        subtext="Questions? Projects? Reach out to Nexus Corporate today."
      />
      <Contact />   {/* Full form */}
    </>
  );
}