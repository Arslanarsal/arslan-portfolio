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
  title: 'Muhammad Arslan — AI Automation & Integration Specialist · Full Stack Developer',
  description:
    'AI Automation & Integration Specialist and Full Stack Developer. AI agents and chatbots on OpenAI and Claude, RAG over your own data, n8n, Make, Zapier, and GoHighLevel automation, backed by Node.js, NestJS, Python, React, and Next.js.',
  keywords: [
    'AI Automation Engineer',
    'AI Integration Specialist',
    'AI Agents',
    'AI Chatbots',
    'OpenAI',
    'Anthropic Claude',
    'RAG',
    'LangChain',
    'MCP Servers',
    'n8n',
    'Make.com',
    'Zapier',
    'GoHighLevel',
    'Workflow Automation',
    'Full Stack Developer',
    'Python',
    'FastAPI',
    'Node.js',
    'NestJS',
    'Next.js',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'Muhammad Arslan',
  ],
  authors: [{ name: 'Muhammad Arslan' }],
  creator: 'Muhammad Arslan',
  openGraph: {
    title: 'Muhammad Arslan — AI Automation & Integration Specialist',
    description:
      'AI agents, chatbots, and RAG assistants, plus n8n, Make, and Zapier automation, backed by full stack engineering in Node.js, NestJS, Python, and Next.js.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Arslan — AI Automation & Full Stack Developer',
    description:
      'AI agents, RAG assistants, and n8n automation, built by a full stack developer.',
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
