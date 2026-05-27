"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "STEP 01",
    title: "Free audit",
    description: "30-minute scoping call followed by a written diagnostic of your funnel, your retention metrics, and the highest-leverage levers in your data. No fee. No commitment. If we are not the right fit, we say so.",
  },
  {
    num: "STEP 02",
    title: "Baseline & engagement letter",
    description: "Establish the 90-day pre-engagement baseline (Option B), define carve-outs, lock the build scope, sign engagement letter. Production database read access is set up for measurement.",
  },
  {
    num: "STEP 03",
    title: "Build (4 weeks)",
    description: "Foundation in Week 1. Email lifecycle in Weeks 2-3. SMS and bonus engine in Weeks 3-4. Measurement layer instrumented throughout. Compliance review runs in parallel.",
  },
  {
    num: "STEP 04",
    title: "Launch",
    description: "System goes live at Week 5. 12-month measurement window begins. Initial flows fire. Bonus engine becomes active. First wave of users hits the new lifecycle architecture.",
  },
  {
    num: "STEP 05",
    title: "Operate & report",
    description: "Monthly attribution reports. Quarterly performance review. Either ongoing partnership (Option A) or measured hand-off (Option B). System tunes itself over time as data accumulates.",
  },
  {
    num: "STEP 06",
    title: "True up",
    description: "Final attribution report at Month 17. Performance share invoiced (Option B) or retainer concludes (Option A). System remains operational under your control. We are paid for what we produced.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-36 relative">
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
              How it works
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            From audit to measured lift in six steps.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            The work starts with a free audit. Nothing gets built until both sides are aligned on what the diagnostic 
            actually says, what the baseline is, and what the engagement should produce.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="border-t border-border/30">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="grid md:grid-cols-[120px_1fr_1fr] gap-6 lg:gap-16 py-10 border-b border-border/30 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="text-xs font-mono text-muted-foreground tracking-wider">
                {step.num}
              </span>
              <h3 className="text-2xl lg:text-[28px] font-light tracking-tight">{step.title}</h3>
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
