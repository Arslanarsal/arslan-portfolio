'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, MapPin, Server } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-info/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center w-full py-12">
        {/* Text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/20 mb-6"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-75" />
              <span className="relative rounded-full bg-success w-2 h-2" />
            </span>
            <span className="text-xs font-medium text-light/80">
              3+ years experience · Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <br className="hidden md:block" />
            <span className="text-gradient-orange">M. Arslan</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-light/80 font-medium"
          >
            Full Stack Developer · Backend · DevOps · AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-muted max-w-2xl leading-relaxed"
          >
            I build full products end to end — modern web apps with React and
            Next.js, scalable APIs with Node.js and NestJS, backed by PostgreSQL,
            MongoDB, and Redis. I containerize with Docker, deploy on Kubernetes,
            run CI/CD and monitoring, and build AI agents that run in production.
            3+ years shipping real systems for clients across Pakistan, the UAE,
            Europe, and the US.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {[
              'React',
              'Next.js',
              'Node.js',
              'NestJS',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'Kubernetes',
              'AI Agents',
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-elevated/70 border border-white/10 text-light/80"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-600 transition-all hover:gap-3 shadow-lg shadow-accent/20 hover:shadow-accent/40"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-elevated/50 hover:bg-elevated text-light font-semibold transition-all"
            >
              <Mail size={18} />
              Hire Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/40 via-accent/20 to-info/20 rounded-3xl blur-2xl opacity-60 animate-pulse-slow" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden glass-strong border border-white/10 shadow-2xl">
              <Image
                src="/images/profile-white.jpg"
                alt="Muhammad Arslan — Backend Engineer"
                fill
                priority
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover"
                style={{ objectPosition: '50% 38%' }}
              />
            </div>

            {/* Floating accent badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 glass-strong border border-accent/30 px-4 py-3 rounded-2xl flex items-center gap-2 shadow-2xl"
            >
              <Server size={18} className="text-accent" />
              <div>
                <div className="text-xs text-muted">ChatPilot</div>
                <div className="text-sm font-semibold">Live SaaS · In Production</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
