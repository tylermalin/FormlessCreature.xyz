"use client"

import { motion } from "framer-motion"

const steps = [
  {
    title: "Discovery Call",
    description: "We learn your business, your stack, and your growth goals. No fluff—just the numbers that matter.",
  },
  {
    title: "Infrastructure Audit",
    description: "We map your current retention systems, identify gaps, and prioritize opportunities by impact.",
  },
  {
    title: "Roadmap & Scope",
    description: "A clear plan with defined deliverables, timelines, and success metrics tied to your KPIs.",
  },
  {
    title: "Build & Deploy",
    description: "We implement systems in sprints, shipping incrementally so you see results fast.",
  },
  {
    title: "Measure & Iterate",
    description: "Continuous optimization based on real data. We refine until the numbers move.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-muted-foreground" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            How we work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From first call to continuous optimization—a structured approach to 
            building retention infrastructure that scales.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="border-t border-border/50">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-16 py-10 border-b border-border/50 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-xs font-mono text-muted-foreground tracking-wider">
                STEP 0{i + 1}
              </span>
              <h3 className="text-2xl font-light">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
