"use client"

import { motion } from "framer-motion"

const points = [
  {
    num: "01",
    title: "Partner-level accountability on every engagement",
    description:
      "One of the two of us is on every call, every weekly check-in, every deliverable. Specialists do not own the client relationship. The buck stops with us.",
  },
  {
    num: "02",
    title: "Hand-selected bench, per engagement",
    description:
      "Coders, designers, producers, directors, data engineers, creatives. Dozens of relationships built over years of working together. We pick the right people for the specific work in front of us, not whoever happens to be on a bullpen this quarter.",
  },
  {
    num: "03",
    title: "No project management tax",
    description:
      "You do not pay for a layer of account managers translating between specialists and you. We are the translation layer, the strategy layer, and the operators coordinating execution.",
  },
  {
    num: "04",
    title: "Honest about scope",
    description:
      "Some work we execute directly. Some runs through specialists under our coordination. We tell you which is which at the engagement letter, not after the contract is signed.",
  },
]

export function Comparison() {
  return (
    <section id="delivery" className="py-24 lg:py-36 relative">
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
              How we deliver
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            Two partners. A hand-selected specialist bench per engagement. No subcontracting through anonymous marketplaces.
          </h2>
          <p className="text-lg text-[#f4f0ff] leading-relaxed">
            A fair question worth answering up front: how does one consultancy deliver across sixteen service lines without becoming a Fiverr middleman or selling more than it can ship? The honest answer is the operating model itself.
          </p>
        </motion.div>

        {/* Delivery Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl lg:text-[32px] font-light tracking-tight leading-[1.25] mb-8">
              Every engagement is run by the two of us. Where the work requires specific bandwidth or domain depth, we pull from a bench of coders, designers, producers, directors, data engineers, and creatives we have worked with for years and would hire again. Specialists are selected per engagement based on the actual scope, not assigned by a staffing layer. No anonymous talent. No project management overhead billed back to the client.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              The result is operator-level coordination across disciplines that traditional agencies treat as separate cost centers. You get the depth of specialists, the continuity of partners who stay on the engagement start to finish, and one place to call when something needs to move.
            </p>
          </motion.div>

          {/* Numbered points */}
          <div className="flex flex-col">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                className={`grid grid-cols-[36px_1fr] gap-4 items-start py-5 ${
                  i !== 0 ? "border-t border-border/20" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="text-[11px] font-mono text-muted-foreground tracking-wider pt-1">
                  {point.num}
                </span>
                <div>
                  <h4 className="text-lg font-normal tracking-tight mb-1.5">
                    {point.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
