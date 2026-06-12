'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Target,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { projects } from '@/lib/data';

type Project = (typeof projects)[number];

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <section className="relative section-padding min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/20 border border-success/30 text-xs font-medium text-success">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              {project.status}
            </span>
            <span className="text-xs font-mono text-muted">
              {project.role} · {project.year}
            </span>
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            {project.name}
          </h1>
          <p className="mt-2 text-xl text-accent font-medium">
            {project.tagline}
          </p>
          <p className="mt-4 text-light/70 text-lg leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-600 transition-colors"
              >
                <ExternalLink size={15} />
                Live Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-elevated text-light text-sm font-medium transition-all"
              >
                <Github size={15} />
                Source
              </a>
            )}
          </div>
        </motion.div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/5 bg-elevated"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </motion.div>

        {/* Body */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {/* Problem + Architecture */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Target size={18} className="text-accent" />
                The Problem
              </h2>
              <p className="mt-3 text-light/70 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Layers size={18} className="text-accent" />
                Architecture &amp; Approach
              </h2>
              <ul className="mt-4 space-y-3">
                {project.architecture.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-light/80 leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar: stack + results */}
          <div className="space-y-6">
            <div className="glass border border-white/5 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-light mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass border border-white/5 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-light mb-4">Results</h3>
              <ul className="space-y-3">
                {project.results.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2 text-sm text-light/80"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-success"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
