'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Cloud, Zap } from 'lucide-react';
import { profile } from '@/lib/data';

const stats = [
  { label: 'Years of Experience', value: '2+', icon: Code2 },
  { label: 'LeetCode Problems', value: '700+', icon: Cpu },
  { label: 'Production SaaS Live', value: '1', icon: Cloud },
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
          <span className="text-sm font-mono text-accent">// 01 — About</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Engineering at the <br />
            <span className="text-gradient-orange">intersection of</span> backend & AI
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
              I work like a one person team — backend, AI, database, and deploy
              all done by me. No handoffs, no &quot;that&apos;s not my job&quot; when
              something breaks. My latest work is{' '}
              <span className="text-light">ChatPilot</span>, a live WhatsApp CRM
              that real businesses use today.
            </p>
            <p>
              When I am not coding for clients, I am solving algorithm problems
              — 700+ LeetCode done and joined ICPC 2025 Regional. Strong basics
              matter, even more now with AI.
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
