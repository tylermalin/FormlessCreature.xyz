"use client"

import { motion } from "framer-motion"

const services = [
  {
    num: "01 — Email",
    title: "Lifecycle Email System",
    description: "Welcome, drop announcement, contest cycle, post-deposit nurture, abandoned bundle, win-back, and cohort-specific sequences. Built on Klaviyo. Wired to your production data.",
  },
  {
    num: "02 — SMS",
    title: "SMS & Direct Messaging",
    description: "TCPA-compliant consent capture, contest deadline messaging, drop launch alerts, balance expiration warnings. Frequency-capped. Restraint as a feature, not an oversight.",
  },
  {
    num: "04 — Compliance",
    title: "Legal & Regulatory Infrastructure",
    description: "TCPA, CAN-SPAM, state sweepstakes law, bonus structure analysis. Documentation suitable for due diligence. Audit-ready from launch.",
  },
  {
    num: "05 — Measurement",
    title: "Attribution & Reporting",
    description: "Per-flow, per-drop, per-cohort attribution. Baseline establishment. Cohort retention curves. Monthly performance reports tied to revenue, not vanity metrics.",
  },
  {
    num: "06 — Strategy",
    title: "Diagnostic & Roadmap",
    description: "The work starts with a free audit. We diagnose the funnel, identify the highest-leverage levers in your data, and propose what to build. No build until you decide.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 relative bg-[#020202]">
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
              What we build
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            A complete retention system, shipped in one engagement.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            Every workstream below is part of the same architecture. They share a segmentation layer, 
            a measurement layer, and a compliance layer. None of them is sold as a standalone deliverable, 
            because none of them works as one.
          </p>
        </motion.div>

        {/* Services Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/30">
          {/* Featured Cell - Bonus Engine */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2 bg-background p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group"
            style={{ background: "radial-gradient(ellipse at top right, rgba(187,222,242,0.06) 0%, transparent 50%), #000" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className="text-xs font-mono text-muted-foreground tracking-wider block mb-6">
                03 — Bonus engine
              </span>
              <h3 className="text-3xl lg:text-4xl font-light tracking-tight leading-[1.1] mb-6">
                Promotional bonus architecture sized against predicted LTV.
              </h3>
              <p className="text-base lg:text-lg text-[#f4f0ff] leading-relaxed max-w-xl">
                First deposit matches. Second deposit accelerators. Sweeps graduation offers. 
                Loyalty tiers tuned to behavior, not vibes. Every bonus type instrumented and 
                measured per cohort. Subsidy ROI tracked individually so we can kill the ones 
                that do not work and double down on the ones that do.
              </p>
            </div>
            
            {/* Cohort retention curves visualization */}
            <div className="mt-8 h-32 hidden lg:block">
              <svg viewBox="0 0 600 140" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#bbdef2" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#bbdef2" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#d1aad7" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#d1aad7" stopOpacity="0"/>
                    <stop offset="60%" stopColor="#d1aad7" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#bbdef2" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
                <path d="M 20 110 Q 100 100 180 85 T 340 50 T 580 35" stroke="url(#bg1)" strokeWidth="1.5" fill="none"/>
                <path d="M 20 120 Q 100 115 180 105 T 340 90 T 580 80" stroke="url(#bg2)" strokeWidth="1" fill="none" opacity="0.6"/>
                <path d="M 20 125 Q 100 122 180 118 T 340 110 T 580 105" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
                <circle cx="80" cy="108" r="3" fill="#bbdef2"/>
                <circle cx="220" cy="78" r="3" fill="#bbdef2"/>
                <circle cx="360" cy="48" r="3" fill="#d1aad7"/>
                <circle cx="500" cy="38" r="3" fill="#d1aad7"/>
                <line x1="20" y1="130" x2="580" y2="130" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 4"/>
              </svg>
            </div>
          </motion.div>

          {/* Regular Service Cells */}
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-background p-8 lg:p-10 hover:bg-[#020202] transition-colors group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(187,222,242,0.06),rgba(209,170,215,0.03)_30%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[11px] font-mono text-muted-foreground tracking-wider block mb-4">
                  {service.num}
                </span>
                <h3 className="text-xl lg:text-[22px] font-normal tracking-tight mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
