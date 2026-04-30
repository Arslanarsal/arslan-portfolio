import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'M. Arslan — Backend AI Developer',
  description:
    'Backend AI Developer specializing in Node.js, NestJS, AI agents, and DevOps. Building scalable APIs, agentic AI systems, and multi-tenant SaaS products for international clients.',
  keywords: [
    'Backend Developer',
    'AI Developer',
    'Node.js',
    'NestJS',
    'TypeScript',
    'AI Agents',
    'DevOps',
    'OpenAI',
    'Claude',
    'Pakistan',
    'M Arslan',
  ],
  authors: [{ name: 'M. Arslan' }],
  creator: 'M. Arslan',
  openGraph: {
    title: 'M. Arslan — Backend AI Developer',
    description:
      'Building scalable AI-powered backend systems and SaaS products. Node.js · NestJS · AI Agents · DevOps.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Arslan — Backend AI Developer',
    description:
      'Building scalable AI-powered backend systems and SaaS products.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
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
        {children}
      </body>
    </html>
  );
}
