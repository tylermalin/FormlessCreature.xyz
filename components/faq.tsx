"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What kind of platforms do you work with?",
    answer: "Platforms with working acquisition and a measurable retention problem. Typically pre-seed to Series B. We are especially well-suited to platforms operating in regulated or regulated-adjacent categories: sweepstakes mechanics, crypto-adjacent fintech, prediction markets, anywhere TCPA and state gaming law actually matter to the build.",
  },
  {
    question: "How is this different from a Klaviyo agency?",
    answer: "A traditional Klaviyo agency produces campaigns and designs creative. We build the infrastructure underneath them: segmentation logic, the bonus engine, attribution architecture, compliance scaffolding. We are the operating system, not the campaigns. If you also need ongoing creative production, that is a separate vendor (and we can recommend partners).",
  },
  {
    question: "What if we already have Klaviyo set up?",
    answer: "Most clients do. We audit what exists, keep what works, rebuild what does not. The infrastructure we build sits on top of Klaviyo (or migrates to it). We are not replacing your ESP; we are building the decision layer that makes it perform.",
  },
  {
    question: "How do you measure performance?",
    answer: "We establish a 90-day pre-engagement baseline using your production data. Attribution is instrumented from day one. We report monthly against cohort LTV, retention curves, and revenue directly attributable to the systems we built. If we cannot prove the lift, we did not produce it.",
  },
  {
    question: "What is the time commitment on our side?",
    answer: "Light. We need a 30-minute scoping call, read access to your production database, and a point of contact for questions during the build. Most clients spend 2-4 hours total during the 4-week build phase. After launch, the monthly reporting call is 30 minutes.",
  },
  {
    question: "Can we start with just the audit?",
    answer: "Yes. The audit is free. It produces a written diagnostic of your funnel, your retention metrics, and the highest-leverage levers in your data. If we are not the right fit, we say so. No obligation to proceed.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 lg:py-36 relative">
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
              Frequently asked
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05]">
            Questions worth answering up front.
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="border-t border-border/30">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-border/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <button
                className="w-full flex items-center justify-between gap-6 py-8 text-left hover:opacity-80 transition-opacity"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-lg lg:text-xl xl:text-[22px] font-normal tracking-tight flex-1">
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  openIndex === i 
                    ? "bg-foreground border-foreground" 
                    : "border-border/50"
                }`}>
                  <Plus className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openIndex === i 
                      ? "rotate-45 text-background" 
                      : "text-foreground"
                  }`} />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed pb-8 max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
