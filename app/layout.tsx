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
  title: 'Muhammad Arslan — Backend Engineer · DevOps & AI Agents',
  description:
    'Backend Engineer specializing in Node.js, NestJS, PostgreSQL, Docker, Kubernetes, CI/CD, and AI agents. Building scalable APIs, reliable cloud infrastructure, and production AI systems.',
  keywords: [
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
    title: 'Muhammad Arslan — Backend Engineer · DevOps & AI Agents',
    description:
      'Scalable backend systems, DevOps, and production AI agents. Node.js · NestJS · Docker · Kubernetes · CI/CD.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Arslan — Backend Engineer',
    description:
      'Scalable backend systems, DevOps, and production AI agents.',
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
