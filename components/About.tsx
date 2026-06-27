'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Cloud, Zap } from 'lucide-react';
import { profile } from '@/lib/data';

const stats = [
  { label: 'Years of Experience', value: '3+', icon: Code2 },
  { label: 'LeetCode Problems', value: '700+', icon: Cpu },
  { label: '2025 Regionalist', value: 'ICPC', icon: Cloud },
  { label: 'API Speed Boost', value: '40%', icon: Zap },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-accent">// About</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Full products, <span className="text-gradient-orange">built to last</span> <br />
            frontend · backend · DevOps · AI
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-light/80 text-base md:text-lg leading-relaxed"
          >
            <p>{profile.about}</p>
            <p>
              I own systems end to end — API design, databases, containers,
              deployment, and monitoring. No handoffs, no &quot;that&apos;s not my
              job&quot; when something breaks. My live SaaS is{' '}
              <span className="text-light">ChatPilot</span>, a multi-tenant AI CRM
              used by paying clients in production.
            </p>
            <p>
              I come from a strong competitive programming background — 700+
              LeetCode problems and ICPC 2025 Regional — so problem solving,
              edge cases, and performance are second nature. I care about clean,
              observable systems that stay fast and reliable as they scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all hover:-translate-y-1"
                >
                  <Icon size={20} className="text-accent mb-3" />
                  <div className="text-3xl font-bold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
