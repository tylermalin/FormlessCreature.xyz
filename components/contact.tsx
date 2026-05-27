"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-6 h-px bg-muted-foreground" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Get Started
            </span>
            <span className="w-6 h-px bg-muted-foreground" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-6">
            Ready to build your{" "}
            <span className="text-gradient">retention infrastructure</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            We work with high-growth startups in web3, deeptech, and emerging technology. 
            If that sounds like you, let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="mailto:hello@formlesscreature.xyz"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-all group text-lg"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Or reach out directly at{" "}
            <a href="mailto:hello@formlesscreature.xyz" className="text-foreground hover:underline">
              hello@formlesscreature.xyz
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
