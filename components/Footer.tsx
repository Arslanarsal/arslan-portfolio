'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center font-bold text-white">
            MA
          </div>
          <div>
            <div className="font-semibold text-light">M. Arslan</div>
            <div className="text-xs text-muted">
              Backend Engineer · DevOps & AI · Pakistan
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <div className="text-xs text-muted text-center md:text-right">
          <div>
            © {new Date().getFullYear()} M. Arslan. All rights reserved.
          </div>
          <div className="mt-1 inline-flex items-center gap-1">
            Built with <Heart size={12} className="text-accent fill-accent" /> using Next.js & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
