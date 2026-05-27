import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Marquee } from "@/components/marquee"
import { Approach } from "@/components/approach"
import { Services } from "@/components/services"
import { Comparison } from "@/components/comparison"
import { Engagement } from "@/components/engagement"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustStrip />
      <Marquee />
      <Approach />
      <Services />
      <Comparison />
      <Engagement />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
