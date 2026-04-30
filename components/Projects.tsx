'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
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
          <span className="text-sm font-mono text-accent">// 03 — Projects</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Production systems <br />
            <span className="text-gradient-orange">that ship</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Real products serving real users — not portfolio-only demos.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-accent/30 via-accent/0 to-info/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur" />

              <div className="relative grid lg:grid-cols-12 gap-8 glass border border-white/5 hover:border-white/10 rounded-3xl p-6 md:p-10 transition-all">
                {/* Image */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-elevated">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/20 border border-success/30 backdrop-blur">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      <span className="text-xs font-medium text-success">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-accent font-medium">
                          {project.tagline}
                        </p>
                      </div>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 w-10 h-10 rounded-xl bg-elevated border border-white/10 hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all"
                          aria-label="View live"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>

                    <p className="mt-5 text-light/70 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-5 space-y-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-light/70"
                        >
                          <Sparkles
                            size={14}
                            className="mt-1 shrink-0 text-accent"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="mt-5 px-4 py-3 rounded-xl bg-elevated border border-white/5 text-sm">
                      <span className="text-muted">Impact: </span>
                      <span className="text-light">{project.impact}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-3">
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-600 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Site
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-elevated text-light text-sm font-medium transition-all"
                    >
                      <Github size={14} />
                      Source
                    </a>
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
