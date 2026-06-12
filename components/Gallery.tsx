'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Code, Users, ArrowUpRight, Calendar, Mic } from 'lucide-react';

// Top section: professional / individual / on-stage moments
const featured = [
  {
    src: '/images/devathon.jpg',
    title: 'Devathon 2024',
    subtitle: 'Hackathon at Devsinc',
    description:
      'Took part in Devathon 2024, a major hackathon hosted at Devsinc with top tech companies.',
    icon: Code,
    accent: 'from-cyan-500/30 to-sky-500/20',
    type: 'Hackathon',
  },
  {
    src: '/images/icpc-coding.jpg',
    title: 'ICPC Live Coding',
    subtitle: 'Solving Problems on Stage',
    description:
      'Live at the ICPC contest, solving algorithm problems with my team under tight time pressure.',
    icon: Code,
    accent: 'from-blue-500/30 to-cyan-500/20',
    type: 'Live',
  },
  {
    src: '/images/speed-prog-podium.jpg',
    title: 'Speed Programming',
    subtitle: 'On Stage at the Podium',
    description:
      'Speaking and presenting at the Speed Programming Competition.',
    icon: Mic,
    accent: 'from-emerald-500/30 to-green-500/20',
    type: 'Stage',
  },
  {
    src: '/images/taakra.jpg',
    title: 'TAAKRA 2025',
    subtitle: 'University of Central Punjab',
    description:
      'Joined TAAKRA 2025 — a coding event at UCP with the theme Victory or Vengeance.',
    icon: Trophy,
    accent: 'from-teal-500/30 to-emerald-500/20',
    type: 'Event',
  },
];

// Bottom section: smaller team / group moments
const teamMoments = [
  {
    src: '/images/icpc-stage.jpg',
    title: 'ICPC Pakistan Finals',
    subtitle: 'National Group Photo',
    icon: Users,
    accent: 'from-indigo-500/30 to-purple-500/20',
  },
  {
    src: '/images/speed-prog-team.jpg',
    title: 'Programming Team',
    subtitle: 'My Coding Squad',
    icon: Users,
    accent: 'from-violet-500/30 to-purple-500/20',
  },
  {
    src: '/images/event-group.jpg',
    title: 'Tech Event Panel',
    subtitle: 'Mentors and Judges',
    icon: Calendar,
    accent: 'from-cyan-500/30 to-blue-500/20',
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
          <span className="text-sm font-mono text-accent">// 08 — In Action</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Events, contests, <br />
            <span className="text-gradient-orange">and team work</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Real moments from the events, hackathons, and contests I have been
            part of.
          </p>
        </motion.div>

        {/* Featured grid — professional, individual, on-stage */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((item, i) => {
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
                <div
                  className={`absolute -inset-px bg-gradient-to-br ${item.accent} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur`}
                />
                <div className="relative h-full glass border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden bg-elevated">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-white/10 text-accent">
                        {item.type}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur border border-white/10 flex items-center justify-center">
                      <Icon size={14} className="text-accent" />
                    </div>
                  </div>
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

        {/* LeetCode Stats */}
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
                <span className="text-xs font-mono text-accent">LeetCode</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight">
                700+ problems solved
              </h3>
              <p className="mt-3 text-light/70">
                I solve LeetCode problems regularly. 712 solved so far, 21
                badges earned, and a 200 day streak. Strong fundamentals matter
                — even more in the AI era.
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
                  <div className="text-xs text-muted">Day Streak</div>
                </div>
              </div>
              <a
                href="https://leetcode.com/u/Arslanarsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-400 font-medium"
              >
                See full profile <ArrowUpRight size={14} />
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

        {/* Team moments — smaller, secondary grid at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users size={18} className="text-muted" />
            <h3 className="text-sm font-mono text-muted uppercase tracking-wider">
              Team & Group Moments
            </h3>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamMoments.map((item, i) => {
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
                  <div className="relative h-full glass border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all">
                    <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                      <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-background/80 backdrop-blur border border-white/10 flex items-center justify-center">
                        <Icon size={12} className="text-muted" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-sm text-light leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
