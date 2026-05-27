"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "3", label: "Practice areas" },
  { value: "16", label: "Service lines" },
  { value: "1", label: "Point of accountability" },
  { value: "20+ yrs", label: "Operator experience" },
]

export function TrustStrip() {
  return (
    <section className="border-y border-border/30 py-12 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Three practices. Two partners. Hand-selected specialist bench.
          </span>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl font-light tracking-tight mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
