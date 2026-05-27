"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const options = [
  {
    tag: "Option A — Comprehensive",
    title: "Build + Monthly Retainer",
    price: "$20K",
    priceDetail: "+ $6K/mo",
    priceUnit: "Total $92,000 over 12 months",
    items: [
      "Build of email, SMS, bonus engine, and measurement layer",
      "Ongoing flow optimization and A/B testing",
      "One new lifecycle flow added per quarter",
      "Monthly performance reporting and quarterly strategic review",
      "Compliance updates and attribution dashboard maintenance",
      "Klaviyo and SMS platform pass-through up to $500/mo included",
    ],
    bestFor: "Best if you want predictable monthly spend, continuous partnership, and quarterly expansion baked into the engagement.",
    featured: false,
  },
  {
    tag: "Option B — Performance",
    title: "Build + Commission on Lift",
    price: "$20K",
    priceDetail: "+ 20% of lift",
    priceUnit: "Capped at $250K. No floor. 12-month measurement.",
    items: [
      "Build of email, SMS, bonus engine, and measurement layer",
      "Hand-off at Week 8 with full documentation",
      "90 days of post-launch support included",
      "Monthly attribution reports for the 12-month measurement window",
      "Performance share measured against 90-day pre-engagement baseline",
      "Carve-outs for new product launches, IRL activations, single deposits over $5K",
    ],
    bestFor: "Best if you have internal capacity to operate the system post-launch and want our compensation aligned with actual results.",
    featured: true,
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
            Two paths forward. Same build. Pick the path that fits.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            Both options start with the same $20,000 upfront fee that covers the 4-week build at cost. 
            From there, choose: continuous partnership at a fixed monthly rate, or aligned compensation tied to actual lift. 
            Both are real choices.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {options.map((option, i) => (
            <motion.div
              key={option.title}
              className={`rounded-2xl p-10 lg:p-12 flex flex-col gap-6 relative border ${
                option.featured 
                  ? "border-[#d1aad7]/30" 
                  : "border-border/30"
              }`}
              style={option.featured ? { 
                background: "radial-gradient(ellipse at top left, rgba(209,170,215,0.08) 0%, transparent 60%), #020202" 
              } : { background: "#020202" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className={`inline-flex self-start text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                option.featured 
                  ? "bg-gradient-to-r from-[#bbdef2] via-[#d1aad7] to-[#f4f0ff] text-background border-transparent" 
                  : "bg-foreground/5 text-muted-foreground border-border/30"
              }`}>
                {option.tag}
              </span>
              
              <h3 className="text-2xl lg:text-[28px] font-light tracking-tight">{option.title}</h3>
              
              <div>
                <div className="text-4xl font-light tracking-tight">
                  {option.price} <span className="text-muted-foreground text-[28px]">{option.priceDetail}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{option.priceUnit}</div>
              </div>
              
              <ul className="space-y-3 mt-2">
                {option.items.map((item, j) => (
                  <li key={j} className="text-sm text-[#e5e5e5] leading-snug pl-7 relative">
                    <span className="absolute left-0 top-[7px] w-3.5 h-2 border-l-[1.5px] border-b-[1.5px] border-[#bbdef2] rotate-[-45deg]" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="text-sm text-muted-foreground italic border-t border-border/30 pt-5 mt-auto">
                {option.bestFor}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div 
          className="mt-10 p-6 lg:p-7 bg-[#020202] border-l-2 border-[#bbdef2] rounded-r"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-[#e5e5e5] leading-relaxed">
            <strong className="text-foreground font-medium">A note on the honest math.</strong> Option B is materially cheaper for clients in every realistic performance scenario. Option A is structurally better for us in most realistic outcomes. We offer both because the right structure depends on what you need, not on what maximizes our compensation. If neither lands cleanly, we are open to negotiating a hybrid.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
