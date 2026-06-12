'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-accent">// Case Studies</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Production systems <br />
            <span className="text-gradient-orange">that ship</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Real backend and AI systems — problem, architecture, and results.
          </p>
        </motion.div>

        <div
          className={
            projects.length === 1
              ? 'mt-14 max-w-md mx-auto'
              : 'mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          }
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-accent/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />

              <div className="relative flex flex-col h-full glass border border-white/5 hover:border-white/10 rounded-3xl overflow-hidden transition-all">
                {/* Image */}
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/20 border border-success/30 backdrop-blur">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      <span className="text-xs font-medium text-success">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-accent text-sm font-medium">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-sm text-light/70 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-light hover:text-accent transition-colors"
                    >
                      Case study
                      <ArrowUpRight size={15} />
                    </Link>
                    <div className="flex items-center gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-elevated border border-white/10 hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all"
                          aria-label="Live site"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-elevated border border-white/10 hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all"
                          aria-label="Source"
                        >
                          <Github size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
