import Hero from '@/components/Hero';
import Work from '@/components/Work';

export default function WorkPage() {
  return (
    <>
      <Hero
        headline="Selected Work & Achievements"
        subtext="Examples of our projects and measurable outcomes."
      />
      <Work />      {/* Full work list with more details */}
    </>
  );
}