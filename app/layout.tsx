import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Arslan — Full Stack Developer · Backend, DevOps & AI',
  description:
    'Full Stack Developer specializing in React, Next.js, Node.js, NestJS, PostgreSQL, Docker, Kubernetes, CI/CD, and AI agents. Building modern web apps, scalable APIs, and production AI systems.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'Backend Engineer',
    'DevOps Engineer',
    'Node.js',
    'NestJS',
    'TypeScript',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'PostgreSQL',
    'MongoDB',
    'AI Agents',
    'OpenAI',
    'Claude',
    'Pakistan',
    'Muhammad Arslan',
  ],
  authors: [{ name: 'Muhammad Arslan' }],
  creator: 'Muhammad Arslan',
  openGraph: {
    title: 'Muhammad Arslan — Full Stack Developer · Backend, DevOps & AI',
    description:
      'Modern web apps, scalable backends, DevOps, and AI agents. React · Next.js · Node.js · NestJS · Docker · Kubernetes.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Arslan — Full Stack Developer',
    description:
      'Modern web apps, scalable backends, DevOps, and AI agents.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0c1222',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-light font-sans antialiased">
        <Navigation />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
