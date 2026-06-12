'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Bot,
  MessageCircle,
  Workflow,
  Network,
  UserPlus,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Target,
} from 'lucide-react';
import { aiCapabilities } from '@/lib/data';

const iconMap: Record<string, any> = {
  Bot,
  MessageCircle,
  Workflow,
  Network,
  UserPlus,
  Sparkles,
  TrendingUp,
  Target,
};

const platforms = [
  { name: 'Node.js', tag: 'Core' },
  { name: 'NestJS', tag: 'APIs' },
  { name: 'Express.js', tag: 'APIs' },
  { name: 'PostgreSQL', tag: 'Live' },
  { name: 'MongoDB', tag: 'Live' },
  { name: 'Redis', tag: 'Cache' },
  { name: 'Docker', tag: 'Containers' },
  { name: 'Kubernetes', tag: 'Orchestration' },
  { name: 'GitHub Actions', tag: 'CI/CD' },
  { name: 'Prometheus', tag: 'Metrics' },
  { name: 'Grafana', tag: 'Dashboards' },
  { name: 'DigitalOcean', tag: 'Cloud' },
  { name: 'OpenAI GPT-4', tag: 'Production' },
  { name: 'Anthropic Claude', tag: 'Production' },
  { name: 'Claude Code MCP', tag: 'Custom' },
  { name: 'n8n Self-Hosted', tag: 'Docker' },
];

export default function AIAutomation() {
  return (
    <section
      id="ai"
      className="relative section-padding overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-mono text-accent">// AI &amp; Automation</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            <span className="text-gradient-orange">AI agents</span> <br />
            wired into real <br />
            backend systems.
          </h2>

          <p className="mt-6 text-lg text-light/70 max-w-2xl">
            I build the AI layer that sits on top of solid backends — agents,
            LLM pipelines, custom MCP servers, and workflows that call real
            tools, take actions, and run reliably in production.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiCapabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? Bot;
            return (
              <motion.div
                key={cap.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-accent/40 via-transparent to-info/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative h-full glass border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-muted">
                        {cap.category}
                      </span>
                      <h3 className="font-bold text-light leading-tight">
                        {cap.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-light/70 leading-relaxed mb-4">
                    {cap.description}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-white/5">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-light/80"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0 text-success"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Platforms Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 glass border border-white/5 rounded-3xl p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Stack &amp; Tooling
              </h3>
              <p className="text-sm text-muted mt-1">
                The backend, DevOps, and AI tools I run in production
              </p>
            </div>
            <span className="text-xs font-mono text-accent">
              {platforms.length} active
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-elevated border border-white/5 hover:border-accent/30 transition-colors"
              >
                <span className="text-sm font-medium text-light">{p.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-success font-mono">
                  {p.tag}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-600 transition-colors shadow-lg shadow-accent/20"
          >
            <Sparkles size={18} />
            Build an AI System With Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
