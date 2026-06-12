import type { Metadata } from 'next';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  title: 'Projects — Muhammad Arslan',
  description:
    'Backend and AI case studies: ChatPilot, HiveMind, and an AI Agent Platform. Problem, architecture, and results.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <Projects />
    </div>
  );
}
