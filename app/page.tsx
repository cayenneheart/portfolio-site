import { ProfileCard } from '@/components/about/profile-card';
import { SkillSection } from '@/components/about/skill-section';
import { CareerTimeline } from '@/components/about/career-timeline';

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-12">
      <ProfileCard />
      <SkillSection />
      <CareerTimeline />
    </div>
  );
}
