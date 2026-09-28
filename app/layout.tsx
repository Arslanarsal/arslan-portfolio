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

const SITE_URL = 'https://arslan-dev-zeta.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Muhammad Arslan | Full Stack AI Engineer & AI Automation Specialist',
    template: '%s · Muhammad Arslan',
  },
  description:
    'Full Stack AI Engineer and AI Automation Specialist. Production AI agents on Claude and OpenAI, RAG over your own data, n8n, Make, Zapier and GoHighLevel automation, backed by Node.js, NestJS, Python, React and Next.js.',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Muhammad Arslan | Full Stack AI Engineer & AI Automation Specialist',
    description:
      'Production AI agents, RAG assistants and automation systems, backed by full stack engineering in Node.js, NestJS, Python, React and Next.js.',
    url: SITE_URL,
    siteName: 'Muhammad Arslan',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/profile-green-deep.jpg',
        width: 1000,
        height: 1000,
        alt: 'Muhammad Arslan, Full Stack AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Arslan | Full Stack AI Engineer & AI Automation Specialist',
    description:
      'Production AI agents, RAG assistants and automation systems, built by a full stack engineer.',
    images: ['/images/profile-green-deep.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Arslan',
  alternateName: 'M. Arslan',
  url: SITE_URL,
  image: `${SITE_URL}/images/profile-green-deep.jpg`,
  jobTitle: 'Full Stack AI Engineer',
  email: 'mailto:arslanarsal455@gmail.com',
  worksFor: {
    '@type': 'Organization',
    name: 'Qeyafa Vision AI',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Gujrat',
  },
  sameAs: [
    'https://github.com/Arslanarsal',
    'https://linkedin.com/in/m-arslan-aa21a0246',
    'https://www.upwork.com/freelancers/arslan009',
    'https://leetcode.com/arslanarsal/',
  ],
  knowsAbout: [
    'AI Agents',
    'Agentic AI',
    'Large Language Models',
    'Retrieval Augmented Generation',
    'Model Context Protocol',
    'AI Automation',
    'n8n',
    'GoHighLevel',
    'Node.js',
    'NestJS',
    'TypeScript',
    'Python',
    'React',
    'Next.js',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS',
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-background text-light font-sans antialiased">
        <Navigation />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
