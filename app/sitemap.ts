import type { MetadataRoute } from 'next';
import { projects } from '@/lib/data';

const SITE_URL = 'https://arslan-dev-zeta.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/skills', '/projects', '/services', '/achievements', '/contact'];

  const staticPages = pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
