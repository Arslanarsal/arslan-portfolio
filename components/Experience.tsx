'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { experience, education } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-mono text-accent">// 05 — Journey</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Experience & <br />
            <span className="text-gradient-orange">education</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-10">
          {/* Work Experience Timeline */}
          <div className="lg:col-span-7">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-8">
              <Briefcase size={18} className="text-accent" />
              Work Experience
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.role + exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-14"
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-2 top-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center bg-background"
                      style={{
                        borderColor: exp.color,
                        boxShadow: `0 0 20px ${exp.color}40`,
                      }}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: exp.color }}
                      />
                    </div>

                    <div className="glass border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-lg font-bold">{exp.role}</h4>
                          <div className="text-accent font-medium">
                            {exp.company}{' '}
                            <span className="text-muted font-normal">
                              · {exp.location}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-elevated border border-white/5 text-muted">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-light/70 mt-3 mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-light/80"
                          >
                            <ChevronRight
                              size={14}
                              className="mt-1 shrink-0 text-accent"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-8">
              <GraduationCap size={18} className="text-accent" />
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all"
                >
                  <h4 className="font-bold text-light">{edu.degree}</h4>
                  <p className="text-accent text-sm mt-1">{edu.school}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted">
                    <span>{edu.location}</span>
                    <span className="font-mono">{edu.period}</span>
                  </div>
                </motion.div>
              ))}

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="glass border border-white/5 rounded-2xl p-6"
              >
                <h4 className="font-bold text-light mb-3">Languages</h4>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="font-semibold text-light">English</div>
                    <div className="text-xs text-muted">Professional</div>
                  </div>
                  <div>
                    <div className="font-semibold text-light">Urdu</div>
                    <div className="text-xs text-muted">Native</div>
                  </div>
                  <div>
                    <div className="font-semibold text-light">Punjabi</div>
                    <div className="text-xs text-muted">Native</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
