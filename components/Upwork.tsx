'use client';

import { motion } from 'framer-motion';
import {
  Star,
  CheckCircle2,
  MapPin,
  Briefcase,
  ArrowUpRight,
  Quote,
  ShieldCheck,
} from 'lucide-react';
import { upworkAchievement, profile } from '@/lib/data';

export default function Upwork() {
  const a = upworkAchievement;

  return (
    <section id="upwork" className="relative section-padding">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-xs font-mono text-emerald-400">
              // 07 — Verified on Upwork
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Top-Rated Full Stack <br />
            <span className="text-gradient-orange">freelancer · 5.0★</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Verified work and reviews from real Upwork clients.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Main Job Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="relative h-full glass border border-white/10 rounded-3xl p-6 md:p-8 hover:border-emerald-500/30 transition-all">
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <Briefcase size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-400">
                      Upwork · Verified Job
                    </div>
                    <div className="text-xs text-muted">{a.period}</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-elevated border border-white/10 text-light/80 font-mono">
                    {a.hours}
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-elevated border border-white/10 text-light/80 font-mono">
                    {a.rate}
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                    {a.earned}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-light leading-tight">
                {a.title}
              </h3>

              {/* Stars */}
              <div className="mt-5 flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-light">
                  {a.rating.toFixed(1)}
                </span>
                <span className="text-sm text-muted">
                  · Client&apos;s review
                </span>
              </div>

              <div className="mt-3 flex items-start gap-3 p-4 rounded-2xl bg-elevated/60 border border-white/5">
                <Quote size={20} className="shrink-0 text-emerald-400 mt-0.5" />
                <p className="text-base md:text-lg font-semibold text-light italic">
                  &ldquo;{a.clientReview}&rdquo;
                </p>
              </div>

              {/* Freelancer review */}
              <div className="mt-5">
                <div className="text-xs font-mono text-muted mb-2">
                  My review for the client
                </div>
                <p className="text-sm text-light/80 leading-relaxed">
                  &ldquo;{a.freelancerReview}&rdquo;
                </p>
              </div>

              {/* Skills tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'WhatsApp Business API',
                  'Meta Cloud API',
                  'Embedded Signup',
                  'Canned Responses',
                  'Automation',
                  'Full Stack',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-elevated border border-white/10 text-light/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-sm font-semibold transition-all"
              >
                View Full Upwork Profile
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Client Info Side Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 space-y-4"
          >
            {/* About the client */}
            <div className="glass border border-white/5 rounded-2xl p-6">
              <div className="text-xs font-mono text-muted mb-3">
                About the client
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-light">
                  {a.client.rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted">
                  · {a.client.reviews} reviews
                </span>
              </div>

              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-light/80">{a.client.country}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  <span className="text-light/80">{a.client.spent}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Briefcase
                    size={14}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="text-light/80">{a.client.hires}</span>
                </div>
                <div className="text-xs text-muted pt-2 border-t border-white/5">
                  {a.client.member}
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent font-medium">
                <ShieldCheck size={12} />
                {a.client.type}
              </div>
            </div>

            {/* Quick stats */}
            <div className="glass border border-white/5 rounded-2xl p-6">
              <div className="text-xs font-mono text-muted mb-4">
                Why hire me
              </div>
              <ul className="space-y-3">
                {[
                  '5.0 client rating',
                  'Full Stack — backend, AI, frontend, DevOps',
                  'Meta API & WhatsApp Business expert',
                  'Repeat clients in UAE, Europe, US',
                  'Ship live, not slides',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-light/80"
                  >
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${profile.email}`}
                className="mt-5 inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-accent-600 transition-colors"
              >
                Hire Me Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
