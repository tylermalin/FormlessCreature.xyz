import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuditForm } from "@/components/audit-form"

export const metadata: Metadata = {
  title: "Audit intake — Formless Creature",
  description:
    "Tell us about your business, what success looks like, and where you're stuck. Within five business days, you'll get a written diagnostic from the two of us. No fee. No obligation.",
  robots: { index: true, follow: true },
}

export default function AuditPage() {
  return (
    <main id="top" className="min-h-screen">
      <Navigation />

      {/* ===== HEADER ===== */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#bbdef2]/15 via-[#d1aad7]/10 to-transparent blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-muted-foreground" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Audit intake
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            Start with a free audit.
          </h1>
          <p className="text-lg text-[#f4f0ff] leading-relaxed max-w-2xl mb-10">
            Tell us about the business, what success looks like, and where you&apos;re stuck. Within five business days, you&apos;ll get a written diagnostic from the two of us — what we see, what&apos;s leverage, and what an engagement would actually build. If we&apos;re not the right fit, we say so.
          </p>

          {/* Expectations strip */}
          <div className="grid sm:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/30">
            {[
              {
                label: "Time required",
                value: "~10 minutes",
                note: "Twelve required questions. Seven optional.",
              },
              {
                label: "Response time",
                value: "5 business days",
                note: "Written diagnostic delivered by email.",
              },
              {
                label: "Cost",
                value: "$0",
                note: "No fee. No commitment to engage afterward.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#020202] px-6 py-5"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  {item.label}
                </div>
                <div className="text-2xl font-light tracking-tight mb-1">
                  {item.value}
                </div>
                <div className="text-[13px] text-muted-foreground leading-snug">
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="pb-32 lg:pb-40 relative">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <AuditForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
