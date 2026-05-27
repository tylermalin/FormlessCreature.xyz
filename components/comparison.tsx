"use client"

import { motion } from "framer-motion"

const comparisonData = {
  traditional: {
    title: "Traditional Klaviyo agency",
    subtitle: "Mid-tier retainer model",
    items: [
      "Account manager focused on campaign deliverables",
      "Generic SOPs adapted from prior ecommerce clients",
      "Static flow templates with limited A/B testing",
      "Reports vanity metrics (opens, CTR) over revenue",
      "$4,500-$7,500 monthly retainer, paid regardless of lift",
      "Performance plateaus after initial setup",
    ],
  },
  formless: {
    title: "Our model",
    subtitle: "Infrastructure build with optional ongoing partnership",
    items: [
      "Founder-operator with lifecycle and legal-engineering background",
      "Custom architecture built around your data and your funnel",
      "Bonus engine and measurement layer most agencies do not build",
      "Reports against revenue, retention, and cohort LTV",
      "$20K upfront priced at cost, retainer or performance share after",
      "Compliance baked in (TCPA, sweepstakes, bonus structures)",
    ],
  },
  inhouse: {
    title: "In-house hire",
    subtitle: "Single senior lifecycle marketer",
    items: [
      "One person with limited channel and platform breadth",
      "Needs direction, technical scaffolding, and management",
      "Inconsistent testing without clear leverage analysis",
      "High fixed cost, slow ramp, narrow legal awareness",
      "$150K-$250K loaded salary plus tooling",
      "12+ months to reach the output a built system produces in 4 weeks",
    ],
  },
}

export function Comparison() {
  return (
    <section className="py-24 lg:py-36 relative">
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
              A different shape
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            What we are not.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            There are good reasons to hire a traditional Klaviyo agency. There are good reasons to bring lifecycle in-house. 
            There are some reasons to work with us instead. Worth being honest about all three.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Traditional Agency */}
          <motion.div
            className="bg-[#020202] border border-border/30 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl lg:text-[22px] font-normal tracking-tight mb-2">{comparisonData.traditional.title}</h4>
            <p className="text-sm text-muted-foreground mb-6">{comparisonData.traditional.subtitle}</p>
            <ul className="space-y-3.5">
              {comparisonData.traditional.items.map((item, i) => (
                <li key={i} className="text-sm text-[#e5e5e5] leading-snug pl-6 relative">
                  <span className="absolute left-0 top-2 w-3 h-px bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Formless Creature - Featured */}
          <motion.div
            className="rounded-2xl p-8 relative border border-[#bbdef2]/30"
            style={{ background: "linear-gradient(180deg, rgba(187,222,242,0.05) 0%, rgba(0,0,0,0) 100%)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -top-2.5 left-6">
              <span className="text-[11px] font-mono uppercase tracking-wider bg-gradient-to-r from-[#bbdef2] via-[#d1aad7] to-[#f4f0ff] text-background px-3 py-1 rounded-full font-medium">
                Formless Creature
              </span>
            </div>
            <h4 className="text-xl lg:text-[22px] font-normal tracking-tight mb-2 mt-2">{comparisonData.formless.title}</h4>
            <p className="text-sm text-muted-foreground mb-6">{comparisonData.formless.subtitle}</p>
            <ul className="space-y-3.5">
              {comparisonData.formless.items.map((item, i) => (
                <li key={i} className="text-sm text-[#e5e5e5] leading-snug pl-6 relative">
                  <span className="absolute left-0 top-2 w-3 h-px bg-[#bbdef2]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* In-House */}
          <motion.div
            className="bg-[#020202] border border-border/30 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl lg:text-[22px] font-normal tracking-tight mb-2">{comparisonData.inhouse.title}</h4>
            <p className="text-sm text-muted-foreground mb-6">{comparisonData.inhouse.subtitle}</p>
            <ul className="space-y-3.5">
              {comparisonData.inhouse.items.map((item, i) => (
                <li key={i} className="text-sm text-[#e5e5e5] leading-snug pl-6 relative">
                  <span className="absolute left-0 top-2 w-3 h-px bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
