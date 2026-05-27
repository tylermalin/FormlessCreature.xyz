import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Audit received — Formless Creature",
  description: "Your audit intake has been received. We respond within 5 business days.",
  robots: { index: false, follow: false },
}

const steps = [
  {
    num: "01",
    title: "We read it carefully",
    desc: "Both partners read every intake. We bring different lenses to the same data, which is the point.",
  },
  {
    num: "02",
    title: "We respond within 5 business days",
    desc: "Either a written diagnostic, a request for a scoping call, or an honest \"we're not the right fit and here's who might be.\"",
  },
  {
    num: "03",
    title: "If we move forward",
    desc: "We pick the engagement pattern that fits — fixed-fee, project + retainer, or project + performance share — and write an engagement letter you can read in 10 minutes.",
  },
]

export default function ThankYouPage() {
  return (
    <main id="top" className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-32 lg:pt-44 lg:pb-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_70%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-w-full rounded-full bg-gradient-to-br from-[#bbdef2]/10 via-[#d1aad7]/8 to-[#f4f0ff]/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-6 h-px bg-muted-foreground" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Received
            </span>
            <span className="w-6 h-px bg-muted-foreground" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            Got it. We&apos;ll be in touch.
          </h1>
          <p className="text-lg text-[#f4f0ff] leading-relaxed max-w-xl mx-auto mb-16">
            Your intake is in front of both of us. You&apos;ll hear from one of us within five business days at the email you submitted. Reply to that thread to confirm a call time.
          </p>

          <div className="grid sm:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/30 text-left">
            {steps.map((step) => (
              <div key={step.num} className="bg-[#020202] p-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  {step.num}
                </div>
                <h3 className="text-lg font-normal tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-2xl font-medium hover:bg-transparent hover:text-foreground border border-foreground transition-all group"
            >
              Back to home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#faq"
              className="inline-flex items-center justify-center gap-2 border border-border/40 px-6 py-3.5 rounded-2xl font-medium text-foreground hover:border-foreground hover:bg-foreground/5 transition-colors"
            >
              Read the FAQ while you wait
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
