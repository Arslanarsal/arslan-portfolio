import type { Metadata } from 'next';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Services — Muhammad Arslan',
  description:
    'Backend APIs, databases, DevOps, monitoring, AI agents, and automation — built and shipped end to end.',
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
    </div>
  );
}
