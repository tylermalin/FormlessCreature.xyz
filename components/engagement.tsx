"use client"

import { motion } from "framer-motion"

const patterns = [
  {
    tag: "Pattern 01",
    title: "Diagnostic / Audit",
    subtitle: "Where most engagements begin",
    description:
      "A scoped review of your current state, the highest-leverage opportunities in your data or operations, and what an engagement would actually build. Some are free (lifecycle audits, AI strategy intros). Others are fixed-fee deliverables (governance audits, EU AI Act Article 53 reviews). The diagnostic decides whether we move forward, and what shape that takes.",
    applies: "Used across every practice.",
    featured: false,
  },
  {
    tag: "Pattern 02",
    title: "Fixed-Fee Deliverable",
    subtitle: "Strategy, governance, defined artifacts",
    description:
      "When the output is a concrete artifact. We scope the work, quote a number, deliver against it. No retainer creep, no surprise scope expansion. Examples include AI strategy roadmaps, AI governance documentation, brand identity systems, and data architecture audits.",
    applies: "AI Strategy & Roadmapping, AI Governance & Compliance, Brand & Design discovery, Data & Analytics audits.",
    featured: false,
  },
  {
    tag: "Pattern 03",
    title: "Project Build + Retainer",
    subtitle: "Build and operate",
    description:
      "For systems we build and then operate alongside your team, or hand off with ongoing oversight. A fixed build fee, then a monthly retainer for continuous partnership. Quarterly scope reviews, no auto-renewing lock-in, transparent on what each month buys.",
    applies: "Lifecycle Marketing infrastructure, Custom AI Development, Workflow Automation, Custom Internal Tools, ongoing Paid Acquisition.",
    featured: true,
  },
  {
    tag: "Pattern 04",
    title: "Project Build + Performance Share",
    subtitle: "Aligned compensation tied to outcomes",
    description:
      "Where attribution is clean and outcomes are measurable, we will build at cost and share in the lift over a defined measurement window. Selectively offered. We do not propose this for work where the outcome cannot be cleanly measured, because tying compensation to a number nobody trusts is bad for both sides.",
    applies: "Lifecycle Marketing, Paid Acquisition, select CRO engagements.",
    featured: false,
  },
]

export function Engagement() {
  return (
    <section id="engagement" className="py-24 lg:py-36 relative bg-[#020202]">
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
              Engagement
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            How engagements are structured.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            Different work calls for different structures. We use four patterns across the sixteen service lines, and we tell you which one fits at the engagement letter, not after the contract is signed. Every quote is explicit. No project management tax. No discovery phase billed at full rate before scope is locked.
          </p>
        </motion.div>

        {/* Pattern Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {patterns.map((pattern, i) => (
            <motion.div
              key={pattern.title}
              className={`rounded-2xl p-10 lg:p-12 flex flex-col gap-5 relative overflow-hidden border ${
                pattern.featured
                  ? "border-[#d1aad7]/30"
                  : "border-border/30"
              }`}
              style={
                pattern.featured
                  ? {
                      background:
                        "radial-gradient(ellipse at top left, rgba(209,170,215,0.08) 0%, transparent 60%), #020202",
                    }
                  : { background: "#020202" }
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span
                className={`inline-flex self-start text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                  pattern.featured
                    ? "bg-gradient-to-r from-[#bbdef2] via-[#d1aad7] to-[#f4f0ff] text-background border-transparent"
                    : "bg-foreground/5 text-muted-foreground border-border/30"
                }`}
              >
                {pattern.tag}
              </span>

              <div>
                <h3 className="text-2xl lg:text-[28px] font-light tracking-tight leading-[1.15]">
                  {pattern.title}
                </h3>
                <p className="text-sm text-muted-foreground italic mt-2">
                  {pattern.subtitle}
                </p>
              </div>

              <p className="text-[15px] text-[#e5e5e5] leading-relaxed">
                {pattern.description}
              </p>

              <div className="text-xs font-mono text-muted-foreground tracking-wide border-t border-border/30 pt-5 mt-auto">
                <span className="uppercase opacity-70">Where it fits — </span>
                <span className="normal-case opacity-90">{pattern.applies}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing transparency note */}
        <motion.div
          className="mt-10 p-6 lg:p-7 bg-[#020202] border-l-2 border-[#bbdef2] rounded-r"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-[#e5e5e5] leading-relaxed">
            <strong className="text-foreground font-medium">A note on pricing.</strong> Pricing scales with scope, not with how much we can extract. Quotes are explicit and itemized. If a piece of work goes to a specialist on our bench, you see that in the engagement letter. If it runs through us directly, that is also clear. Hybrid structures across the four patterns are common; we are happy to design one that fits how you actually buy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
