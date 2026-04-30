'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Code, Users, Award, ArrowUpRight } from 'lucide-react';

const items = [
  {
    src: '/images/iupc-winner.jpg',
    title: 'IUPC 2024 Winner',
    subtitle: 'Inter Universities Programming Challenge',
    description: 'Winner of IUPC 2024 with PKR 15,000 prize representing University of Gujrat.',
    icon: Trophy,
    accent: 'from-yellow-500/30 to-orange-500/20',
    type: 'Competition',
  },
  {
    src: '/images/cert-codeathon.jpg',
    title: 'CODE.A.THON 1st Position',
    subtitle: 'University of Gujrat · March 2024',
    description: 'First position in interdepartmental coding competition (SE, CS, IT).',
    icon: Award,
    accent: 'from-amber-500/30 to-yellow-500/20',
    type: 'Certificate',
  },
  {
    src: '/images/cert-techon-3rd.jpg',
    title: 'TECHON 2.0 — 3rd Position',
    subtitle: 'Tech Involvers · HackerRank',
    description: 'Third position in the TECHON 2.0 online speed programming contest.',
    icon: Award,
    accent: 'from-emerald-500/30 to-green-500/20',
    type: 'Certificate',
  },
  {
    src: '/images/icpc-coding.jpg',
    title: 'ICPC 2025 Regional',
    subtitle: 'Live Programming Contest',
    description: 'Competing live at the ICPC 2025 Regional Programming Contest.',
    icon: Code,
    accent: 'from-blue-500/30 to-cyan-500/20',
    type: 'In Action',
  },
  {
    src: '/images/icpc-stage.jpg',
    title: 'ICPC Pakistan Finals',
    subtitle: 'Asia West Top Regional',
    description: 'Group photo with national programming finalists at ICPC Pakistan.',
    icon: Users,
    accent: 'from-indigo-500/30 to-purple-500/20',
    type: 'Event',
  },
  {
    src: '/images/devathon.jpg',
    title: 'Devathon 2024',
    subtitle: 'Google Developer Groups',
    description: 'Participated in Devathon 2024 hackathon with Google Developer Groups.',
    icon: Code,
    accent: 'from-pink-500/30 to-rose-500/20',
    type: 'Event',
  },
  {
    src: '/images/taakra.jpg',
    title: 'TAAKRA 2025',
    subtitle: 'UCP — Victory or Vengeance',
    description: 'Competing at TAAKRA 2025 hosted by University of Central Punjab.',
    icon: Trophy,
    accent: 'from-orange-500/30 to-red-500/20',
    type: 'Event',
  },
  {
    src: '/images/speed-prog-team.jpg',
    title: 'Speed Programming Team',
    subtitle: 'Programming Competition Squad',
    description: 'Part of the team representing UoG in speed programming contests.',
    icon: Users,
    accent: 'from-violet-500/30 to-purple-500/20',
    type: 'Team',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative section-padding">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-accent">// 06 — In Action</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Competitions & <br />
            <span className="text-gradient-orange">certificates</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Real wins, real events, real recognition.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <div className={`absolute -inset-px bg-gradient-to-br ${item.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur`} />
                <div className="relative h-full glass border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-elevated">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    {/* Type badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-white/10 text-accent">
                        {item.type}
                      </span>
                    </div>
                    {/* Icon badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur border border-white/10 flex items-center justify-center">
                      <Icon size={14} className="text-accent" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-light leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-accent mt-1 font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-light/70 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LeetCode stats showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mt-14 glass border border-white/5 rounded-3xl p-6 md:p-10"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <Code size={14} className="text-accent" />
                <span className="text-xs font-mono text-accent">LeetCode Stats</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight">
                700+ problems solved
              </h3>
              <p className="mt-3 text-light/70">
                Active grinder of data structures and algorithms — daily
                problem solving with a 500-day streak badge, 21 achievement
                badges, and 1,326+ submissions in 2024 alone.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-light">712</div>
                  <div className="text-xs text-muted">Solved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-light">21</div>
                  <div className="text-xs text-muted">Badges</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-light">200</div>
                  <div className="text-xs text-muted">Max Streak</div>
                </div>
              </div>
              <a
                href="https://leetcode.com/u/Arslanarsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-400 font-medium"
              >
                View profile <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-elevated">
              <Image
                src="/images/leetcode-stats.png"
                alt="LeetCode stats"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
