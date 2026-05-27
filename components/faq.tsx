"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "How does one consultancy deliver across sixteen service lines?",
    answer: "Two partners on every engagement, plus a hand-selected bench of specialists for execution depth in specific disciplines. Some service lines we deliver directly. Others run through specialists under our coordination. We tell you which is which at the engagement letter, not after the contract is signed. The delivery model section explains the structure.",
  },
  {
    question: "Can we engage you on just one service line?",
    answer: "Yes. Most engagements start with one service line, usually Lifecycle Marketing, AI Strategy, or Workflow Automation. The other service lines are available when you need them and they make sense to add. We do not push integrated engagement as a requirement. The integration is a benefit when it applies, not a sales tactic.",
  },
  {
    question: "What kind of companies do you work with?",
    answer: "Companies with audience and ambition. Typically pre-seed to Series B for the Growth practice, established mid-market and enterprise for AI Integration and Governance work. We are especially well-suited to companies operating in regulated or regulated-adjacent categories: sweepstakes mechanics, crypto-adjacent fintech, prediction markets, and anywhere TCPA, EU AI Act, or state law actually matters to the build.",
  },
  {
    question: "How does pricing work across different services?",
    answer: "We use four engagement patterns across the practices: diagnostic / audit, fixed-fee deliverable, project build + retainer, and project build + performance share. The Engagement section walks through each one and which service lines they typically apply to. AI Governance and AI Strategy engagements are usually fixed-fee deliverables. Custom AI Development is scoped by build complexity. Lifecycle Marketing engagements often use build + retainer or build + performance share. Hybrid structures are common when the work calls for it. We quote each engagement explicitly. No hidden line items.",
  },
  {
    question: "What does the free audit actually produce?",
    answer: "A short written diagnostic covering your current state, the highest-leverage opportunities in your data or operations, and what an engagement would actually build. Written for leadership consumption, not for a marketing manager. The audit is unconditional. If we are not the right fit, we say so. If you are not ready, we say that too.",
  },
  {
    question: "Do you have legal and compliance expertise in-house?",
    answer: "Yes. Tyler holds a JD from Fordham and practiced as a litigation associate at Cravath Swaine & Moore (Time Warner-FTC merger work) and as a regulatory fellow at the CFTC during post-Enron enforcement. Lifecycle Marketing engagements include TCPA, CAN-SPAM, and sweepstakes review. AI Integration engagements include EU AI Act Article 53 and CSRD compliance work. Legal capability is a built-in feature, not a referral to outside counsel.",
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
