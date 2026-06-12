import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact — Muhammad Arslan',
  description:
    'Get in touch for backend, DevOps, and AI agent work. Available remote, relocation, or contract — worldwide.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
