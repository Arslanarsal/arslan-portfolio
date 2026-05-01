'use client';

import { motion } from 'framer-motion';
import {
  Server,
  Brain,
  Database,
  Cloud,
  Activity,
  Workflow,
  Shield,
  Wrench,
  Layers,
  TrendingUp,
} from 'lucide-react';
import { skills } from '@/lib/data';

const categoryIcons: Record<string, any> = {
  'Full Stack': Layers,
  'Backend & APIs': Server,
  'AI & Agents': Brain,
  'Meta API & Ads': TrendingUp,
  Automation: Workflow,
  'Data & Funnels': Database,
  'DevOps & Cloud': Cloud,
  'Monitoring & QA': Activity,
  // Legacy fallbacks
  Backend: Server,
  Databases: Database,
  Monitoring: Activity,
  'API & Security': Shield,
  Tools: Wrench,
};

export default function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-accent">// 02 — Skills</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            The toolkit I use to <br />
            <span className="text-gradient-orange">ship real systems</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Battle-tested in production — not just on paper.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {entries.map(([category, items], i) => {
            const Icon = categoryIcons[category] ?? Server;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative h-full glass border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-light text-sm">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-md bg-elevated border border-white/5 text-light/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
