'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Cloud, Zap } from 'lucide-react';
import { profile } from '@/lib/data';

const stats = [
  { label: 'Years of Experience', value: '3+', icon: Code2 },
  { label: 'LeetCode Problems', value: '700+', icon: Cpu },
  { label: 'Upwork Rating', value: '5.0★', icon: Cloud },
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
            Full stack, <span className="text-gradient-orange">end to end</span> <br />
            backend · AI · Meta API · DevOps
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
              I work like a one-person team — backend, frontend, AI, database,
              Meta API, ad funnels, automation, and deploy all done by me. No
              handoffs, no &quot;that&apos;s not my job&quot; when something breaks.
              My live SaaS is <span className="text-light">ChatPilot</span>, a
              WhatsApp CRM with AI bots used by clinics and agencies today.
            </p>
            <p>
              On <span className="text-light">Upwork</span> I am a top-rated
              freelancer with a 5.0 rating — clients call me a &quot;Great Full
              Stack Developer&quot;. When I am not shipping client work, I am
              solving algorithm problems — 700+ LeetCode done and joined ICPC
              2025 Regional.
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
