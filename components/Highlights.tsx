'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Server,
  Zap,
  ArrowRight,
} from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '3+', icon: Code2 },
  { label: 'LeetCode Problems', value: '700+', icon: Cpu },
  { label: 'ChatPilot SaaS', value: 'Live', icon: Server },
  { label: 'API Speed Boost', value: '40%', icon: Zap },
];

export default function Highlights() {
  return (
    <section className="relative section-padding pt-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all hover:-translate-y-1"
              >
                <Icon size={20} className="text-accent mb-3" />
                <div className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick intro + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 glass border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Backend systems that are{' '}
              <span className="text-gradient-orange">fast, observable, and built to last</span>
            </h2>
            <p className="mt-3 text-light/70">
              From API design and databases to Docker, Kubernetes, CI/CD, and AI
              agents — I build and run the whole thing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-600 transition-all hover:gap-3"
            >
              View Work
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-elevated/50 hover:bg-elevated text-light font-semibold transition-all"
            >
              Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
