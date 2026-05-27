"use client"

const capabilities = [
  "Growth Strategy",
  "Lifecycle Marketing",
  "Paid Acquisition",
  "Conversion Optimization",
  "Brand & Design",
  "Content & Creative",
  "Data & Analytics",
  "AI Strategy",
  "AI Governance",
  "EU AI Act Compliance",
  "Custom AI Development",
  "Agent Infrastructure",
  "Workflow Automation",
  "API Orchestration",
  "Data Pipelines",
  "Custom Internal Tools",
]

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-border/20 py-8 bg-[#020202]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-12 animate-marquee hover:[animation-play-state:paused]">
        {[...capabilities, ...capabilities].map((item, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="text-xl md:text-2xl font-light tracking-tight text-[#e5e5e5]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#bbdef2] via-[#d1aad7] to-[#f4f0ff] opacity-60" />
          </div>
        ))}
      </div>
    </section>
  )
}
