"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36 relative border-t border-border/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-full rounded-full bg-gradient-to-br from-[#bbdef2]/10 via-[#d1aad7]/8 to-[#f4f0ff]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            Start with a free audit.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            30-minute scoping call. Written diagnostic of your funnel. No fee. No commitment. 
            If we are not the right fit, we say so.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="mailto:tyler@formlesscreature.xyz"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-medium hover:bg-transparent hover:text-foreground border border-foreground transition-all group text-base"
            >
              tyler@formlesscreature.xyz
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#faq"
              className="inline-flex items-center justify-center gap-2 border border-border/40 px-8 py-4 rounded-2xl font-medium text-foreground hover:border-foreground hover:bg-foreground/5 transition-colors text-base"
            >
              Read the FAQ first
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
