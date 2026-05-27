"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 lg:py-36 relative bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Quote Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-muted-foreground" />
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Who is behind this
              </span>
            </div>
            <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight leading-[1.3] mb-8">
              {'"I built and sold a digital agency that did everything. The lesson was that integration is the hard part, not the capability. Formless Creature is the integration, run by someone who has actually shipped the work."'}
            </blockquote>
            <cite className="text-sm font-mono text-muted-foreground tracking-wider uppercase not-italic">
              Tyler Malin, Formless Creature
            </cite>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            className="bg-[#020202] border border-border/30 rounded-2xl p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-normal tracking-tight mb-6">Tyler Malin</h4>
            
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Founder of Idea Farmer, a digital marketing agency that ranked #95 on the Inc. 500.
                Built and ran lifecycle marketing, audience strategy, paid acquisition, and content execution for global brands
                including Whirlpool, Toyota, Microsoft, and Dreamworks. Idea Farmer was acquired by Maker Studios.
              </p>
              <p>
                Prior to that, founded and exited Social Animal, a VR gaming and panoramic video startup.
                The legal-engineering background comes from earlier work as a litigation associate at Cravath Swaine & Moore,
                a regulatory fellow at the CFTC during post-Enron enforcement, and labor and IP law practice.
              </p>
              <p>
                Currently CEO and Co-Founder of Mālama Labs, a seed-stage climate infrastructure platform building the AICo2 methodology referenced in the AI Governance service line.
                Formless Creature is the consulting vehicle through which growth, AI, and automation engagements run.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border/30 space-y-4">
              {[
                { label: "Built & sold", value: "Idea Farmer (Inc. 500 #95, acq. Maker Studios). Social Animal (VR)." },
                { label: "Clients", value: "Whirlpool, Toyota, Microsoft, Dreamworks, others." },
                { label: "Legal", value: "Cravath Swaine & Moore. CFTC fellow. JD, Fordham." },
                { label: "Current", value: "CEO, Mālama Labs. AICo2 methodology author." },
              ].map((cred, i) => (
                <div key={i} className="grid grid-cols-[80px_1fr] gap-4 text-sm items-baseline">
                  <span className="font-mono text-muted-foreground tracking-wider uppercase text-[10px]">
                    {cred.label}
                  </span>
                  <span className="text-[#e5e5e5] leading-snug">{cred.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
