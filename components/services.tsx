"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const practices = [
  {
    badge: "Practice 01",
    name: "Growth Consulting",
    tagline: "Strategic and operational growth work for businesses with audience and ambition. Where most engagements begin.",
    lines: [
      { name: "Lifecycle Marketing", desc: "Email, SMS, retention infrastructure, bonus engines, attribution." },
      { name: "Paid Acquisition", desc: "Ads strategy and execution, CRM, performance marketing." },
      { name: "Conversion Optimization", desc: "CRO, redesign, replatform. Surface-level fixes through structural work." },
      { name: "Brand & Design", desc: "Branding, creative direction, design systems." },
      { name: "Content & Creative", desc: "Content strategy and production, UGC, influencer." },
      { name: "Data & Analytics", desc: "Data science, attribution architecture, reporting infrastructure." },
    ],
  },
  {
    badge: "Practice 02",
    name: "AI Integration",
    tagline: "Bringing AI capabilities into operations and products. Where the legal-engineering background pays off.",
    lines: [
      { name: "AI Strategy & Roadmapping", desc: "Diagnostic, sequencing, ROI, risk. Most companies have a sequencing problem, not an AI problem." },
      { name: "Custom AI Development", desc: "Bespoke tools, agents, RAG systems, decision-support models." },
      { name: "AI Governance & Compliance", desc: "EU AI Act Article 53, CSRD alignment, AICo2 methodology, internal policy." },
      { name: "AI Product Enablement", desc: "Embedding LLM and ML capabilities into existing products as features." },
      { name: "AI Operations", desc: "Team enablement, prompt libraries, internal playbooks, change management." },
    ],
  },
  {
    badge: "Practice 03",
    name: "Automation",
    tagline: "Workflow and infrastructure automation. The plumbing layer that makes everything else faster.",
    lines: [
      { name: "Workflow Automation", desc: "Internal process automation. Zapier, Make, n8n, custom integrations." },
      { name: "Custom Internal Tools", desc: "Bespoke applications for operations, sales, finance, customer support." },
      { name: "API Integration & Orchestration", desc: "Connecting disparate systems via APIs. Middleware that lets tools talk to each other." },
      { name: "Data Infrastructure", desc: "ETL, warehousing, pipelines, reporting infrastructure that actually works." },
      { name: "Agent-Based Process Automation", desc: "AI agents running automated workflows. The intersection of AI Integration and Automation." },
    ],
  },
]

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="practices" className="py-24 lg:py-36 relative bg-[#020202]">
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
              Three practices
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            What we do, organized into three practices and sixteen service lines.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            Every engagement runs through the two of us. Practices reinforce each other so the disciplines compound instead of operating in silos. Lead with whichever service line you need today. The others are available when you do.
          </p>
        </motion.div>

        {/* Practices Grid */}
        <div
          className="grid lg:grid-cols-3 gap-6"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {practices.map((practice, i) => {
            const isFeatured = i === activeIndex
            return (
              <motion.div
                key={practice.name}
                onMouseEnter={() => setActiveIndex(i)}
                className="bg-[#020202] rounded-2xl p-10 flex flex-col gap-6 relative overflow-hidden group border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Shared layout-animated highlight — slides between cards */}
                {isFeatured && (
                  <motion.div
                    layoutId="practice-highlight"
                    aria-hidden="true"
                    className="absolute pointer-events-none rounded-2xl border border-[#bbdef2]/25"
                    style={{
                      inset: "-1px",
                      background:
                        "radial-gradient(ellipse at top left, rgba(187,222,242,0.08) 0%, transparent 60%)",
                    }}
                    transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                  />
                )}

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <span
                      className={`inline-flex self-start text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border transition-colors duration-300 ${
                        isFeatured
                          ? "bg-gradient-to-r from-[#bbdef2] via-[#d1aad7] to-[#f4f0ff] text-background border-transparent font-medium"
                          : "bg-foreground/5 text-muted-foreground border-border/30"
                      }`}
                    >
                      {practice.badge}
                    </span>
                  <h3 className="text-2xl lg:text-[28px] font-light tracking-tight leading-[1.1]">
                    {practice.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {practice.tagline}
                  </p>
                </div>

                <div className="flex flex-col mt-2">
                  {practice.lines.map((line, j) => (
                    <div
                      key={line.name}
                      className={`py-4 border-t border-border/20 ${
                        j === practice.lines.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <div className="text-[15px] font-normal text-foreground tracking-tight mb-1">
                        {line.name}
                      </div>
                      <div className="text-[13px] leading-snug text-muted-foreground">
                        {line.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
