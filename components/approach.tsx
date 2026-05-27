"use client"

import { motion } from "framer-motion"

const pillars = [
  {
    num: "01",
    title: "Partner-level accountability",
    description: "Every engagement runs through the two of us. When growth, AI, and automation are owned by the same partners, decisions get made in hours instead of weeks, attribution is coherent across channels, and vendor finger-pointing stops being a project risk.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-background">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="3" r="1.5"/>
        <circle cx="21" cy="12" r="1.5"/>
        <circle cx="12" cy="21" r="1.5"/>
        <circle cx="3" cy="12" r="1.5"/>
        <path d="M12 6v3M15 12h3M12 15v3M6 12h3"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Disciplines that actually compound",
    description: "Paid acquisition without lifecycle is leaky. AI without growth strategy is a toy. Automation without data infrastructure is fragile. The compound returns come from disciplines that reinforce each other, not from spending more on any single channel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-background">
        <path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z"/>
        <path d="M3 12h18M12 3v18"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Partners who have done the work",
    description: "You are not hiring a brand. You are hiring partners who have built and sold an Inc. 500 digital agency with clients like Whirlpool, Toyota, Microsoft, and Dreamworks, worked regulatory enforcement at the CFTC, and ship infrastructure across every layer of the stack we now sell.",
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
            Five vendors stitched together is a project plan. We are a team.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            Most growth problems are not capability problems. They are coordination problems. A paid acquisition agency does not talk to your lifecycle vendor. Your AI consultant does not talk to your CRO partner. Your data team is operating downstream of everyone. Decisions get made in vacuums, attribution is broken, and the compound effect of integrated execution never materializes. Three principles drive how we run engagements differently.
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
