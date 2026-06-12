import type { Metadata } from 'next';
import About from '@/components/About';
import Experience from '@/components/Experience';

export const metadata: Metadata = {
  title: 'About — Muhammad Arslan',
  description:
    'Backend Engineer with 3+ years building production systems. Experience, education, and engineering philosophy.',
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
      <Experience />
    </div>
  );
}
