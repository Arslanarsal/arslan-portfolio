'use client';

import { motion } from 'framer-motion';
import { Trophy, Code2, Rocket, Zap, Brain, Target } from 'lucide-react';
import { achievements } from '@/lib/data';

const iconMap: Record<string, any> = {
  Trophy,
  Code2,
  Rocket,
  Zap,
  Brain,
  Target,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-accent">// 06 — Achievements</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Wins worth <br />
            <span className="text-gradient-orange">talking about</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Hard numbers, real shipped products, and competitive milestones.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] ?? Trophy;
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative h-full"
              >
                <div className={`absolute -inset-px bg-gradient-to-br ${ach.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur`} />
                <div className="relative h-full glass border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-all hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.color} border border-white/10 flex items-center justify-center`}>
                      <Icon size={20} className="text-light" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-gradient-orange">
                      {ach.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-light leading-tight">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-accent mt-1 font-medium">
                    {ach.subtitle}
                  </p>
                  <p className="text-sm text-light/70 mt-3 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
