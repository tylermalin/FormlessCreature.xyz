import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  navigate: [
    { href: "#approach", label: "Approach" },
    { href: "#services", label: "Services" },
    { href: "#engagement", label: "Engagement" },
    { href: "#process", label: "Process" },
  ],
  company: [
    { href: "#about", label: "About Tyler" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],
  legal: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formless%20white%20banner-0oc5J9kNKTdkv24zFP5WWtML107PDK.png"
              alt="Formless Creature"
              width={180}
              height={40}
              className="h-auto w-[180px] mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Retention infrastructure for platforms. Email, SMS, promotional bonus engines, 
              and the compliance architecture underneath them.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-5">
              Navigate
            </h5>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[#e5e5e5] hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-5">
              Company
            </h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[#e5e5e5] hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-5">
              Legal
            </h5>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[#e5e5e5] hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Formless Creature. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            San Francisco
          </p>
        </div>
      </div>
    </footer>
  )
}
