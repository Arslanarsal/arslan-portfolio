'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/data';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    description: 'Best for project inquiries',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: Phone,
    description: 'WhatsApp friendly',
  },
  {
    label: 'LinkedIn',
    value: 'm-arslan-aa21a0246',
    href: profile.linkedin,
    icon: Linkedin,
    description: 'Connect professionally',
  },
  {
    label: 'GitHub',
    value: 'Arslanarsal',
    href: profile.github,
    icon: Github,
    description: 'Code and projects',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-mono text-accent">// Contact</span>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Let&apos;s build <br />
            <span className="text-gradient-orange">something serious.</span>
          </h2>
          <p className="mt-6 text-light/70 text-lg">
            Open to backend, AI agent, and full-stack roles. Available for
            remote, relocation, or contract work — worldwide.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group glass border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-muted uppercase tracking-wider">
                        {c.label}
                      </div>
                      <div className="font-semibold text-light mt-0.5 break-all">
                        {c.value}
                      </div>
                      <div className="text-xs text-muted mt-1">
                        {c.description}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid sm:grid-cols-2 gap-4"
        >
          <div className="glass border border-white/5 rounded-2xl p-5 flex items-center gap-3">
            <MapPin size={18} className="text-accent shrink-0" />
            <div>
              <div className="text-xs text-muted">Based in</div>
              <div className="font-medium text-light">{profile.location}</div>
            </div>
          </div>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="glass border border-white/5 rounded-2xl p-5 flex items-center gap-3 hover:border-accent/30 transition-colors"
          >
            <Globe size={18} className="text-accent shrink-0" />
            <div>
              <div className="text-xs text-muted">Live Project</div>
              <div className="font-medium text-light">chat-pilot.dev</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
