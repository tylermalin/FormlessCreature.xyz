"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_70%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#bbdef2]/20 via-[#d1aad7]/15 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#d1aad7]/15 to-[#bbdef2]/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-muted-foreground" />
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Consulting for growth, AI integration, automation
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-light tracking-tight leading-[1.0] mb-8">
              Finally,
              <br />
              <span className="text-muted-foreground">one team that runs all of it.</span>
            </h1>

            <p className="text-lg text-[#f4f0ff] leading-relaxed max-w-xl mb-10">
              Most companies stitch together five vendors who do not talk to each other. We integrate growth, AI, and automation under two partners — operators who have built and sold an Inc. 500 digital agency, run regulatory enforcement for the federal government, and shipped infrastructure across every layer of the stack we now sell.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-2xl font-medium hover:bg-transparent hover:text-foreground border border-foreground transition-all group"
              >
                Start with a free audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#approach"
                className="inline-flex items-center gap-2 border border-border/40 px-6 py-3.5 rounded-2xl font-medium text-foreground hover:border-foreground hover:bg-foreground/5 transition-colors"
              >
                See how we work
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative aspect-square max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#bbdef2]/40 via-[#d1aad7]/30 to-[#f4f0ff]/20 blur-[80px] animate-float opacity-70" />
            <div className="absolute inset-0 w-1/2 h-1/2 top-[5%] right-[5%] rounded-full bg-[#bbdef2]/40 blur-[50px] animate-float opacity-55" style={{ animationDirection: "reverse", animationDuration: "10s" }} />
            
            {/* Orbital SVG — animated atomic motion */}
            <svg className="absolute inset-0 w-full h-full z-[1]" viewBox="0 0 400 400" fill="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#bbdef2" stopOpacity="0.9"/>
                  <stop offset="50%" stopColor="#d1aad7" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#f4f0ff" stopOpacity="0.4"/>
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#d1aad7" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#bbdef2" stopOpacity="0.2"/>
                </linearGradient>
              </defs>

              {/* Concentric rings — opacity breath */}
              <circle
                cx="200" cy="200" r="100"
                stroke="url(#g1)" strokeWidth="0.5" fill="none"
                className="hero-ring-pulse"
                style={{ ["--pulse-low" as string]: "0.25", ["--pulse-high" as string]: "0.55", ["--pulse-duration" as string]: "7s" }}
              />
              <circle
                cx="200" cy="200" r="140"
                stroke="url(#g1)" strokeWidth="0.5" fill="none"
                className="hero-ring-pulse"
                style={{ ["--pulse-low" as string]: "0.35", ["--pulse-high" as string]: "0.75", ["--pulse-duration" as string]: "9s", animationDelay: "-2s" }}
              />
              <circle
                cx="200" cy="200" r="180"
                stroke="url(#g1)" strokeWidth="0.5" fill="none"
                className="hero-ring-pulse"
                style={{ ["--pulse-low" as string]: "0.18", ["--pulse-high" as string]: "0.45", ["--pulse-duration" as string]: "11s", animationDelay: "-4.5s" }}
              />

              {/* Tilted orbital ellipses — continuously rotating at different speeds & directions.
                  Negative animation-delay sets each one's starting tilt. */}
              <ellipse
                cx="200" cy="200" rx="170" ry="60"
                stroke="url(#g2)" strokeWidth="1" fill="none" opacity="0.7"
                className="hero-orbit-cw"
                style={{ ["--orbit-duration" as string]: "24s", animationDelay: "-1.33s" }}
              />
              <ellipse
                cx="200" cy="200" rx="170" ry="60"
                stroke="url(#g2)" strokeWidth="1" fill="none" opacity="0.5"
                className="hero-orbit-ccw"
                style={{ ["--orbit-duration" as string]: "18s", animationDelay: "-1s" }}
              />
              <ellipse
                cx="200" cy="200" rx="170" ry="60"
                stroke="url(#g2)" strokeWidth="1" fill="none" opacity="0.4"
                className="hero-orbit-cw"
                style={{ ["--orbit-duration" as string]: "32s", animationDelay: "-6.22s" }}
              />

              {/* Satellite dots — each orbits center at its own period.
                  Outer <g> handles rotation, inner circle handles brightness pulse. */}
              <g
                className="hero-orbit-cw"
                style={{ ["--orbit-duration" as string]: "28s" }}
              >
                <circle cx="340" cy="200" r="2" fill="#bbdef2" className="hero-dot-pulse" />
              </g>
              <g
                className="hero-orbit-ccw"
                style={{ ["--orbit-duration" as string]: "20s" }}
              >
                <circle cx="60" cy="200" r="2" fill="#d1aad7" className="hero-dot-pulse" style={{ animationDelay: "-1s" }} />
              </g>
              <g
                className="hero-orbit-cw"
                style={{ ["--orbit-duration" as string]: "36s" }}
              >
                <circle cx="200" cy="40" r="2" fill="#f4f0ff" className="hero-dot-pulse" style={{ animationDelay: "-1.7s" }} />
              </g>
              <g
                className="hero-orbit-ccw"
                style={{ ["--orbit-duration" as string]: "24s" }}
              >
                <circle cx="200" cy="360" r="2" fill="#bbdef2" className="hero-dot-pulse" style={{ animationDelay: "-0.4s" }} />
              </g>
            </svg>
            
            <div className="relative flex items-center justify-center h-full z-[2]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fcmarkonly-d2U4DaaK7ouPlnToLY1ezKlIMTFBXq.png"
                alt="Formless Creature"
                width={200}
                height={200}
                className="w-[39%] h-auto opacity-90"
                style={{ filter: "drop-shadow(0 0 40px rgba(187,222,242,0.25)) drop-shadow(0 0 80px rgba(209,170,215,0.15))" }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
