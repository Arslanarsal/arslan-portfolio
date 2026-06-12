import type { Metadata } from 'next';
import Skills from '@/components/Skills';
import AIAutomation from '@/components/AIAutomation';

export const metadata: Metadata = {
  title: 'Skills & Tech Stack — Muhammad Arslan',
  description:
    'Backend, databases, DevOps, monitoring, and AI agent tooling — the full stack Arslan ships in production.',
};

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <Skills />
      <AIAutomation />
    </div>
  );
}
