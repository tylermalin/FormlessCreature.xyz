"use client"

import { motion } from "framer-motion"

const pillars = [
  {
    num: "01",
    title: "Infrastructure over campaigns",
    description: "A campaign is a single send. An infrastructure is the engine that decides which user gets which message on which channel with which offer. We build the second one. The first one falls out of it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-background">
        <path d="M3 12h4l3-9 4 18 3-9h4"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Measurement before margin",
    description: "We define the baseline before the work begins, instrument attribution into the system from day one, and report against it monthly. If we cannot prove the lift, we did not produce it. That principle is structural, not aspirational.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-background">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Compliance as a feature",
    description: "TCPA, CAN-SPAM, state sweepstakes law, and promotional bonus structures are not adjacent concerns. They are part of the build. We engineer them in from the consent flow forward, not as a legal review at the end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-background">
        <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z"/>
      </svg>
    ),
  },
]

export function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-muted-foreground" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              The approach
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            We are not a creative agency. We are the operating system underneath one.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            Most retention vendors sell campaigns. We build the systems that make campaigns work. 
            The decision layer underneath email and SMS, the bonus engine that targets specific behavior changes, 
            the attribution layer that proves it. Three principles drive everything we ship.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="bg-[#020202] border border-border/30 rounded-2xl p-8 lg:p-10 hover:-translate-y-1 hover:border-border/50 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(187,222,242,0.06),rgba(209,170,215,0.03)_30%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#bbdef2] via-[#d1aad7] to-[#f4f0ff] flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <span className="text-xs font-mono text-muted-foreground tracking-wider mb-8 block">
                  {pillar.num}
                </span>
                <h3 className="text-xl lg:text-2xl font-normal tracking-tight mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
