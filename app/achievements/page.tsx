import type { Metadata } from 'next';
import Achievements from '@/components/Achievements';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Achievements & Competitive Programming — Muhammad Arslan',
  description:
    'ICPC 2025 Regionalist, 700+ LeetCode, won and organized programming competitions, plus contest highlights.',
};

export default function AchievementsPage() {
  return (
    <div className="pt-16">
      <Achievements />
      <Gallery />
    </div>
  );
}
