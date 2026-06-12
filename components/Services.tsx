'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Server,
  Database,
  Container,
  Activity,
  Bot,
  Workflow,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { services } from '@/lib/data';

const iconMap: Record<string, any> = {
  Server,
  Database,
  Container,
  Activity,
  Bot,
  Workflow,
};

export default function Services() {
  return (
    <section id="services" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-accent">// Services</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            How I can <span className="text-gradient-orange">help you</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Backend, infrastructure, and AI work — designed, built, and shipped
            by one engineer who owns it end to end.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Server;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative h-full"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-accent/30 via-transparent to-info/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative h-full glass border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-light leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-light/70 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-4 pt-4 border-t border-white/5 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-light/80"
                      >
                        <CheckCircle2
                          size={13}
                          className="shrink-0 text-success"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-600 transition-all hover:gap-3 shadow-lg shadow-accent/20"
          >
            Start a project
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
